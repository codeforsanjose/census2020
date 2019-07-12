import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component {
  render () {
    let formElt;
    const { inputType, inputValue, onChange, fieldName, options } = this.props;
    if (inputType === 'dropdown') {
      formElt = (
        <select name={this.props.fieldName.toLowerCase().split(' ')[0]} onChange={onChange}>
          {options.map((option, i) => (
            <option value={option.toLowerCase()} key={i}>{option}</option>
          ))}
        </select>
      );
    } else if (inputType === 'textarea') {
      formElt = (
        <textarea value={inputValue} onChange={onChange} name={this.props.fieldName.toLowerCase().split(' ')[0]}></textarea>
      );
    } else {
      formElt = (
        <input type={inputType} value={inputValue} onChange={onChange} name={this.props.fieldName.toLowerCase().split(' ')[0]} />
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

FormInput.propTypes = {
  inputType: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.array
};
