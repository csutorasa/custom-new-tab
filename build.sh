#!/bin/bash
cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null
rm -f release.zip
zip release.zip index.html index.js manifest.json options.html options.js storage.js translations.js
