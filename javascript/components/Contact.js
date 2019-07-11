import React, { Component } from 'react';

export default class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      organization: '',
      email: '',
      language: 'english',
      zipCode: '',
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          </label>
          <input type='text' value={this.state.name} onChange={this.handleChange} name='name' />
          <br/>
          <label>
            Organization:
          </label>
          <input type='text' value={this.state.organization} onChange={this.handleChange} name='organization' />
          <br/>
          <label>
            Email:
          </label>
          <input type='text' value={this.state.email} onChange={this.handleChange} name='email' />
          <br/>
          <label>
            Spoken Language:
          </label>
          <select name={'language'} onChange={this.handleChange}>
            <option value={'english'}>English</option>
            <option value={'spanish'}>Spanish</option>
            <option value={'vietnamese'}>Vietnamese</option>
          </select>
          <br/>
          <label>
            Zip Code:
          </label>
          <input type='number' value={this.state.zipCode} onChange={this.handleChange} name='zipCode' />
          <br/>
          <label>
            Interest:
          </label>
          <select name={'interest'} onChange={this.handleChange}>
            <option value={'volunteer'}>Volunteer</option>
            <option value={'workForCensus'}>Work for Census2020</option>
            <option value={'requestPresentation'}>Request presentation</option>
            <option value={'other'}>Other</option>
          </select>
          <br/>
          <label>
            Comment:
          </label>
          <textarea type='number' value={this.state.comment} onChange={this.handleChange} name='comment'></textarea>
          <br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}
