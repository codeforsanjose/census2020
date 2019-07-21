import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';
import { LocalePicker } from './LocalePicker';

export default class Navigation extends Component {
  render () {
    return (
      <nav className="c_navigation">
        <LocalePicker
        />
        <div className="c_navigation__links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    );
  }
}
