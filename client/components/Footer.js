import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import logoSrc from '../images/CityOfSanJose_logo_white.png';
import logoSrcWebp from '../images/CityOfSanJose_logo_white.webp';
import './Footer.scss';

export class Footer extends React.PureComponent {
  render () {
    return (
      <footer className="c_footer">
        <img
          srcSet={logoSrcWebp}
          src={logoSrc}
          className="c_footer__logo"
          alt="City of San Jose logo"
        />
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
            <Link
              to="/faq"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.faq"
                defaultMessage="FAQ"
              />
            </Link>
          </li>
          <li
            className="c_footer__nav-links__item"
          >
            <Link
              to="/samplecensus"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.sampleSurvey"
                defaultMessage="Sample Survey"
              />
            </Link>
          </li>
          <li
            className="c_footer__nav-links__item"
          >
            <Link
              to="/contact"
              className="c_footer__link"
            >
              <FormattedMessage
                id="components.Footer.links.contact"
                defaultMessage="Get Involved"
              />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
