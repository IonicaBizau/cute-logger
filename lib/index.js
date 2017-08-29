"use strict"

const Couleurs = require("couleurs")
    , AnsiParser = require("ansi-parser")
    , Typpy = require("typpy")
    , Deffy = require("deffy")
    , Daty = require("daty")
    , util = require("util")

class CuteLogger {

    /**
     * log
     * Displays debug messages by providing the type.
     *
     * Usage:
     *
     * ```js
     * CuteLogger.log("Some info message")
     * CuteLogger.log(new Error("Interesting error"))
     * ```
     *
     * The config object can be modified to make this module to act diferently.
     * Defaults are shown:
     *
     * ```js
     * CuteLogger.config = {
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
     * }
     * ````
     *
     * @name log
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @param {String} type The message type (e.g. "error", "info" etc). Default is
     * computed (`"error"` if the message is an `Error`) or `"info"` if the provided
     * `type` is invalid.
     * @return {Object} The `CuteLogger` instance.
     */
    static log (message, type) {

        if (Array.isArray(message)) {
            message.forEach(c => {
                this.log(c, type)
            })
            return CuteLogger
        }

        let logMessage = ""

        type = Deffy(type, Typpy(message))
        if (type === "error" && message && message.message) {
            message = message.message
        }

        if (Typpy(CuteLogger.config[type]) === "undefined") {
            type = "info"
        }

        // Get type from config
        type = CuteLogger.config[type]
        if (type.level > CuteLogger.config.level) {
            return CuteLogger
        }

        // Build message
        logMessage += Couleurs(type.text).bold().fg(type.color) + " "
        if (CuteLogger.config.date) {
            logMessage += Couleurs(CuteLogger.getDate()).bold() + " "
        }

        if (typeof message === "object") {
          message = util.inspect(message, CuteLogger.config.inspectOptions)
        }

        // Add message
        logMessage += message

        // No fun when the stream is not TTY
        if (!CuteLogger.config.stream.isTTY) {
            logMessage = AnsiParser.removeAnsi(logMessage)
        }

        // Print message
        CuteLogger.config.stream.write(logMessage + "\n")

        return CuteLogger
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
        return `[${new Daty().format("dddd, MMMM DD, YYYY hh:mm:ss A")}]`
    }

    /**
     * error
     * Displays debug messages by providing setting the type to `"error"`.
     *
     * Usage:
     *
     * ```js
     * CuteLogger.error("Some error message")
     * ```
     *
     * @name error
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @return {Object} The `CuteLogger` instance.
     */
    static error (message) {
      return CuteLogger.log(message, "error")
    }

    /**
     * warn
     * Displays debug messages by providing setting the type to `"warn"`.
     *
     * Usage:
     *
     * ```js
     * CuteLogger.warn("Some warn message")
     * ```
     *
     * @name warn
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @return {Object} The `CuteLogger` instance.
     */
    static warn (message) {
      return CuteLogger.log(message, "warn")
    }

    /**
     * info
     * Displays debug messages by providing setting the type to `"info"`.
     *
     * Usage:
     *
     * ```js
     * CuteLogger.info("Some info message")
     * ```
     *
     * @name info
     * @function
     * @param {Object} message The debug message that should be displayed. If
     * `message` is an object, it will show the inspected object.
     * @return {Object} The `CuteLogger` instance.
     */
    static info (message) {
      return CuteLogger.log(message, "info")
    }
}

CuteLogger.config = {
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
  , date: true
  , level: 4
  , stream: process.stdout
  , inspectOptions: { colors: true }
}

module.exports = CuteLogger
