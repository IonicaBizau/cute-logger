# bug-killer [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-bug-killer.svg)](https://travis-ci.org/IonicaBizau/node-bug-killer/) [![Version](https://img.shields.io/npm/v/bug-killer.svg)](https://www.npmjs.com/package/bug-killer) [![Downloads](https://img.shields.io/npm/dt/bug-killer.svg)](https://www.npmjs.com/package/bug-killer) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Simple way to log messages in stdout or other stream.

## Installation

```sh
$ npm i --save bug-killer
```

## Example

```js
// Dependencies
var Debug = require("bug-killer");

// Set log level
Debug.config.level = 4;

// Test defaults
Debug
  .log("A fancy error message", "error")
  .log("Info messages are useful", "info")
  .log("Hey, you've got a warning", "warn")
  ;

// Don't show date
Debug.config.date = false;
Debug.log("Display date is disabled.", "info");

// Custom type
Debug.config.myType = {
    color: [0, 255, 200]
  , text: "custom"
};

Debug.log("This is a custom message type", "myType");
Debug.log(new Error("Some error"));
Debug.log("Some interesting message");
```

## Documentation

### `getDate()`
Returns the stringified date. This method can be overrided for a custom date format.

#### Return
- **String** The date in HH:mm.ss - DD.MM.YYYY format.

### `log(message, type)`
Displays debug messages by providing the type.

Usage:

```js
BugKiller.log("Some info message");
BugKiller.log(new Error("Interesting error"));
```

The config object can be modified to make this module to act diferently.
Defaults are shown:

```js
BugKiller.config = {
    // The error type
    error: {
        color: [192, 57, 43]
      , text: "error"
      , level: 1
    }
    // The warning type
  , warn: {
        color: [241, 196, 15]
      , text: "warn "
      , level: 2
    }
    // The info type
  , info: {
        color: [52, 152, 219]
      , text: "info "
      , level: 3
    }
    // Display date
  , date: false
    // Log level
  , level: 4
    // Output stream
  , stream: process.stdout
};
````

#### Params
- **String** `message`: The debug message that should be displayed
- **String** `type`: The message type (e.g. "error", "info" etc). Default is computed (`"error"` if the message is an `Error`) or `"info"` if the provided
`type` is invalid.

#### Return
- **Object** The `BugKiller` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`a-csv`](https://github.com/jillix/a-csv) by jillix

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`birthday`](https://github.com/IonicaBizau/birthday)

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)

 - [`diable`](https://github.com/IonicaBizau/diable)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)

 - [`git-issues`](https://github.com/softwarescales/git-issues) by Gabriel Petrovay

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`github-colors`](https://github.com/IonicaBizau/github-colors)

 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)

 - [`github-stats`](https://github.com/IonicaBizau/github-stats)

 - [`gpm`](https://github.com/IonicaBizau/gpm)

 - [`idea`](https://github.com/IonicaBizau/idea)

 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)

 - [`namy`](https://github.com/IonicaBizau/namy)

 - [`npmreserve`](https://github.com/IonicaBizau/npmreserve)

 - [`regarde`](https://github.com/IonicaBizau/regarde)

 - [`repo-downloader`](https://github.com/IonicaBizau/repository-downloader)

 - [`share-term`](https://github.com/Share-Term/share-term#readme)

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

 - [`statique`](https://github.com/IonicaBizau/node-statique)

 - [`tinyreq`](https://github.com/IonicaBizau/tinyreq)

 - [`tithe`](https://github.com/IonicaBizau/tithe)

 - [`web-term`](https://github.com/IonicaBizau/web-term)

 - [`wrabbit`](https://github.com/jillix/wrabbit) by jillix

 - [`xhr-form-submitter-test`](https://github.com/IonicaBizau/xhr-form-submitter.js)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md