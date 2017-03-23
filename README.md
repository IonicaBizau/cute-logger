
# bug-killer

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-bug-killer.svg)](https://travis-ci.org/IonicaBizau/node-bug-killer/) [![Version](https://img.shields.io/npm/v/bug-killer.svg)](https://www.npmjs.com/package/bug-killer) [![Downloads](https://img.shields.io/npm/dt/bug-killer.svg)](https://www.npmjs.com/package/bug-killer)

> Simple way to log messages in stdout or other stream.

## :cloud: Installation

```sh
$ npm i --save bug-killer
```


## :clipboard: Example



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

// The built-in methods can be accessed like this, too:
Debug.error("This is an error.");
Debug.info("This is an info message.");
Debug.warn("This is a warning.");
Debug.log("This is a log message.");

// Logging objects works nicely too:
Debug.log({
    name: {
        name: "Johnny",
        last: "B"
    }
});
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


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
    // The options passed to `util.inspect`
  , inspectOptions: { colors: true }
};
````

#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.
- **String** `type`: The message type (e.g. "error", "info" etc). Default is computed (`"error"` if the message is an `Error`) or `"info"` if the provided
`type` is invalid.

#### Return
- **Object** The `BugKiller` instance.

### `getDate()`
Returns the stringified date. This method can be overrided for a custom date format.

#### Return
- **String** The date in HH:mm.ss - DD.MM.YYYY format.

### `error(message)`
Displays debug messages by providing setting the type to `"error"`.

Usage:

```js
BugKiller.error("Some error message");
```

#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `BugKiller` instance.

### `warn(message)`
Displays debug messages by providing setting the type to `"warn"`.

Usage:

```js
BugKiller.warn("Some warn message");
```

#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `BugKiller` instance.

### `info(message)`
Displays debug messages by providing setting the type to `"info"`.

Usage:

```js
BugKiller.info("Some info message");
```

#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `BugKiller` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`3abn`](https://github.com/IonicaBizau/3abn#readme)—A 3ABN radio client in the terminal.
 - [`a-csv`](https://github.com/jillix/a-csv) (by jillix)—A lightweight CSV parser.
 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`bible`](https://github.com/BibleJS/BibleApp)—Read the Holy Bible via the command line.
 - [`birthday`](https://github.com/IonicaBizau/birthday)—Know when a friend's birthday is coming.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`bloggify-cli`](https://github.com/Bloggify/bloggify-cli#readme)—CLI for Bloggify.
 - [`bloggify-tools`](https://github.com/Bloggify/bloggify-tools)—Interactive command line tool to help you win at Bloggify.
 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)—Easy way to import a library into CDNJS.
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`diable`](https://github.com/IonicaBizau/diable)—Daemonize the things out.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)—Watch files for changes.
 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.
 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)—Gif animations in your terminal!
 - [`git-issues`](https://github.com/softwarescales/git-issues) (by Gabriel Petrovay)—Git issues extension to list issues of a Git project
 - [`git-stats`](https://github.com/IonicaBizau/git-stats)—Local git statistics including GitHub-like contributions calendars.
 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)—Imports your commits from a repository into git-stats history.
 - [`git-unsaved`](https://github.com/IonicaBizau/git-unsaved#readme)—Scan your projects directory for dirty git repositories.
 - [`github-colors`](https://github.com/IonicaBizau/github-colors)—GitHub colors and file extensions mapping
 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)—Automagically create issue labels in your GitHub projects.
 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`idea`](https://github.com/IonicaBizau/idea)—A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.
 - [`image-to-ascii-cli`](https://github.com/IonicaBizau/image-to-ascii-cli#readme)—View images in text format, in your terminal.
 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)—Generate project names from given keywords.
 - [`namy`](https://github.com/IonicaBizau/namy)—Gets the name of the exported function.
 - [`npmreserve`](https://github.com/IonicaBizau/npmreserve)—Reserve package names on NPM.
 - [`regarde`](https://github.com/IonicaBizau/regarde)—A tiny tool and library to watch commands.
 - [`repo-downloader`](https://github.com/IonicaBizau/repository-downloader)—Download all the repositories from BitBucket and GitHub, including your account, teams and where you created pull requests.
 - [`repository-downloader`](https://github.com/IonicaBizau/repository-downloader)—Download all the repositories from BitBucket and GitHub, including your account, teams and where you created pull requests.
 - [`share-term`](https://github.com/Share-Term/share-term#readme)—Share the terminal with your friends.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)—Automagically switch on the SSH remote url in a Git repository.
 - [`statique`](https://github.com/IonicaBizau/statique)—A Node.JS static server module with built-in cache options and route features.
 - [`tinyreq-cli`](https://github.com/IonicaBizau/tinyreq-cli#readme)—A cli tool for making http(s) requests. CLI for tinyreq.
 - [`tithe`](https://github.com/IonicaBizau/tithe)—Organize and track the tithe payments.
 - [`web-term`](https://github.com/IonicaBizau/web-term)—A full screen terminal in your browser.
 - [`wrabbit`](https://github.com/jillix/wrabbit) (by jillix)—Wrap scripts by providing the wrapping function.
 - [`xhr-form-submitter-test`](https://github.com/IonicaBizau/xhr-form-submitter.js)—Test application for XHR form submitter JavaScript library

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
