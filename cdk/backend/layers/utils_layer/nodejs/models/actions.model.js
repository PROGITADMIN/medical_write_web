const mongoose = require("mongoose");

const actionsSchema = new mongoose.Schema(
  {
    action_name: {
      type: String,
      trim: true,
    },

    action_key: {
      type: String,
      trim: true,
    },

    action_description: {
      type: String,
      trim: true,
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Actions", actionsSchema);
