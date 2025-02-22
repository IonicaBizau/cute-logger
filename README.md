<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# cute-logger

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/cute-logger.svg)](https://travis-ci.org/IonicaBizau/cute-logger/) [![Version](https://img.shields.io/npm/v/cute-logger.svg)](https://www.npmjs.com/package/cute-logger) [![Downloads](https://img.shields.io/npm/dt/cute-logger.svg)](https://www.npmjs.com/package/cute-logger) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Simple way to log messages in stdout or other stream.











[![cute-logger](http://i.imgur.com/VCsF5Si.png)](#)







## :cloud: Installation

```sh
# Using npm
npm install --save cute-logger

# Using yarn
yarn add cute-logger
```













## :clipboard: Example



```js
const Logger = require("cute-logger")

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
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation


### `log(message, type)`
Displays debug messages by providing the type.

Usage:

```js
CuteLogger.log("Some info message")
CuteLogger.log(new Error("Interesting error"))
```

The config object can be modified to make this module to act diferently.
Defaults are shown:

```js
CuteLogger.config = {
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

    // Output streams
  , stdout: process.stdout
  , stderr: process.stderr

    // The options passed to `util.inspect`
  , inspectOptions: { colors: true }
}
````

#### Params

- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.
- **String** `type`: The message type (e.g. "error", "info" etc). Default is computed (`"error"` if the message is an `Error`) or `"info"` if the provided
`type` is invalid.

#### Return
- **Object** The `CuteLogger` instance.

### `getDate()`
Returns the stringified date. This method can be overrided for a custom date format.

#### Return
- **String** The date in HH:mm.ss - DD.MM.YYYY format.

### `error(message)`
Displays debug messages by providing setting the type to `"error"`.

Usage:

```js
CuteLogger.error("Some error message")
```

#### Params

- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `CuteLogger` instance.

### `warn(message)`
Displays debug messages by providing setting the type to `"warn"`.

Usage:

```js
CuteLogger.warn("Some warn message")
```

#### Params

- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `CuteLogger` instance.

### `info(message)`
Displays debug messages by providing setting the type to `"info"`.

Usage:

```js
CuteLogger.info("Some info message")
```

#### Params

- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `CuteLogger` instance.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `bloggify`
 - `bloggify-cli`
 - `rucksack`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
