const Logger = require("../lib")

// Set log level
Logger.config.level = 4

// Test defaults
Logger
  .log("A fancy error message", "error")
  .log("Info messages are useful", "info")
  .log("Hey, you've got a warning", "warn")


// Don't show date
Logger.config.date = false
Logger.log("Display date is disabled.", "info")

// Custom type
Logger.config.myType = {
    color: [0, 255, 200]
  , text: "custom"
}

Logger.log("This is a custom message type", "myType")
Logger.log(new Error("Some error"))
Logger.log("Some interesting message")

// The built-in methods can be accessed like this, too:
Logger.error("This is an error.")
Logger.info("This is an info message.")
Logger.warn("This is a warning.")
Logger.log("This is a log message.")

// Logging objects works nicely too:
Logger.log({
    name: {
        name: "Johnny",
        last: "B"
    }
})
