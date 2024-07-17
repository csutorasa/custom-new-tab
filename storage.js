// This file contains all the logic related to the `storage` permission.

/**
 * Browser specific extension local storage API.
 */
const extensionLocalStorage = (() => {
    if (typeof browser !== 'undefined') {
        if (browser?.storage?.local) {
            return browser.storage.local;
        }
    }
    if (typeof chrome !== 'undefined') {
        if (chrome?.storage?.local) {
            return chrome.storage.local;
        }
    }
    throw new Error("This browser does not support the extension stroage local API");
})();

/**
 * Gets the redirect URL from the storage.
 * @returns {Promise<string | undefined>} URL value read
 */
const getUrl = () => extensionLocalStorage.get(['url']).then(values => values?.url);

/**
 * Saves the redirect URL to the storage.
 * @param {string} url URL to save
 * @returns {void}
 */
const setUrl = (url) => {
    extensionLocalStorage.set({
        url: url,
    });
};
