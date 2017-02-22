"use strict";

const Couleurs = require("couleurs")
    , AnsiParser = require("ansi-parser")
    , Typpy = require("typpy")
    , Deffy = require("deffy")
    , Daty = require("daty")
    , util = require("util")
    ;

class BugKiller {

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
     *     // The options passed to `util.inspect`
     *   , inspectOptions: { colors: true }
     * };
     * ````
     *
     * @name log
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @param {String} type The message type (e.g. "error", "info" etc). Default is
     * computed (`"error"` if the message is an `Error`) or `"info"` if the provided
     * `type` is invalid.
     * @return {Object} The `BugKiller` instance.
     */
    static log (message, type) {

        if (Array.isArray(message)) {
            message.forEach(c => {
                this.log(c, type);
            });
            return BugKiller;
        }

        let logMessage = "";

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

        if (typeof message === "object") {
          message = util.inspect(message, BugKiller.config.inspectOptions);
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
    }

    /**
     * getDate
     * Returns the stringified date. This method can be overrided for a custom date format.
     *
     * @name getDate
     * @function
     * @return {String} The date in HH:mm.ss - DD.MM.YYYY format.
     */
    static getDate () {
        return `[${new Daty().format("dddd, MMMM DD, YYYY hh:mm:ss A")}]`;
    }

    /**
     * error
     * Displays debug messages by providing setting the type to `"error"`.
     *
     * Usage:
     *
     * ```js
     * BugKiller.error("Some error message");
     * ```
     *
     * @name error
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @return {Object} The `BugKiller` instance.
     */
    static error (message) {
      return BugKiller.log(message, "error");
    };

    /**
     * warn
     * Displays debug messages by providing setting the type to `"warn"`.
     *
     * Usage:
     *
     * ```js
     * BugKiller.warn("Some warn message");
     * ```
     *
     * @name warn
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @return {Object} The `BugKiller` instance.
     */
    static warn (message) {
      return BugKiller.log(message, "warn");
    };

    /**
     * info
     * Displays debug messages by providing setting the type to `"info"`.
     *
     * Usage:
     *
     * ```js
     * BugKiller.info("Some info message");
     * ```
     *
     * @name info
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @return {Object} The `BugKiller` instance.
     */
    static info (message) {
      return BugKiller.log(message, "info");
    };
}

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
  , inspectOptions: { colors: true }
};

module.exports = BugKiller;
