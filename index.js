// Dependencies
var Couleurs = require("couleurs");

// Constructor
var BugKiller = module.exports = {};

/**
 * log
 * Displays debug messages by providing the type.
 *
 * @name log
 * @function
 * @param {String} message The debug message that should be displayed
 * @param {String} type The message type (e.g. "error", "info" etc)
 * @return {Object} BugKiller instance
 */
BugKiller.log = function (message, type) {

    var logMessage = "";

    // Get type from config
    type = BugKiller._config[type];

    // Type is doesn't exist in config
    if (typeof type !== "object") {

        console.warn("Invalid type: " + type
            + ". Configure it in BugKiller._config following the documentation"
            + "and your message will appear correctly."
        );

        // Build the message that will be printed
        logMessage += "UNKNOWN ";
        if (BugKiller._config.displayDate) {
            logMessage += "[" + new Date() + "] ";
        }
        logMessage += message;

        // Print message
        console.log(logMessage);

        return BugKiller;
    }

    if (type.level > BugKiller._config.logLevel) {
        return BugKiller;
    }

    // Build message
    logMessage += "\x1B[1m" + type.text.rgb(type.color) + "\x1B[22m ";
    if (BugKiller._config.displayDate) {
        logMessage += "[" + new Date() + "] ";
    }

    logMessage += message;

    // Print message
    console.log(logMessage);
    return BugKiller;
};

// Config
BugKiller._config = {
    error: {
        color: [255, 0, 0]
      , text: "ERROR"
      , level: 1
    }
  , warn: {
        color: [200, 200, 0]
      , text: "WARN"
      , level: 2
    }
  , info: {
        color: [0, 200, 255]
      , text: "INFO"
      , level: 3
    }
  , displayDate: true
  , logLevel: 2
};
