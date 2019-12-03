const { supportedLocales } = require('../supported-locales');

const messages = {};

for (const locale of supportedLocales) {
  const translations = require('./translations.' + locale + '.json');
  messages[locale] = Object.keys(translations).reduce(
    (messageMap, messageId) => {
      messageMap[messageId] = translations[messageId].translation;

      return messageMap;
    },
    {}
  );
}

module.exports.messages = messages;
