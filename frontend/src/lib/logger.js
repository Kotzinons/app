// Environment-conditional logger.
// In production, no-ops (or routes to a future error service like Sentry).
// In dev, writes to console for debugging.

const IS_PROD = process.env.NODE_ENV === "production";

function noop() { /* intentionally empty */ }

export const logger = {
  debug: IS_PROD ? noop : (...args) => console.debug("[debug]", ...args),
  info: IS_PROD ? noop : (...args) => console.info("[info]", ...args),
  warn: IS_PROD ? noop : (...args) => console.warn("[warn]", ...args),
  error: IS_PROD
    ? (...args) => {
        // Hook here for Sentry or other production error services.
        // window.Sentry?.captureException?.(args[args.length - 1]);
        void args;
      }
    : (...args) => console.error("[error]", ...args),
};

export default logger;
