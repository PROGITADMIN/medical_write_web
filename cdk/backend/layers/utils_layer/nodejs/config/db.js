const mongoose = require("mongoose");
const { getSecretKey } = require("./secretManager.js");
const logger = require("../utils/logger.js");


// Cache the in-flight/established connection across warm Lambda invocations so
// a container opens at most one connection and reuses it, instead of opening a
// fresh one (and leaking the old) on every request.
let connPromise = null;

const connectDB = async () => {
  // Already connected in this warm container — reuse it.
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  // A connect is already in flight (or cached from a previous invocation).
  if (connPromise) return connPromise;

  connPromise = (async () => {
    const mongoUri = await getSecretKey("MONGO_URI");
    // const dbName = await getSecretKey("DB_NAME").catch(() => "master-management");
    const dbName = await getSecretKey("DB_NAME").catch(() => {
      try {
        const pathOnly = mongoUri.split("?")[0];
        const lastSlash = pathOnly.lastIndexOf("/");
        return pathOnly.slice(lastSlash + 1) || "cargoclave-portal";
      } catch (err) {
        return "cargoclave-portal";
      }
    });

    const connectOptions = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      // Each Lambda container serves one request at a time, so a large pool
      // just multiplies open connections across concurrent/warm containers and
      // exhausts the Mongo connection limit (the TLS/SSL errors you're seeing).
      // Keep it small.
      maxPoolSize: 5,
      // Let the pool shrink to zero when the container is idle so we don't hold
      // connections open between invocations.
      minPoolSize: 0,
      // Return idle sockets to the server instead of holding them until the
      // container is recycled.
      maxIdleTimeMS: 60000,
    };
    if (dbName && dbName !== "master-dev") {
      connectOptions.dbName = dbName;
    }

    await mongoose.connect(mongoUri, connectOptions);
    logger.info(`MongoDB connected → database: ${dbName}`);
    return mongoose.connection;
  })().catch((err) => {
    // Reset so the next invocation can retry. Never process.exit() here — that
    // kills the warm container and forces a cold start (more new connections).
    connPromise = null;
    logger.error("MongoDB connection failed", err);
    throw err;
  });

  return connPromise;
};

mongoose.connection.on("disconnected", () => {
  logger.warn("⚠️   MongoDB disconnected");
  connPromise = null;
});
mongoose.connection.on("reconnected", () => {
  logger.info("✅  MongoDB reconnected");
});

module.exports = { connectDB };
