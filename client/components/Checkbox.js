import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.PureComponent {
  render () {
    const {
      className,
      checked,
      readOnly,
      label,
      name,
      value,
      onCheck
    } = this.props;

    let checkbox = (
      <span className={className}>
        <input
          type="checkbox"
          id={name}
          checked={checked}
          readOnly={readOnly}
          name={name}
          value={value}
          onChange={onCheck}
        />
        <label htmlFor={name}>{label}</label>
      </span>
    );

    return (
      <div>
        {checkbox}
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  readOnly: false
};
