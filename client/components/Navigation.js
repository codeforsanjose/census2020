import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

import './Navigation.scss';
import { LocalePicker } from './LocalePicker';
import logoUrl from '../images/CityOfSanJose_logo.png';
import menu from '../images/menu.svg';
import close from '../images/close.svg';

/**
 * @param {object} props
 * @param {object} props.location the current location of the app
 * @param {string} props.location.pathname the path portion of the
 * current app location
 * @param {string} props.path the path for the nav link
 * @param {*} props.children the component children
 */
let NavLink = ({ location, path, children }) => {
  const isActive = location.pathname === path;
  const className = 'c_navigation__link';
  return (
    <Link
      to={path}
      className={classnames(
        className,
        {
          [`${className}--active`]: isActive
        }
      )}
      disabled={isActive}
    >
      {children}
    </Link>
  );
};

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
        <Link
          to="/"
          className="c_navigation__logo">
          <img
            className="c_navigation__logo__image"
            alt="City of San Jose logo"
            src={`${logoUrl}?w=138`}
          />
        </Link>
        <div className={classnames(
          'c_navigation__links',
          'c_navigation__links--desktop'
        )}>
          <NavLink
            path="/"
          >
            <FormattedMessage
              id="navigation.links.home"
              defaultMessage="Home"
              description="'Home' link in the navigation bar"
            />
          </NavLink>
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
        <LocalePicker />
        <MobileMenu />
        <CensusLink desktop />
      </nav>
    );
  }
}

export const CensusLink = ({desktop}) => (
  <a 
    className={ classnames(
        "c_navigation__census-link",
        {"c_navigation__census-link--desktop" : desktop},
        {"c_navigation__census-link--mobile" : !desktop}
      )}
      href="https://census.gov">
    <FormattedMessage
      id="navigation.externalCensusLink"
      defaultMessage="TAKE THE CENSUS"
      description="External link to the 2020 Census portal"
    />
  </a>
);

CensusLink.propTypes = {
  desktop: PropTypes.boolean
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="c_mobile-menu">
      <button
        className="c_mobile-menu__hamburger"
        onClick={() => setOpen(!open)}>
        <img
          src={(open) ? close : menu}
          className="c_mobile-menu__hamburger__image"
        />
      </button>
      <div className={classnames(
        'c_mobile-menu__drawer',
        { 'c_mobile-menu__drawer--active': open }
      )}>
        <div className="c_navigation__links">
          <NavLink
            path="/"
          >
            <FormattedMessage
              id="navigation.links.home"
              defaultMessage="Home"
              description="'Home' link in the navigation bar"
            />
          </NavLink>
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
      </div>
    </div>
  );
};
