import React from 'react';
import PropTypes from 'prop-types';

import './SampleTextbox.scss';

export const SampleTextbox = ({ value }) => {
  return (
    <textarea
      className="c_sample-textbox"
      value={value}
      readOnly></textarea>
  );
};

SampleTextbox.propTypes = {
  value: PropTypes.string
};
