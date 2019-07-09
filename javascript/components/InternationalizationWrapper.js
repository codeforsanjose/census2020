import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';

import { LocalePicker } from './LocalePicker';
import supportedLocales from '../../i18n/supported-locales';

const req = require.context('../../i18n/translations', true, /\.\w{2}(?:-\w+)?\.json$/);

const messages = {};

supportedLocales.forEach(
  (locale) => {
    const translations = req(`./translations.${locale}.json`);
    messages[locale] = Object.keys(translations).reduce(
      (messageMap, messageId) => {
        messageMap[messageId] = translations[messageId].translation;

        return messageMap;
      },
      {}
    );
  }
);

for (const locale of supportedLocales) {
  const localeData = require(`react-intl/locale-data/${locale}`);
  addLocaleData(localeData);
}

export class InternationalizationWrapper extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element
  }

  state = {
    locale: 'en'
  }

  constructor (...args) {
    super(...args);

    this.setLocale = this.setLocale.bind(this);

    if (process.env.NODE_ENV === 'development') {
      // Expose on `window` for development purposes
      global.setLocale = this.setLocale;

      global.getLocale = () => (
        this.state.locale
      );
    }
  }

  setLocale (locale) {
    this.setState({ locale });
  }

  render () {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={messages[this.state.locale]}
      >
        <div>
          <LocalePicker
            currentLocale={this.state.locale}
            onLocaleClicked={this.setLocale}
          />
          {this.props.children}
        </div>
      </IntlProvider>
    );
  }
}
