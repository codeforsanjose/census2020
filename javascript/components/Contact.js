import React, { Component } from 'react';
import FormInput from './FormInput';

export default class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      organization: '',
      email: '',
      language: 'english',
      zip: '',
      interest: 'volunteer',
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit (event) {
    const { name } = this.state;
    alert(`${name}'s information will be sent for processing`);
    event.preventDefault();
  }

  render () {
    const {
      name,
      organization,
      email,
      language,
      zipCode,
      interest,
      comment
    } = this.state;

    const fields = [
      { type: 'text', value: name, name: 'Name', options: [] },
      { type: 'text', value: organization, name: 'Organization', options: [] },
      { type: 'text', value: email, name: 'Email', options: [] },
      { type: 'dropdown', value: language, name: 'Language Spoken', options: ['English', 'Spanish', 'Vietnamese'] },
      { type: 'text', value: zipCode, name: 'Zip Code', options: [] },
      { type: 'dropdown', value: interest, name: 'Interest', options: ['Volunteer', 'Work for Census2020', 'Request presentation'] },
      { type: 'textarea', value: comment, name: 'Comment', options: [] }
    ];
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {fields.map((field, idx) => (
            <FormInput inputType={field.type} inputValue={field.value} handleChange={this.handleChange} fieldName={field.name} options={field.options} key={idx}/>
          ))}
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}
