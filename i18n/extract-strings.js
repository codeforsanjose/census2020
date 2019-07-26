#!/usr/bin/env nodejs

const path = require('path');
const readdir = require('fs').readdirSync;
const writeFile = require('fs').writeFileSync;
const mkdir = require('mkdirp').sync;
const transformFile = require('@babel/core').transformFileSync;

const { supportedLocales } = require('./supported-locales');
const webpackPaths = require('../webpack-paths');

const filesToCheck = [
  webpackPaths.entry
];

const componentDir = path.resolve(__dirname, '..', 'client', 'components');

const addJSFiles = (dirPath) => {
  for (const file of readdir(
    dirPath,
    {
      encoding: 'utf8',
      withFileTypes: true
    }
  )) {
    if (file.isFile() && /\.js$/.test(file.name)) {
      filesToCheck.push(path.join(dirPath, file.name));
    } else if (file.isDirectory()) {
      addJSFiles(path.join(dirPath, file.name));
    }
  }
};

addJSFiles(componentDir);

const outputDir = path.resolve(__dirname, 'translations');

mkdir(outputDir);

let messages = {};

const definitionsPath = path.resolve(__dirname, 'translations', 'definitions.json');

try {
  messages = require(definitionsPath);
} catch (ex) {}

const newMessageIDs = [];

for (const file of filesToCheck) {
  const transformed = transformFile(
    file,
    {
      plugins: [
        [
          'babel-plugin-react-intl',
          {
            extractFromFormatMessageCall: true
          }
        ]
      ]
    }
  );

  for (const message of transformed.metadata['react-intl'].messages) {
    if (
      !(message.id in messages) ||
      messages[message.id].defaultMessage !== message.defaultMessage
    ) {
      messages[message.id] = message;
      newMessageIDs.push(message.id);
    }
  }
}

const translationObjects = {};

supportedLocales.forEach(
  (locale) => {
    const translationsPath = path.join(outputDir, `translations.${locale}.json`);

    let translations = {};

    try {
      translations = require(translationsPath);
    } catch (ex) {}

    Object.keys(messages).forEach(
      (messageId) => {
        if (
          !(messageId in translations) ||
          newMessageIDs.includes(messageId)
        ) {
          translations[messageId] = {
            english: messages[messageId].defaultMessage,
            translation: locale === 'en'
              ? messages[messageId].defaultMessage
              : null
          };
        }
      }
    );

    translationObjects[locale] = {
      path: translationsPath,
      translations
    };
  }
);

writeFile(
  definitionsPath,
  JSON.stringify(
    messages,
    null,
    '  '
  ),
  {
    encoding: 'utf8'
  }
);

supportedLocales.forEach(
  (locale) => {
    writeFile(
      translationObjects[locale].path,
      JSON.stringify(
        translationObjects[locale].translations,
        null,
        '  '
      ),
      {
        encoding: 'utf8'
      }
    );
  }
);
