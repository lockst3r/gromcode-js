/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

export function createLogger() {
  const logger = [];

  function warn(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "warn",
    });
  }

  function error(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "error",
    });
  }

  function log(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "log",
    });
  }

  function getRecords(type) {
    if (type != undefined) {
      return logger
        .filter((item) => item.type === type)
        .sort((a, b) => a.message < b.message);
    }
    return logger.sort((a, b) => a.dateTime < b.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}
