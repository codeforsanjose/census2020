import React from 'react';
import PropTypes from 'prop-types';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { IntlProvider } from 'react-intl';
import { toast } from 'react-toastify';
import * as Immutable from 'immutable';

import { makePullRequest, updatePullRequest, getPullRequests } from '../github';
import { supportedLocales, supportedLocaleEnglishNames } from '../../../i18n/supported-locales';
import { FormattedMarkdownMessage } from '../../../client/components/FormattedMarkdownMessage';
import { messages } from '../../../i18n/translations';
import definitions from '../../../i18n/translations/definitions';
import { PullRequestDialog } from './PullRequestDialog';
import './TranslationList.scss';
import 'react-toastify/dist/ReactToastify.css';

const immutableMessages = Immutable.fromJS(messages);
let globalMessageCopy = immutableMessages;

const areMessagesEqual = (obj1, obj2) => {
  return Immutable.is(obj1, obj2);
};

const getUpdatedTranslations = (locale) => {
  return globalMessageCopy.get(locale).reduce(
    (translations, value, key) => {
      translations[key] = {
        english: messages.en[key],
        translation: value
      };
      return translations;
    },
    {}
  );
};

const getAllTranslationsZipped = () => {
  const zip = new JSZip();

  globalMessageCopy.keySeq().forEach((locale) => {
    zip.file(`translations.${locale}.json`, JSON.stringify(getUpdatedTranslations(locale), null, '  '));
  });
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
              English message: {workingMessageCopy.get(messageId)}
            </div>
          )
      }
      <textarea
        className="c_translation-item__input"
        value={workingMessageCopy.get(messageId)}
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
  const [ workingMessageCopy, setWorkingMessageCopy ] = React.useState(immutableMessages.get(currentLocale));
  const [ showTranslated, setShowTranslated ] = React.useState(true);
  const [ anyLocaleHasChanges, setAnyLocaleHasChanges ] = React.useState(!areMessagesEqual(immutableMessages, globalMessageCopy));
  const [ showPullRequestDialog, setShowPullRequestDialog ] = React.useState(false);
  const [ openPullRequests, setOpenPullRequests ] = React.useState([]);
  const handleShowTranslatedChange = React.useCallback((event) => {
    setShowTranslated(event.target.checked);
  });
  const handleMessageChanged = React.useCallback((messageId, value) => {
    setWorkingMessageCopy(workingMessageCopy.set(messageId, value));
  });

  React.useEffect(() => {
    globalMessageCopy = globalMessageCopy.set(currentLocale, workingMessageCopy);
    const anyLocaleHasChanges = !areMessagesEqual(immutableMessages, globalMessageCopy);
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

  const createOrUpdatePullRequest = React.useCallback(async ({ number } = {}) => {
    const translations = {};
    globalMessageCopy.keySeq().forEach((locale) => {
      translations[locale] = getUpdatedTranslations(locale);
    });
    const toastMessage = `${
      number
        ? 'Updating'
        : 'Creating'
    } pull request...`;
    const toastId = toast(toastMessage, {
      type: toast.TYPE.INFO,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false
    });
    let promise;
    let progressNotifier;
    if (number) {
      ({ promise, progressNotifier } = updatePullRequest({
        translations,
        number
      }));
    } else {
      ({ promise, progressNotifier } = makePullRequest({
        translations
      }));
    }
    progressNotifier(({ completed, total }) => {
      toast.update(toastId, {
        progress: completed / total
      });
    });
    await promise;
    toast.done(toastId);
  });

  const handleMakePRButtonClick = React.useCallback(async () => {
    const toastId = toast('Checking existing pull requests...', {
      type: toast.TYPE.INFO,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false
    });
    const prs = await getPullRequests();
    toast.dismiss(toastId);
    if (prs.length === 0) {
      createOrUpdatePullRequest();
      return;
    }
    setOpenPullRequests(prs);
    setShowPullRequestDialog(true);
  });

  const closePullRequestDialog = React.useCallback(() => {
    setShowPullRequestDialog(false);
  });

  const handlePullRequestChosen = React.useCallback((number) => {
    closePullRequestDialog();
    createOrUpdatePullRequest({ number });
  });

  let messageIds = workingMessageCopy.keySeq().filter(
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
      <PullRequestDialog
        isOpen={showPullRequestDialog}
        onRequestClose={closePullRequestDialog}
        onPullRequestChosen={handlePullRequestChosen}
        pullRequests={openPullRequests}
      />
      <header className="c_translation-list__header">
        <h2>Translations for {supportedLocaleEnglishNames[currentLocale]}</h2>

        <button
          type="button"
          onClick={handleDownloadButtonClick}
          disabled={areMessagesEqual(immutableMessages.get(currentLocale), workingMessageCopy)}
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
        messages={workingMessageCopy.toJS()}
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
