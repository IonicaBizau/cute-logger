// Dependencies
var Debug = require("../index");

// Test defaults
Debug
  .log("Some fancy error message", "error")
  .log("Info messages are useful", "info")
  .log("Hey, you've got a warning", "warn")
  ;

// Don't show date
Debug._config.displayDate = false;
Debug.log("Display date is disabled.", "info");

// Custom type
Debug._config.myType = {
    color: [0, 255, 200]
  , text: "CUSTOM"
};

Debug.log("This is a custom message type", "myType");
