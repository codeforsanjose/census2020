#!/usr/bin/env nodejs

const path = require('path');

const { supportedLocales } = require('./supported-locales');

const translationsDir = path.resolve(__dirname, 'translations');

let hasErrors = false;

let definitions;

try {
  definitions = require('./translations/definitions.json');
} catch (ex) {
  throw new Error(`Error loading translation definitions: ${ex.message}`);
}

supportedLocales.forEach(
  (locale) => {
    try {
      const translations = require(path.join(translationsDir, `translations.${locale}.json`));

      Object.keys(definitions).forEach(
        (messageId) => {
          if (!(messageId in translations)) {
            console.error(`Translation file for locale ${locale} is missing an entry for message ID ${messageId}; rerun the i18n extraction script`);
            hasErrors = true;
            return;
          }

          if (!translations[messageId].translation) {
            console.error(`Missing translation in locale ${locale} for message ID ${messageId}`);
            hasErrors = true;
          }
        }
      );
    } catch (ex) {
      if (ex.code === 'ENOENT') {
        console.error(`No translation file for locale ${locale}`);
        hasErrors = true;
      } else {
        throw ex;
      }
    }
  }
);

if (hasErrors) {
  process.exit(1);
} else {
  process.exit(0);
}
