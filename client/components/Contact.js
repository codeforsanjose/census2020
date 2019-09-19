import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';

import TextInput from './TextInput';
import { sendContactForm } from '../api/contact';
import LocaleContext from './LocaleContext';
import {
  supportedLocales,
  supportedLocaleNames
} from '../../i18n/supported-locales';

class Contact extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    currentLocale: PropTypes.oneOf(supportedLocales)
  }

  static getInitialState (defaults = {}) {
    return Object.assign(
      {
        firstName: '',
        lastName: '',
        email: '',
        comment: ''
      },
      defaults
    );
  }

  constructor (props) {
    super(props);
    this.state = Contact.getInitialState({
      language: supportedLocaleNames[props.currentLocale]
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  notifySubmitSuccess () {
    toast(
      this.props.intl.formatMessage({
        id: 'components.Contact.submitSuccessToast',
        description: 'Message shown to users in a popup when the contact form has been successfully submitted',
        defaultMessage: 'Your request for information has been submitted'
      }),
      {
        type: toast.TYPE.SUCCESS,
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 8000,
        hideProgressBar: true
      }
    );
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearForm () {
    this.setState(Contact.getInitialState());
  }

  async handleSubmit (event) {
    event.preventDefault();
    await sendContactForm(this.state);

    this.notifySubmitSuccess();
    this.clearForm();
  }

  render () {
    const {
      firstName,
      lastName,
      email,
      comment
    } = this.state;

    /* options: [
      {
        value: 'Volunteer',
        label: this.props.intl.formatMessage({
          key: 'volunteer',
          id: 'components.Contact.fields.interest.options.volunteer',
          defaultMessage: 'Volunteer',
          description: "'Volunteer' option for the Interest field in the Contact form"
        })
      },
      {
        value: 'Work for Census2020',
        label: this.props.intl.formatMessage({
          key: 'workForCensus',
          id: 'components.Contact.fields.interest.options.workForCensus',
          defaultMessage: 'Work for Census2020',
          description: "'Work for Census' option for the Interest field in the Contact form"
        })
      },
      {
        value: 'Request presentation',
        label: this.props.intl.formatMessage({
          key: 'requestPresentation',
          id: 'components.Contact.fields.interest.options.requestPresentation',
          defaultMessage: 'Request presentation',
          description: "'Request Presentation' option for the Interest field in the Contact form"
        })
      },
      {
        value: 'Other',
        label: this.props.intl.formatMessage({
          key: 'other',
          id: 'components.Contact.fields.interest.options.other',
          defaultMessage: 'Other',
          description: "'Other' option for the Interest field in the Contact form"
        })
      }
    ]
  } */

    return (
      <div className="c_contact">
        <h1 className="c_contact__headline">Get Involved</h1>
        <div className="c_contact__content">
          <div className="c_contact__content__col">
            <img className="c_contact__content__col__contact_image" src={require('../images/contact-form.jpg')}></img>
            <div className="c_contact__content__col__blurb">
              <h3 className="c_contact__content__col__blurb__headline">
                Interested in working for the Census?
              </h3>
              <p className="c_contact__content__col__blurb__info">
                Find more information <a className="c_contact__content__col__blurb__info__link" href="https://2020census.gov/en/jobs">here</a>
              </p>
            </div>
            <div className="c_contact__content__col__blurb">
              <h3 className="c_contact__content__col__blurb__headline">
                Need more information?
              </h3>
              <p className="c_contact__content__col__blurb__info">
                Visit our <a className="c_contact__content__col__blurb__info__link" href="/faq">FAQ</a> or submit your question and a San Jose Census organizer will get back to you within 2 business days.
              </p>
            </div>
          </div>
          <div className="c_contact__content__form_col">
            <h2 className="c_contact__content__form_col__form_title">Contact Form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="c_contact__content__form_col__form">
                <div className="c_contact__content__form_col__form__row">
                  <div className="c_contact__content__form_col__form__row__half">
                    <h6 className="c_contact__content__form_col__form__row__label">
                      <span className="c_contact__content__form_col__form__row__label__required">* </span>
                      <FormattedMessage
                        id="components.Contact.fields.firstName"
                        defaultMessage="First Name"
                        description="Label for the First Name field in the Contact form"
                      />
                    </h6>
                    <TextInput
                      onChange={this.handleChange}
                      name='first name'
                      className='c_contact__content__form_col__form__field'
                      value={firstName}
                      type='text'
                    />
                  </div>
                  <div className="c_contact__content__form_col__form__row__gutter"></div>
                  <div className="c_contact__content__form_col__form__row__half">
                    <h6 className="c_contact__content__form_col__form__row__label">
                      <span className="c_contact__content__form_col__form__row__label__required">* </span>
                      <FormattedMessage
                        id="components.Contact.fields.lastName"
                        defaultMessage="Last Name"
                        description="Label for the Last Name field in the Contact form"
                      />
                    </h6>
                    <TextInput
                      onChange={this.handleChange}
                      name='last name'
                      className='c_contact__content__form_col__form__field'
                      value={lastName}
                      type='text'
                    />
                  </div>
                </div>
                <h6 className="c_contact__content__form_col__form__row__label">
                  <span className="c_contact__content__form_col__form__row__label__required">* </span>
                  <FormattedMessage
                    id="components.Contact.fields.email"
                    defaultMessage="Email"
                    description="Label for the Email field in the Contact form"
                  />
                </h6>
                <TextInput
                  onChange={this.handleChange}
                  name='email'
                  className='c_contact__content__form_col__form__field'
                  value={email}
                  type='text'
                />
                <h6 className="c_contact__content__form_col__form__row__label">
                  <FormattedMessage
                    id="components.Contact.fields.comment"
                    defaultMessage="Comment"
                    description="Label for the Comment field in the Contact form"
                  />
                  <span className="c_contact__content__form_col__form__row__label__optional"> (Optional)</span>
                </h6>
                <TextInput
                  onChange={this.handleChange}
                  name='comment'
                  className='c_contact__content__form_col__form__textarea'
                  rows={4}
                  value={comment}
                  type='textarea'
                />
              </div>
              <button
                className="c_contact__content__form_col__form__submit"
                type="submit"
              >
                <FormattedMessage
                  id="components.Contact.submitButton"
                  description="Button that submits the Contact form"
                  defaultMessage="Submit"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedContact = injectIntl(
  (props) => (
    <LocaleContext.Consumer>
      {
        ({ currentLocale }) => (
          <Contact
            {...props}
            currentLocale={currentLocale}
          />
        )
      }
    </LocaleContext.Consumer>
  )
);

export default WrappedContact;
