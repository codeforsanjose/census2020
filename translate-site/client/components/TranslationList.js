import React from 'react';
import PropTypes from 'prop-types';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { IntlProvider } from 'react-intl';
import { makePR } from '../github';
import { supportedLocales, supportedLocaleEnglishNames } from '../../../i18n/supported-locales';
import { FormattedMarkdownMessage } from '../../../client/components/FormattedMarkdownMessage';
import { messages } from '../../../i18n/translations';
import definitions from '../../../i18n/translations/definitions';
import './TranslationList.scss';

let globalMessageCopy = JSON.parse(JSON.stringify(messages));

const areMessagesEqual = (obj1, obj2) => {
  for (const key of Object.keys(obj1)) {
    const val = obj1[key];
    if (typeof val !== 'string') {
      return areMessagesEqual(val, obj2[key]);
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const getUpdatedTranslations = (locale) => {
  return Object.keys(globalMessageCopy[locale]).reduce(
    (translations, key) => {
      translations[key] = {
        translation: globalMessageCopy[locale][key],
        english: messages.en[key]
      };
      return translations;
    },
    {}
  );
};

const getAllTranslationsZipped = () => {
  const zip = new JSZip();

  for (const locale of Object.keys(globalMessageCopy)) {
    zip.file(`translations.${locale}.json`, JSON.stringify(getUpdatedTranslations(locale), null, '  '));
  }
  return zip;
};

const TranslationItem = ({ messageId, locale, onMessageChange, workingMessageCopy }) => {
  const [ showMarkdown, setShowMarkdown ] = React.useState(false);
  const handleInputChange = React.useCallback((event) => {
    const content = event.target.value;
    onMessageChange(messageId, content);
  });
  const handleShowMarkdownCheckChange = React.useCallback((event) => {
    setShowMarkdown(event.target.checked);
  });
  return (
    <div className="c_translation-item">
      <header className="c_translation-item__header">
        <h4>
          {messageId}
        </h4>
        <label
          className="c_translation-item__show-markdown-checkbox"
        >
          <input
            type="checkbox"
            checked={showMarkdown}
            onChange={handleShowMarkdownCheckChange}
          />
          Show rendered Markdown
        </label>
      </header>
      {
        definitions[messageId] && definitions[messageId].description
          ? (
            <div>
              {definitions[messageId].description}
            </div>
          )
          : null
      }
      {
        locale === 'en'
          ? null
          : (
            <div>
              English message: {workingMessageCopy[messageId]}
            </div>
          )
      }
      <textarea
        className="c_translation-item__input"
        value={workingMessageCopy[messageId]}
        onChange={handleInputChange}
      >
      </textarea>
      {
        showMarkdown
          ? (
            <div className="c_translation-item__markdown">
              <FormattedMarkdownMessage
                id={messageId}
              />
            </div>
          )
          : null
      }
    </div>
  );
};

TranslationItem.propTypes = {
  messageId: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(supportedLocales).isRequired,
  onMessageChange: PropTypes.func.isRequired,
  workingMessageCopy: PropTypes.object.isRequired
};

const TranslationList = ({ currentLocale, filterString }) => {
  const [ workingMessageCopy, setWorkingMessageCopy ] = React.useState(JSON.parse(JSON.stringify(messages[currentLocale])));
  const [ showTranslated, setShowTranslated ] = React.useState(true);
  const [ anyLocaleHasChanges, setAnyLocaleHasChanges ] = React.useState(!areMessagesEqual(messages, globalMessageCopy));
  const handleShowTranslatedChange = React.useCallback((event) => {
    setShowTranslated(event.target.checked);
  });
  const handleMessageChanged = React.useCallback((messageId, value) => {
    setWorkingMessageCopy({
      ...workingMessageCopy,
      [messageId]: value
    });
  });

  React.useEffect(() => {
    globalMessageCopy[currentLocale] = workingMessageCopy;
    const anyLocaleHasChanges = !areMessagesEqual(messages, globalMessageCopy);
    setAnyLocaleHasChanges(anyLocaleHasChanges);
  });

  const handleDownloadButtonClick = React.useCallback(() => {
    const link = document.createElement('a');
    link.download = `translations.${currentLocale}.json`;
    link.href = `data:application/json,${
      encodeURIComponent(
        JSON.stringify(
          getUpdatedTranslations(currentLocale),
          null,
          '  '
        )
      )
    }`;
    link.click();
  });

  const handleDownloadAllButtonClick = React.useCallback(() => {
    getAllTranslationsZipped().generateAsync({ type: 'blob' })
      .then((blob) => {
        saveAs(blob, 'translations.zip');
      });
  });

  const handleMakePRButtonClick = React.useCallback(async () => {
    await makePR();
  });

  let messageIds = Object.keys(workingMessageCopy).filter(
    (messageId) => {
      let isMatch = true;
      if (!showTranslated) {
        isMatch = !workingMessageCopy[messageId];
      }
      if (isMatch && filterString) {
        isMatch = messageId.toLowerCase().includes(filterString.toLowerCase());
      }
      return isMatch;
    }
  );

  messageIds.sort();

  return (
    <div>
      <header className="c_translation-list__header">
        <h2>Translations for {supportedLocaleEnglishNames[currentLocale]}</h2>

        <button
          type="button"
          onClick={handleDownloadButtonClick}
          disabled={areMessagesEqual(messages[currentLocale], workingMessageCopy)}
        >
          Download {supportedLocaleEnglishNames[currentLocale]} translations
        </button>
        <button type="button" onClick={handleDownloadAllButtonClick} disabled={!anyLocaleHasChanges}>
          Download all translations
        </button>
        <button type="button" onClick={handleMakePRButtonClick} disabled={!anyLocaleHasChanges}>
          Create pull request with changes
        </button>
      </header>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showTranslated}
            onChange={handleShowTranslatedChange}
          />

          Show messages with translations
        </label>
      </div>

      <IntlProvider
        locale={currentLocale}
        messages={workingMessageCopy}
      >
        <ul className="c_translation-list__list">
          {
            messageIds.map(
              (messageId) => (
                <li
                  key={messageId}
                  className="c_translation-list__list__item"
                >
                  <TranslationItem
                    messageId={messageId}
                    locale={currentLocale}
                    onMessageChange={handleMessageChanged}
                    workingMessageCopy={workingMessageCopy}
                  />
                </li>
              )
            )
          }
        </ul>
      </IntlProvider>
    </div>
  );
};

TranslationList.propTypes = {
  currentLocale: PropTypes.oneOf(supportedLocales),
  filterString: PropTypes.string
};

export const Translations = () => {

};

export { TranslationList };
