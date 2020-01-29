import React, { useState } from 'react';

import LocaleContext from './LocaleContext';
import {
  supportedLocales,
  supportedLocaleNames
} from '../../i18n/supported-locales';
import './LocalePicker.scss';

import classnames from 'classnames';

import globe from '../images/globe.svg';
import triangle from '../images/triangle.svg';

export const LocalePicker = () => {
  const [open, setOpen] = useState(false);

  return (
    <LocaleContext.Consumer>
      {
        ({ currentLocale, setLocale }) => (
          <div className={'c_locale-picker'}>
            <img
              className="c_locale-picker__icon"
              src={globe}
              alt="Localization icon"
            />
            <div
              className={classnames(
                'c_locale-picker__container',
                'c_locale-picker__container--desktop'
              )}>
              {
                supportedLocales.map(
                  (locale) => (
                    <button
                      key={locale}
                      disabled={locale === currentLocale}
                      className={classnames(
                        'c_locale-picker__container__option',
                        'c_locale-picker__container__option--desktop'
                      )}
                      onClick={() => setLocale(locale)}
                    >
                      {supportedLocaleNames[locale]}
                    </button>
                  )
                )
              }
            </div>
            <div
              className={classnames(
                'c_locale-picker__container',
                'c_locale-picker__container--mobile'
              )}>
              <button
                disabled={true}
                className="c_locale-picker__container__option">
                {supportedLocaleNames[currentLocale]}
              </button>
              <button
                className="c_locale-picker__container__carrot"
                onClick={() => setOpen(!open)}>
                <img
                  src={triangle}
                  className={classnames(
                    'c_locale-picker__container__carrot__image',
                    { 'c_locale-picker__container__carrot__image--open': open }
                  )}
                />
              </button>
              { open && (
                <div
                  className="c_locale-picker__container__dropdown-container">
                  { supportedLocales.map(
                    (locale) => (
                      <button
                        key={locale}
                        disabled={locale === currentLocale}
                        className={classnames(
                          'c_locale-picker__container__option',
                          { 'c_locale-picker__container__option--hide': (locale === currentLocale) }
                        )}
                        onClick={() => setLocale(locale)}
                      >
                        {supportedLocaleNames[locale]}
                      </button>
                    )
                  )
                  }
                </div>
              )}
            </div>
          </div>
        )
      }
    </LocaleContext.Consumer>
  );
};
