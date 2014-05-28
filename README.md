# bug-killer
A colored way to find bugs and fix them.

## Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:IonicaBizau/node-bug-killer.git bug-killer
$ cd bug-killer
$ npm install
```

## Documentation

### Methods
#### `log(message, type)`
Displays debug messages by providing the type.

 - `message` (String): The debug message that should be displayed
 - `type` (String): The message type (e.g. "error", "info" etc)

Returns the BugKiller instance

### Other fields

#### `_config`
An object contaning the configuration of the module.
Default:

```js
{
    error: {
        color: [255, 0, 0]
      , text: "ERROR"
    }
  , info: {
        color: [0, 200, 255]
      , text: "INFO"
    }
  , warn: {
        color: [200, 200, 0]
      , text: "WARN"
    }
  , displayDate: true
};
```

It can be extended to accept any type of message (see example).

## Example

```js
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
```

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
