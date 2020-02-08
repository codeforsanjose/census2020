import React from 'react';
import PropTypes from 'prop-types';

import './SampleTextbox.scss';

export const SampleTextbox = ({ value }) => {
  return (
    <div
      className="c_sample-textbox">
      {value}
    </div>
  );
};

SampleTextbox.propTypes = {
  value: PropTypes.string
};
