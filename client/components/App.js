import React from 'react';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import DetailViewContainer from './DetailViewContainer';
import Contact from './Contact';
import LocaleContext from './LocaleContext';
import { messages } from '../../i18n/translations';

import './App.scss';
import FAQ from './FAQ';
import SampleCensus from './SampleCensus';
import { Footer } from './Footer';
export default class App extends React.PureComponent {
  render () {
    return (
      <LocaleContext.Consumer>
        {
          (context) => {
            const { currentLocale } = context;
            document.documentElement.lang = currentLocale;

            return (
              <IntlProvider
                locale={currentLocale}
                messages={messages[currentLocale]}
              >
                <div
                  className="c_app"
                >
                  <Navigation
                  />
                  <div className="c_app__content-and-footer">
                    <div
                      className="c_app__content"
                    >
                      <Switch>
                        <Route exact path='/' component={DetailViewContainer} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/faq' component={FAQ} />
                        <Route path='/samplecensus' component={SampleCensus} />
                      </Switch>
                    </div>
                    <ToastContainer />
                    <Footer />
                  </div>
                </div>
              </IntlProvider>
            );
          }
        }
      </LocaleContext.Consumer>
    );
  }
}
