import React, { Component } from 'react';
import TextInput from './TextInput';
import Dropdown from './Dropdown';

export default class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      organization: '',
      email: '',
      language: 'English',
      zip: '',
      interest: 'Volunteer',
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
      zip,
      interest,
      comment
    } = this.state;

    const fields = [
      {
        name: 'name',
        value: name,
        label: 'Name',
        type: 'text',
        options: []
      },
      {
        name: 'organization',
        value: organization,
        label: 'Organization',
        type: 'text',
        options: []
      },
      {
        name: 'email',
        value: email,
        label: 'Email',
        type: 'text',
        options: []
      },
      {
        name: 'language',
        value: language,
        label: 'Language Spoken',
        type: 'dropdown',
        options: [
          'English',
          'Spanish',
          'Vietnamese']
      },
      {
        name: 'zip',
        value: zip,
        label: 'Zip Code',
        type: 'text',
        options: []
      },
      {
        name: 'interest',
        value: interest,
        label: 'Interest',
        type: 'dropdown',
        options: [
          'Volunteer',
          'Work for Census2020',
          'Request presentation',
          'Other'
        ]
      },
      {
        name: 'comment',
        value: comment,
        label: 'Comment',
        type: 'textarea',
        options: []
      }
    ];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            fields.map((field, i) => {
              if (field.type === 'dropdown') {
                return (
                  <Dropdown
                    onChange={this.handleChange}
                    name={field.name}
                    value={field.value}
                    label={field.label}
                    options={field.options}
                    key={i}/>
                );
              } else {
                return (
                  <TextInput
                    onChange={this.handleChange}
                    name={field.name}
                    value={field.value}
                    label={field.label}
                    type={field.type}
                    key={i}/>
                );
              }
            })
          }
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}
