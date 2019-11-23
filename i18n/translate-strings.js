/**
 * Uses Google Translate API to automatically translate strings for i18n.
 *
 * NOTE: This should ONLY be used to populate translations for dev
 * purposes--for actual, production data, use an actual translator.
 */

const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(require('fs').writeFile);
const { Translate } = require('@google-cloud/translate').v2;
const { supportedLocales } = require('./supported-locales');

const trans = new Translate({
  projectId: 'census-2020-1574478662266',
  keyFilename: path.resolve(__dirname, '..', 'google-api-credentials.json')
});

const translateText = async (text, language) => {
  const [translation] = await trans.translate(text, {
    from: 'en',
    to: language
  });

  return translation;
};

const transPromises = [];

for (const locale of supportedLocales) {
  if (locale === 'en') {
    continue;
  }
  const translationFilePath = path.join(__dirname, 'translations', `translations.${locale}.json`);
  const messages = require(translationFilePath);
  const translatedAllPromise = Promise.all(
    Object.keys(messages).map(
      (id) => translateText(messages[id].english, locale).then(
        (translation) => {
          messages[id].translation = translation;
        }
      )
    )
  );
  transPromises.push(
    translatedAllPromise.then(
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
  }
);
