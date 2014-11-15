// Dependencies
var Couleurs = require("couleurs")();

// Constructor
var BugKiller = module.exports = {};

// Config
BugKiller.config = {
    error: {
        color: [192, 57, 43]
      , text: "error"
      , level: 1
    }
  , warn: {
        color: [241, 196, 15]
      , text: "warn "
      , level: 2
    }
  , info: {
        color: [52, 152, 219]
      , text: "info "
      , level: 3
    }
  , displayDate: true
  , logLevel: 2
};

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
    type = BugKiller.config[type];
    if (type.level > BugKiller.config.logLevel) {
        return BugKiller;
    }

    // Build message
    logMessage += Couleurs.bold(Couleurs.rgb(type.text, type.color)) + " ";
    if (BugKiller.config.displayDate) {
        logMessage += "[" + new Date() + "] ";
    }

    // Add message
    logMessage += message;

    // Print message
    console.log(logMessage);

    return BugKiller;
};
