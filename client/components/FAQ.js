import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './FAQ.scss';

const questions = {
  0: 'How can I complete the Census?',
  1: 'What types of questions are on the Census?',
  2: 'How long will it take to complete?',
  3: 'Will the census be available in other languages?',
  4: 'I forgot my ID. Can I still take the Census?',
  5: 'Will my census information be shared with the government?',
  6: 'How do I identify a Census official in person?',
  7: 'How can I avoid scams online?',
  8: 'How do I report suspected fraud?',
  9: 'Do I need to complete the Census?',
  10: 'Why is the census important?',
  11: 'How will the Census count homeless residents?'
};

const Answers = {
  0: 'There are four ways you can respond to the census: over the internet, by telephone, by mail (paper questionnaire) or via in-person visit from census workers.',
  1: 'The 2020 Census will ask basic information about each household, such as the total number of people living at your address, homeownership (own or rent), your phone number, and the names, gender, race/ethnicity of each individual living or staying with you. This information will not be shared with the City or any other local, state or federal agency.',
  2: 'The census survey is short and on average takes about 10 minutes or less to complete, depending on the number of people in the household.',
  3: 'Yes. The online survey is available in 12 languages (Spanish, Chinese, Vietnamese, Korean, Russian, Arabic, Tagalog, Polish, French, Haitian Creole, Portuguese, Japanese); phone assistance will also be available in these languages by calling (####). The paper survey is available in English and Spanish. Call to request a paper survey./n The U.S. Census Bureau will provide other materials such as languages guides, glossaries, etc. in 59 languages. Residents who need assistance or who do not have computer or internet access can visit a City library or community center for assistance.',
  4: 'Yes. If you did not receive a census ID code or misplaced it, you can still complete the online census survey by using your mailing address. If you don’t want to respond online, you can call Census Questionnaire Assistance at (###) to complete the survey over the phone, or request a paper survey, also using the same unique ID number or providing your home address.',
  5: 'No. Census information is confidential. Individuals’ responses to the 2020 census are safe, secure and protected by federal law. Your answers can only be used to produce statistics; they cannot be used against you in any way. The Bureau combines your responses with information from other households to produce data, and the data will not identify your household or any person in your household. In addition, all Census Bureau employees take an oath of privacy and are sworn for life to protect the confidentiality of the data. The penalty for unlawful disclosure is a fine of up to $250,000, imprisonment of up to 5 years, or both.',
  6: 'If someone visits your home to collect a response for the 2020 Census, there are steps you can take to verify their identity.First, check to make sure that they have a valid ID badge, with their photograph, a Department of Commerce watermark, and an expiration date. Note that they may be carrying a Census Bureau phone or a laptop, plus a bag with a Census Bureau logo. If you still have questions, call 855-562-2020 and press option 3 to speak with a local Census Bureau representative.',
  7: 'Phishing is the criminal act of trying to get your information by pretending to be an entity that you trust. Phishing emails often direct you to a website that looks real but is fake—and that may be infected with malware.To help protect yourself from phishing and other scams, please remember that the U.S. Census Bureau will never ask for: Your Social Security number. Your bank account or credit card numbers. Money or donations. In addition, the Census Bureau will not contact you on behalf of a political party.',
  8: 'If you suspect fraud, call 855-562-2020 and press option 3 to speak with a local Census Bureau representative. If it is determined that the visitor who came to your door does not work for the Census Bureau, contact the Police Department (phone ##).',
  9: 'Yes, all people living in the United States must be counted. Historically, young children (ages 0-4), teenagers, senior citizens, renters, immigrants, and the homeless population are undercounted in the census.',
  10: 'Yes, all people living in the United States must be counted. Historically, young children (ages 0-4), teenagers, senior citizens, renters, immigrants, and the homeless population are undercounted in the census.',
  11: 'In late March 2020, the Census Bureau will conduct Service-Based Enumeration (SBE). During this time, Census workers will count people without conventional housing or people experiencing homelessness at places where they receive services (e.g., shelters, soup kitchens, regularly scheduled mobile food van locations, etc.) or at pre-identified outdoor locations where people are known to sleep — such as encampments, under bridges, or in parking lots.'
};

class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      expand: false
    };
  }

  render () {
    return (
      <li className="c_faq__question_item">
        <button className="c_faq__question_item__button"
          onClick={() => this.setState({ expand: !this.state.expand })}>
          <div className="c_faq__question_item__button__text_container">
            <div className='c_faq__question_item__button__text_container__q'>
              {questions[this.props.position]}
            </div>
            <div className="c_faq__question_item__button__text_container__icon">
              { (this.state.expand) ? '-' : '+' }
            </div>
          </div>
        </button>
        <div className="c_faq__question_item__answer_container">
          { this.state.expand && (
            <div className="c_faq__question_item__answer_container__answer"> { Answers[this.props.position] } </div>
          )}
        </div>
      </li>
    );
  }
}

export default class FAQ extends React.Component {
  render () {
    return (
      <div>
        <header className="c_faq__header" >
          <FormattedMessage
            id="components.FAQ.header"
            description="FAQ page header text"
            defaultMessage="Frequently Asked Questions"
          />
        </header>
        <main className="c_faq__questions">
          <div className="c_faq__questions__general_info">
            <div className="c_faq__questions__general_info__title">
                            General Information
            </div>
            <ul className="c_faq__questions__general_info__list">
              <Question position={0} />
              <Question position={1} />
              <Question position={2} />
              <Question position={3} />
              <Question position={4} />

            </ul>
          </div>
          <div className="c_faq__questions__security">
            <div className="c_faq__questions__security__title">
                            Security
            </div>
            <ul className="c_faq__questions__security__list">
              <Question position={5} />
              <Question position={6} />
              <Question position={7} />
              <Question position={8} />
            </ul>
          </div>
          <div className="c_faq__questions__value">
            <div className="c_faq__questions__value__title">
                            Value
            </div>
            <ul className="c_faq__questions__value__list">
              <Question position={9} />
              <Question position={10} />
              <Question position={11} />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

Question.propTypes = {
  position: PropTypes.number.isRequired
};
