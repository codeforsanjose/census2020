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
        className="usa-select"
        name={name}
        value={value}
        onChange={onChange}>
        {options.map((option, i) => {
          let value = option;
          let optionLabel = option;

          if (typeof option !== 'string') {
            value = option.value;
            optionLabel = option.label;
          }
          return (
            <option
              value={value}
              key={i}
            >
              {optionLabel}
            </option>
          );
        })}
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
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ])
  ).isRequired,
  label: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired
};
