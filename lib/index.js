// Dependencies
var Couleurs = require("couleurs")
  , AnsiParser = require("ansi-parser")
  ;

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
  , date: false
  , logLevel: 4
  , stream: process.stdout
};

/**
 * getDate
 * Returns the stringified date. This method can be overrided for a custom date format.
 *
 * @name getDate
 * @function
 * @return {String} The date in HH:mm.ss - DD.MM.YYYY format.
 */
BugKiller.getDate = function () {

    var date = new Date()
      , hour = date.getHours()
      , min  = date.getMinutes()
      , sec  = date.getSeconds()
      , year = date.getFullYear()
      , month = date.getMonth() + 1
      , day  = date.getDate()
      ;

    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    return "[" + hour + ":" + min + "." + sec + " - " + day + "." + month + "." + year + "]";
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
    logMessage += Couleurs(type.text).bold().fg(type.color) + " ";
    if (BugKiller.config.displayDate) {
        logMessage += BugKiller.getDate() + " ";
    }

    // Add message
    logMessage += message;

    // No fun when the stream is not TTY
    if (!BugKiller.config.stream.isTTY) {
        logMessage = AnsiParser.removeAnsi(/\u001b\[.*?m/g, "");
    }

    // Print message
    BugKiller.config.stream.write(logMessage + "\n");

    return BugKiller;
};
