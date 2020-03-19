import React from 'react';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LocaleContext from './LocaleContext';
import LoadingPage from './LoadingPage';
import { messages } from '../../i18n/translations';

import './App.scss';

import { Footer } from './Footer';
const Home = React.lazy(() => import('./DetailViewContainer'));
const FAQ = React.lazy(() => import('./FAQ'));
const SampleCensus = React.lazy(() => import('./SampleCensus'));
const Contact = React.lazy(() => import('./Contact'));
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
                      <React.Suspense fallback={<LoadingPage />}>
                        <Switch>
                          <Route exact path='/' component={Home} />
                          <Route path='/contact' component={Contact} />
                          <Route path='/faq' component={FAQ} />
                          <Route path='/samplecensus' component={SampleCensus} />
                        </Switch>
                      </React.Suspense>
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
