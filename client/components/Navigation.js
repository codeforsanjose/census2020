import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';
import { LocalePicker } from './LocalePicker';
import { FormattedMessage } from 'react-intl';

export default class Navigation extends Component {
  render () {
    return (
      <nav className="c_navigation">
        <LocalePicker
        />
        <div className="c_navigation__links">
          <Link to="/">
            <FormattedMessage
              id="navigation.links.home"
              defaultMessage="Home"
              description="'Home' link in the navigation bar"
            />
          </Link>
          <Link to="/contact">
            <FormattedMessage
              id="navigation.links.contact"
              defaultMessage="Contact"
              description="'Contact' link in the navigation bar"
            />
          </Link>
        </div>
      </nav>
    );
  }
}
