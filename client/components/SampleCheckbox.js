import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const SampleCheckbox = (props) => {
  return (
    <input
      {...props}
      className={classnames('c_sample-checkbox', props.className)}
      type="checkbox"
      disabled
    />
  );
};

SampleCheckbox.propTypes = {
  className: PropTypes.string
};
