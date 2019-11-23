const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env')
});
/**
 * Uses Google Translate API to automatically translate strings for i18n.
 *
 * NOTE: This should ONLY be used to populate translations for dev
 * purposes--for actual, production data, use an actual translator.
 */

const { promisify } = require('util');
const writeFile = promisify(require('fs').writeFile);
const { Translate } = require('@google-cloud/translate').v2;
const { supportedLocales } = require('./supported-locales');

const trans = new Translate({
});

const translateText = async (text, language) => {
  const [translations] = await trans.translate(text, {
    from: 'en',
    to: language
  });
  return translations;
};

const transPromises = [];

for (const locale of supportedLocales) {
  if (locale === 'en') {
    continue;
  }
  const translationFilePath = path.join(__dirname, 'translations', `translations.${locale}.json`);
  const messages = require(translationFilePath);
  const idsToTranslate = Object.keys(messages).filter(
    (messageId) => !messages[messageId].translation
  );
  const messagesToTranslate = idsToTranslate.map(
    (id) => messages[id].english
  );
  console.log(`[${locale}]Translating messages:\n${messagesToTranslate.join('\n')}`);
  transPromises.push(
    translateText(messagesToTranslate, locale).then(
      (translations) => {
        for (let i = 0; i < idsToTranslate.length; i++) {
          messages[idsToTranslate[i]].translation = translations[i];
        }
      }
    ).then(
      () => writeFile(translationFilePath, JSON.stringify(messages, null, '  '))
    )
  );
}

Promise.all(transPromises).then(
  () => {
    console.log('Finshed translating');
  }
).catch(
  (err) => {
    console.error(err);
    process.exit(1);
  }
);
