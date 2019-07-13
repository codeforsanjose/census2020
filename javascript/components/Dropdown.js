import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
  render () {
    const {
      name,
      value,
      options,
      label,
      onChange
    } = this.props;

    let list = (
      <select
        name={name}
        value={value}
        onChange={onChange}>
        {options.map((option, i) => (
          <option
            value={option}
            key={i}>{option}</option>
        ))}
      </select>
    );

    return (
      <div>
        <label>
          {label}:
          {list}
        </label>
      </div>
    );
  }
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
