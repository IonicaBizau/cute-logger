// Dependencies
var Couleurs = require("couleurs")
  , AnsiParser = require("ansi-parser")
  , Typpy = require("typpy")
  , Deffy = require("deffy")
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
  , level: 4
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
 * Usage:
 *
 * ```js
 * BugKiller.log("Some info message");
 * BugKiller.log(new Error("Interesting error"));
 * ```
 *
 * The config object can be modified to make this module to act diferently.
 * Defaults are shown:
 *
 * ```js
 * BugKiller.config = {
 *     // The error type
 *     error: {
 *         color: [192, 57, 43]
 *       , text: "error"
 *       , level: 1
 *     }
 *     // The warning type
 *   , warn: {
 *         color: [241, 196, 15]
 *       , text: "warn "
 *       , level: 2
 *     }
 *     // The info type
 *   , info: {
 *         color: [52, 152, 219]
 *       , text: "info "
 *       , level: 3
 *     }
 *     // Display date
 *   , date: false
 *     // Log level
 *   , level: 4
 *     // Output stream
 *   , stream: process.stdout
 * };
 * ````
 *
 * @name log
 * @function
 * @param {String} message The debug message that should be displayed
 * @param {String} type The message type (e.g. "error", "info" etc). Default is
 * computed (`"error"` if the message is an `Error`) or `"info"` if the provided
 * `type` is invalid.
 * @return {Object} The `BugKiller` instance.
 */
BugKiller.log = function (message, type) {

    var logMessage = "";

    type = Deffy(type, Typpy(message));
    if (type === "error" && message && message.message) {
        message = message.message;
    }

    if (Typpy(BugKiller.config[type]) === "undefined") {
        type = "info";
    }

    // Get type from config
    type = BugKiller.config[type];
    if (type.level > BugKiller.config.level) {
        return BugKiller;
    }

    // Build message
    logMessage += Couleurs(type.text).bold().fg(type.color) + " ";
    if (BugKiller.config.date) {
        logMessage += BugKiller.getDate() + " ";
    }

    // Add message
    logMessage += message;

    // No fun when the stream is not TTY
    if (!BugKiller.config.stream.isTTY) {
        logMessage = AnsiParser.removeAnsi(logMessage);
    }

    // Print message
    BugKiller.config.stream.write(logMessage + "\n");

    return BugKiller;
};
