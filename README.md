# Custom new tab extension

This is a browser extension, that allows you to replace the new tab page to any URL.

The goal is to have a simple implementation that has the minimal permissions.
The only permissions it needs is `storage`, so it can store the configuration on the local machine.

## Browser support

This extension uses the Manifest V3 of the extensions platform.
Latest versions of [Chrome](https://www.google.com/chrome/) and [Firefox](https://www.mozilla.org/firefox/) are tested,
but most [Chromium](https://www.chromium.org)-based browsers should work.

Themes are supported only in Firefox.

## Translation

Anyone is free to contribute [translations](translations.js).

## Development

## Chrome

[Load the unpacked extension]((https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)) from this directory.

## Firefox

Pack the extension.

```shell
./pack.sh
```

[Load Temporary Add-on]((https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)) from the `release.zip` file.
