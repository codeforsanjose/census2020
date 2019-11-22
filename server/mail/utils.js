const path = require('path');
const { createIntl, createIntlCache } = require('react-intl');
const i18nDirectory = path.resolve(__dirname, '..', '..', 'i18n');
const { supportedLocales } = require(path.join(i18nDirectory, 'supported-locales'));

const intlCache = createIntlCache();

const intls = {};

const messages = {};

supportedLocales.forEach(
  (locale) => {
    const translations = require(path.join(
      i18nDirectory,
      'translations',
      `translations.${locale}.json`
    ));
    messages[locale] = Object.keys(translations).reduce(
      (messageMap, messageId) => {
        messageMap[messageId] = translations[messageId].translation;

        return messageMap;
      },
      {}
    );
  }
);
// console.log('messages:', messages);

for (const language of supportedLocales) {
  intls[language] = createIntl({
    locale: language,
    messages: messages[language]
  }, intlCache);
}

exports.getIntl = (language) => intls[language];
