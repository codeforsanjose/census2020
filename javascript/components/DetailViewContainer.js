import React, { Component } from 'react';

import { English } from '../../strings/english.js';

export default class DetailViewContainer extends Component {
  render () {
    return (
      <div className='main-container'>
        { English.Hello }
      </div>
    );
  }
}
