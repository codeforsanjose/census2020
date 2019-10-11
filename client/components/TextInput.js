import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render () {
    const {
      name,
      className,
      value,
      rows,
      label,
      type,
      onChange
    } = this.props;

    let textInput;

    if (type === 'textarea') {
      textInput = (
        <textarea
          className={className}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}>
        </textarea>
      );
    } else {
      textInput = (
        <input
          className={className}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
        />
      );
    }

    return (
      <div>
        <label>
          {label}
          {textInput}
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.element,
  rows: PropTypes.number,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
