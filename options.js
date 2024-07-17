// Logic for the extension options page.

/**
 * Run the function only if the key was an enter.
 * @param {KeyboardEvent} e event to check
 * @param {() => void} f funtion to execute
 * @returns {void}
 */
const onEnterKey = (e, f) => {
    if (e.key === "Enter") {
        e.preventDefault();
        f();
    }
}

/**
 * Gets the color from the theme.
 * @param {*} colors theme colors
 * @param {string[]} keys keys to check
 * @returns {string} theme color or empty string
 */
const findColor = (colors, keys) => {
    for (let key of keys) {
        if (colors[key]) {
            return colors[key].toString();
        }
    }
    return '';
};

window.onload = () => {
    /** @type {HTMLParagraphElement} */
    const titleParagraph = document.querySelector('#title');
    /** @type {HTMLInputElement} */
    const urlInput = document.querySelector('#urlInput');
    /** @type {HTMLButtonElement} */
    const saveButton = document.querySelector('#saveButton');
    /** @type {HTMLParagraphElement} */
    const savedTextParagraph = document.querySelector('#savedText');

    /**
     * Hides the saved text.
     * @returns {void}
     */
    const hideSaved = () => {
        savedTextParagraph.style.display = "none";
    }
    
    /**
     * Shows the saved text.
     * @returns {void}
     */
    const showSaved = () => {
        savedTextParagraph.style.display = "block";
    }

    /**
     * Saves URL from the input field and shows saved text.
     * @returns {void}
     */
    const saveUrl = () => {
        setUrl(urlInput.value);
        showSaved();
    }
    /**
     * Prefills the URL if it saved already.
     * @param {string | undefined} url URL
     * @returns {void}
     */
    const prefillUrl = (url) => {
        if (url) {
            urlInput.value = url;
        }
    }

    // Save on button click
    saveButton.addEventListener('click', saveUrl);
    // Save on enter keypress
    urlInput.addEventListener("keypress", e => onEnterKey(e, saveUrl));
    // Hide saved text on input
    urlInput.addEventListener("input", () => hideSaved());
    
    // Apply translation
    titleParagraph.textContent = getTranslation("title");
    saveButton.textContent = getTranslation("save");
    savedTextParagraph.textContent = getTranslation("saved");
    // Prefill URL with saved value
    getUrl().then(prefillUrl, alert);
    // Set theme
    if (typeof browser !== 'undefined') {
        browser?.theme?.getCurrent()?.then(themeInfo => {
            const colors = themeInfo?.colors;
            if (!colors) {
                return;
            }
            document.body.style.color = findColor(colors, ['sidebar_text', 'tab_text', 'textcolor']);
            document.body.style.backgroundColor = findColor(colors, ['sidebar', 'frame']);

            saveButton.style.color = document.body.style.color;
            saveButton.style.backgroundColor = findColor(colors, ['button']);
            saveButton.style.borderColor = findColor(colors, ['input_border']);

            urlInput.style.color = findColor(colors, ['input_color']);
            urlInput.style.backgroundColor = findColor(colors, ['input_background']);
            urlInput.style.borderColor = findColor(colors, ['input_border']);
        });
    }
};
