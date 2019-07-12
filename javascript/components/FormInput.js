import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactField extends Component {
  render () {
    let formElt;
    const { inputType, inputValue, handleChange, fieldName, options } = this.props;
    if (inputType === 'dropdown') {
      formElt = (
        <select name={this.props.fieldName.toLowerCase().split(' ')[0]} onChange={handleChange}>
          {options.map((option, idx) => (
            <option value={option.toLowerCase()} key={idx}>{option}</option>
          ))}
        </select>
      );
    } else if (inputType === 'textarea') {
      formElt = (
        <textarea value={inputValue} onChange={handleChange} name={this.props.fieldName.toLowerCase().split(' ')[0]}></textarea>
      );
    } else {
      formElt = (
        <input type={inputType} value={inputValue} onChange={handleChange} name={this.props.fieldName.toLowerCase().split(' ')[0]} />
      );
    }

    return (
      <div>
        <label>
          {`${fieldName}:`}
        </label>
        {formElt}
      </div>
    );
  }
}

ContactField.propTypes = {
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
  fieldName: PropTypes.string,
  options: PropTypes.arr,
  key: PropTypes.number
};
