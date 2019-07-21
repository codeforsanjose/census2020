import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render () {
    const {
      name,
      value,
      label,
      type,
      onChange
    } = this.props;

    let textInput;

    if (type === 'textarea') {
      textInput = (
        <textarea
          name={name}
          value={value}
          onChange={onChange}>
        </textarea>
      );
    } else {
      textInput = (
        <input
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
          {label}:
          {textInput}
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.element.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
