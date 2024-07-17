// This file contains the translations and the internationalization logic.

const translations = {
    en: {
        title: "Enter URL to use as a new tab page.",
        save: "Save",
        saved: "Saved!",
    },
    hu: {
        title: "Írja be az URL-t, amit az új fül oldalon hasznáni szeretne.",
        save: "Mentés",
        saved: "Mentve!",
    },
};

/**
 * Gets the translation based on the browser preferences.
 * @param {string} key key to lookup
 * @returns {string | undefined} translations or undefined
 */
const getTranslation = (key) => {
    for (let language of navigator.languages) {
        if (translations?.[language]?.[key]) {
            return translations[language][key];
        }
    }
    return translations.en[key];
};
