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

import ScrollToTop from './ScrollToTop';

const Home = React.lazy(() => import('./DetailViewContainer'));
const FAQ = React.lazy(() => import('./FAQ'));
const SampleCensus = React.lazy(() => import('./SampleCensus'));

const routes = [
  (
    <Route exact key="/" path='/' component={Home} />
  ),
  (
    <Route key="/faq" path='/faq' component={FAQ} />
  ),
  (
    <Route key="/samplecensus" path='/samplecensus' component={SampleCensus} />
  )
];
if (process.env.IS_EMAIL_ENABLED) {
  const Contact = React.lazy(() => import('./Contact'));
  routes.push(<Route key="/contact" path='/contact' component={Contact} />);
}

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
                      <ScrollToTop />
                      <React.Suspense fallback={<LoadingPage />}>
                        <Switch>
                          {routes}
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
