import React from 'react';
import PropTypes from 'prop-types';

import { supportedLocales, supportedLocaleEnglishNames } from '../../../i18n/supported-locales';
import { messages } from '../../../i18n/translations';
import definitions from '../../../i18n/translations/definitions';
import './TranslationList.scss';

const workingMessageCopy = JSON.parse(JSON.stringify(messages));

const TranslationItem = ({ messageId, locale }) => {
  const [ translation, setTranslation ] = React.useState(workingMessageCopy[locale][messageId] || '');
  const handleInputChange = React.useCallback((event) => {
    setTranslation(event.target.value);
  });
  return (
    <div className="c_translation-item">
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
              English message: {workingMessageCopy.en[messageId]}
            </div>
          )
      }
      <textarea
        className="c_translation-item__input"
        value={translation}
        onChange={handleInputChange}
      >
      </textarea>
    </div>
  );
};

TranslationItem.propTypes = {
  messageId: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(supportedLocales).isRequired
};

const TranslationList = ({ currentLocale }) => {
  const [ showTranslated, setShowTranslated ] = React.useState(false);
  const handleShowTranslatedChange = React.useCallback((event) => {
    setShowTranslated(event.target.checked);
  });

  let messageIds = Object.keys(workingMessageCopy[currentLocale]);

  if (!showTranslated) {
    messageIds = messageIds.filter(
      (messageId) => !workingMessageCopy[currentLocale][messageId]
    );
  }

  messageIds.sort();

  return (
    <div>
      <header>
        <h2>Translations for {supportedLocaleEnglishNames[currentLocale]}</h2>
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
                />
              </li>
            )
          )
        }
      </ul>
    </div>
  );
};

TranslationList.propTypes = {
  currentLocale: PropTypes.oneOf(supportedLocales)
};

export { TranslationList };
