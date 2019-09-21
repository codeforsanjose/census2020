import React from 'react';
import { FormattedMessage } from 'react-intl';

import logoSrc from '../images/CityOfSanJose_logo_white.png';
import './Footer.scss';

export class Footer extends React.PureComponent {
  render () {
    return (
      <footer className="c_footer">
        <img src={logoSrc} className="c_footer__logo" />
        <div className="c_footer__contact-us">
          <h3
            className="c_footer__contact-us__header"
          >
            <FormattedMessage
              id="components.Footer.contactUs.header"
              defaultMessage="Contact Us"
            />
          </h3>
          <a
            href="mailto:2020census@sanjoseca.gov"
            className="c_footer__contact-us__email c_footer__link"
          >
            2020census@sanjoseca.gov
          </a>
          <a
            href="tel:(408) 535-5602"
            className="c_footer__contact-us__phone c_footer__link"
          >
            (408) 535-5602
          </a>
        </div>
        <ul
          className="c_footer__nav-links"
        >
          <li
            className="c_footer__nav-links__item"
          >
            <a
              // TODO: Refactor census link into external constants
              href="https://census.gov"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.takeTheCensus"
                defaultMessage="Take the Census"
              />
            </a>
          </li>
          <li
            className="c_footer__nav-links__item"
          >
            <a
              href="/faq"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.faq"
                defaultMessage="FAQ"
              />
            </a>
          </li>
          <li
            className="c_footer__nav-links__item"
          >
            <a
              href="/samplecensus"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.sampleSurvey"
                defaultMessage="Sample Survey"
              />
            </a>
          </li>
          <li
            className="c_footer__nav-links__item"
          >
            <a
              href="/contact"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.contact"
                defaultMessage="Get Involved"
              />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
