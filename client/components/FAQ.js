import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';

import './FAQ.scss';
import './Headers.scss';

const GENERAL_INFORMATION_SECTION_KEY = 'generalInformation';
const SECURITY_SECTION_KEY = 'security';
const VALUE_SECTION_KEY = 'value';

const FAQ_SECTIONS = [
  GENERAL_INFORMATION_SECTION_KEY,
  SECURITY_SECTION_KEY,
  VALUE_SECTION_KEY
];

const HEADERS = {
  [GENERAL_INFORMATION_SECTION_KEY]: (
    <FormattedMessage
      id="components.FAQ.sections.generalInformation.header"
      defaultMessage="General Information"
    />
  ),
  [SECURITY_SECTION_KEY]: (
    <FormattedMessage
      id="components.FAQ.sections.security.header"
      defaultMessage="Security"
    />
  ),
  [VALUE_SECTION_KEY]: (
    <FormattedMessage
      id="components.FAQ.sections.value.header"
      defaultMessage="Value"
    />
  )
};

const FAQ_ENTRIES = {
  [GENERAL_INFORMATION_SECTION_KEY]: [
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.howCanIComplete.question"
          defaultMessage="How can I complete the Census?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.howCanIComplete.answer"
          defaultMessage="There are four ways you can respond to the census: over the internet, by telephone, by mail (paper questionnaire) or via in-person visit from census workers."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.typesOfQuestions.question"
          defaultMessage="What types of questions are on the Census?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.typesOfQuestions.answer"
          defaultMessage="The 2020 Census will ask basic information about each household, such as the total number of people living at your address, homeownership (own or rent), your phone number, and the names, gender, race/ethnicity of each individual living or staying with you. This information will not be shared with the City or any other local, state or federal agency."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.howLong.question"
          defaultMessage="How long will it take to complete?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.howLong.answer"
          defaultMessage="The census survey is short and on average takes about 10 minutes or less to complete, depending on the number of people in the household."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.otherLanguages.question"
          defaultMessage="Will the census be available in other languages?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.otherLanguages.answer"
          defaultMessage="Yes. The online survey is available in 12 languages (Spanish, Chinese, Vietnamese, Korean, Russian, Arabic, Tagalog, Polish, French, Haitian Creole, Portuguese, Japanese); phone assistance will also be available in these languages by calling (####). The paper survey is available in English and Spanish. Call to request a paper survey./n The U.S. Census Bureau will provide other materials such as languages guides, glossaries, etc. in 59 languages. Residents who need assistance or who do not have computer or internet access can visit a City library or community center for assistance."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.forgotId.question"
          defaultMessage="I forgot my ID. Can I still take the Census?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.forgotId.answer"
          defaultMessage="Yes. If you did not receive a census ID code or misplaced it, you can still complete the online census survey by using your mailing address. If you don’t want to respond online, you can call Census Questionnaire Assistance at (###) to complete the survey over the phone, or request a paper survey, also using the same unique ID number or providing your home address."
        />
      )
    }
  ],
  [SECURITY_SECTION_KEY]: [
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.willInfoBeShared.question"
          defaultMessage="Will my census information be shared with the government?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.willInfoBeShared.answer"
          defaultMessage="No. Census information is confidential. Individuals’ responses to the 2020 census are safe, secure and protected by federal law. Your answers can only be used to produce statistics; they cannot be used against you in any way. The Bureau combines your responses with information from other households to produce data, and the data will not identify your household or any person in your household. In addition, all Census Bureau employees take an oath of privacy and are sworn for life to protect the confidentiality of the data. The penalty for unlawful disclosure is a fine of up to $250,000, imprisonment of up to 5 years, or both."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.howToIdentifyAnOfficial.question"
          defaultMessage="How do I identify a Census official in person?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.howToIdentifyAnOfficial.answer"
          defaultMessage="If someone visits your home to collect a response for the 2020 Census, there are steps you can take to verify their identity.First, check to make sure that they have a valid ID badge, with their photograph, a Department of Commerce watermark, and an expiration date. Note that they may be carrying a Census Bureau phone or a laptop, plus a bag with a Census Bureau logo. If you still have questions, call 855-562-2020 and press option 3 to speak with a local Census Bureau representative."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.howToAvoidScams.question"
          defaultMessage="How can I avoid scams online?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.howToAvoidScams.answer"
          defaultMessage="Phishing is the criminal act of trying to get your information by pretending to be an entity that you trust. Phishing emails often direct you to a website that looks real but is fake—and that may be infected with malware.To help protect yourself from phishing and other scams, please remember that the U.S. Census Bureau will never ask for: Your Social Security number. Your bank account or credit card numbers. Money or donations. In addition, the Census Bureau will not contact you on behalf of a political party."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.howToReportFraud.question"
          defaultMessage="How do I report suspected fraud?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.howToReportFraud.answer"
          defaultMessage="If you suspect fraud, call 855-562-2020 and press option 3 to speak with a local Census Bureau representative. If it is determined that the visitor who came to your door does not work for the Census Bureau, contact the Police Department (phone ##)."
        />
      )
    }
  ],
  [VALUE_SECTION_KEY]: [
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.doINeedToComplete.question"
          defaultMessage="Do I need to complete the Census?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.doINeedToComplete.answer"
          defaultMessage="Yes, all people living in the United States must be counted. Historically, young children (ages 0-4), teenagers, senior citizens, renters, immigrants, and the homeless population are undercounted in the census."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.whyImportant.question"
          defaultMessage="Why is the census important?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.whyImportant.answer"
          defaultMessage="Yes, all people living in the United States must be counted. Historically, young children (ages 0-4), teenagers, senior citizens, renters, immigrants, and the homeless population are undercounted in the census."
        />
      )
    },
    {
      question: (
        <FormattedMessage
          id="components.FAQ.entries.homeless.question"
          defaultMessage="How will the Census count homeless residents?"
        />
      ),
      answer: (
        <FormattedMessage
          id="components.FAQ.entries.homeless.answer"
          defaultMessage="In late March 2020, the Census Bureau will conduct Service-Based Enumeration (SBE). During this time, Census workers will count people without conventional housing or people experiencing homelessness at places where they receive services (e.g., shelters, soup kitchens, regularly scheduled mobile food van locations, etc.) or at pre-identified outdoor locations where people are known to sleep — such as encampments, under bridges, or in parking lots"
        />
      )
    }
  ]
};

class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      expand: false
    };
  }

  render () {
    const itemClass = 'c_faq__question-item';
    return (
      <li className={classnames(
        itemClass,
        {
          [`${itemClass}--expanded`]: this.state.expand
        }
      )}>
        <button className="c_faq__question-item__question"
          onClick={() => this.setState({ expand: !this.state.expand })}>
          {this.props.question}
        </button>
        <div className="c_faq__question-item__answer">
          {this.props.answer}
        </div>
      </li>
    );
  }
}

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answer: PropTypes.element.isRequired
};

export default class FAQ extends React.Component {
  render () {
    return (
      <div className="c_faq">
        <div className="c_headers__goldHeader"></div>
        <div className="c_faq__body">
          <header className="c_faq__header" >
            <FormattedMessage
              id="components.FAQ.header"
              description="FAQ page header text"
              defaultMessage="Frequently Asked Questions"
            />
          </header>
          <div>
            {FAQ_SECTIONS.map(
              (sectionKey) => (
                <div
                  key={sectionKey}
                  className="c_faq__questions__section">
                  <div className="c_faq__questions__section__title">
                    {HEADERS[sectionKey]}
                  </div>
                  <ul className="c_faq__questions__section__list">
                    {
                      FAQ_ENTRIES[sectionKey].map(
                        ({ question, answer }, index) => (
                          <Question
                            key={index}
                            question={question}
                            answer={answer}
                          />
                        )
                      )
                    }
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
