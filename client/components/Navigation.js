import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import './Navigation.scss';
import { LocalePicker } from './LocalePicker';
import logoUrl from '../images/CityOfSanJose_logo.png';

/**
 * @param {object} props
 * @param {object} props.location the current location of the app
 * @param {string} props.location.pathname the path portion of the
 * current app location
 * @param {string} props.path the path for the nav link
 * @param {*} props.children the component children
 */
let NavLink = ({ location, path, children }) => (
  <Link
    to={path}
    className="c_navigation__link"
    disabled={location.pathname === path}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  path: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ]).isRequired
};

NavLink = withRouter(NavLink);

export default class Navigation extends React.PureComponent {
  render () {
    return (
      <nav className="c_navigation">
        <div className="c_navigation__logo">
          <Link
            to="/"
          >
            <img
              className="c_navigation__logo__image"
              alt="City of San Jose logo"
              src={logoUrl}
            />
          </Link>
        </div>
        <div className="c_navigation__links">
          <NavLink
            path="/faq"
          >
            <FormattedMessage
              id="navigation.links.faq"
              defaultMessage="FAQ"
              description="'FAQ' link in the navigation bar"
            />
          </NavLink>
          <NavLink
            path="/samplecensus"
          >
            <FormattedMessage
              id="navigation.links.sampleCensus"
              defaultMessage="Sample Survey"
              description="'Sample Survey' link in the navigation bar"
            />
          </NavLink>
          <NavLink
            path="/contact"
          >
            <FormattedMessage
              id="navigation.links.contact"
              defaultMessage="Get Involved"
              description="'Get Involved' link in the navigation bar"
            />
          </NavLink>
        </div>
        <LocalePicker
        />
        <a
          href="https://census.gov"
          className="c_navigation__census-link usa-button usa-button--secondary"
        >
          <FormattedMessage
            id="take-the-census-link"
            description="Link to the Census"
            defaultMessage="Take the Census"
          />
        </a>
      </nav>
    );
  }
}
