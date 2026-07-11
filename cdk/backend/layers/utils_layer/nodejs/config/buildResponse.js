// Module-level "current request" pointer. Lambda processes one invocation at a
// time per execution environment, so this is safe. Each entrypoint calls
// setRequestEvent(event) at the top of its handler — buildResponse then echoes
// the matching Origin on every response without each call site having to pass
// the event explicitly.
let currentEvent = null;

function setRequestEvent(event) {
  currentEvent = event;
}

function pickAllowedOrigin(eventArg) {
  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  if (allowed.length === 0) return "*";

  const event = eventArg || currentEvent;
  const requestOrigin =
    event?.headers?.origin || event?.headers?.Origin || "";

  if (requestOrigin && allowed.includes(requestOrigin)) {
    return requestOrigin;
  }

  return allowed[0];
}

function buildResponse(statusCode, body, options = {}) {
  const responseHeaders = {
    "Access-Control-Allow-Origin": pickAllowedOrigin(options.event),
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-App-Key, X-App-Secret, X-Tenant-Id",
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const response = {
    statusCode,
    headers: responseHeaders,
    body: body ? JSON.stringify(body) : null,
  };

  if (options.cookies?.length) {
    response.multiValueHeaders = {
      "Set-Cookie": options.cookies,
    };
  }

  return response;
}

function handlePreflight(event) {
  return buildResponse(200, null, { event });
}

function buildRedirectResponse(url, options = {}) {
  const responseHeaders = {
    "Access-Control-Allow-Origin": pickAllowedOrigin(options.event),
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-App-Key, X-App-Secret, X-Tenant-Id",
    "Location": url,
    ...(options.headers || {}),
  };

  const response = {
    statusCode: 302,
    headers: responseHeaders,
    body: null,
  };

  if (options.cookies?.length) {
    response.multiValueHeaders = {
      "Set-Cookie": options.cookies,
    };
  }

  return response;
}

module.exports = {
  buildResponse,
  buildRedirectResponse,
  handlePreflight,
  pickAllowedOrigin,
  setRequestEvent,
};
