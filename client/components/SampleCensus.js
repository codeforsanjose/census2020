import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

import './SampleCensus.scss';
import './Headers.scss';
import { FormattedMarkdownMessage } from './FormattedMarkdownMessage';

const CheckboxList = ({ children }) => {
  return (
    <ul
      className="c_sample-census__question__checkbox-list"
    >
      {
        React.Children.map(
          children,
          (item, index) => (
            <li
              key={index}
            >
              <label>
                <input
                  className="c_sample-census__question__checkbox-list__checkbox"
                  type="checkbox"
                  disabled
                />
                {item}
              </label>
            </li>
          )
        )
      }
    </ul>
  );
};

CheckboxList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
};

const FakeTextbox = ({ children }) => {
  return (
    <div className="c_sample-census__question__textarea">
      {children}
    </div>
  );
};

FakeTextbox.propTypes = {
  children: PropTypes.element.isRequired
};

const questions = [
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.1"
        defaultMessage="How many people were living or staying in this house, apartment, or mobile home on April 1, 2020?">
      </FormattedMessage>
    ),
    secondary_information: (
      <div
        className="c_sample-census__question__1__secondary"
      >
        <FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.1"
          defaultMessage={`Number of people=[|Enter number here|]`}
        />
      </div>
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.2"
        defaultMessage="Were there any additional people staying here on April 1, 2020 that you did not include in Question 1?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.2"
        defaultMessage={`
*Mark all that apply*

- [ ] Children, related or unrelated, such as newborn babies, grandchildren, or foster children
- [ ] Relatives, such as adult children, cousins, or in-laws
- [ ] Nonrelatives, such as roommates or live-in babysitters
- [ ] People staying here temporarily
- [ ] No additional people
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.3"
        defaultMessage="Is this house, apartment, or mobile home: ">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.3"
        defaultMessage={`
*Mark ONE box*

- [ ] Owned by you or someone in this household with a mortgage or loan? Include home equity loans.
- [ ] Owned by you or someone in this household free and clear (without a mortgage or loan)?
- [ ] Rented?
- [ ] Occupied without payment of rent?
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.4"
        defaultMessage="What is your telephone number?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.4"
        defaultMessage={`
Telephone Number = [|Enter telephone number here|]
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.5"
        defaultMessage="Please provide information for each person living here. If there is someone living here who pays the rent or owns this residence, start by listing him or her as Person 1. If the owner or the person who pays the rent does not live here, start by listing any adult living here as Person 1. What is Person 1's name?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.5"
        defaultMessage={`
Firstname = [||] Last Name(s) = [||]
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.6"
        defaultMessage="What is Person 1’s sex?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.6"
        defaultMessage={`
*Mark ONE box*

- [ ] Male
- [ ] Female
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.7"
        defaultMessage="What is Person 1’s age and what is Person 1’s date of birth?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.7"
        defaultMessage={`
*For babies less than 1 year olf, do not write the age in months. Write 0 as the age.*

Age on April 1, 2020 = [||] years
Month = [||] Day = [||] Year of birth = [||]
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.8"
        defaultMessage="Is Person 1 of Hispanic, Latino, or Spanish origin?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.8"
        defaultMessage={`
- [ ] No, not of Hispanic, Latino, or Spanish origin
- [ ] Yes, Mexican, Mexican Am., Chicano
- [ ] Yes, Puerto Rican
- [ ] Yes, Cuban
- [ ] Yes, another Hispanic, Latino, or Spanish origin – Print, for example, Salvadoran, Dominicican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.
[||]
`}
      />
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.9"
        defaultMessage="What is Person 1’s race?">
      </FormattedMessage>
    ),
    secondary_information: (
      <FormattedMarkdownMessage
        id="components.SampleCensus.secondary_information.9"
        defaultMessage={`
*Mark one or more boxes AND print origins*

- [ ] White – Print, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc. [||]
- [ ] Black or African Am. – Print, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc. [||]
- [ ] American Indian or Alaska Native – Print name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec, Native Village of Barrow Inupiat Traditional Government, Nome Eskimo Community, etc. [||]
- [ ] Chinese
- [ ] Filipino
- [ ] Asian Indian
- [ ] Vietnamese
- [ ] Korean
- [ ] Japanese
- [ ] Native Hawaiian
- [ ] Samoan
- [ ] Chamorro
- [ ] Other Asian – Print, for example, Pakistani, Cambodian, Hmong, etc. [||]
- [ ] Other Pacific Islander – Print, for example, Tongan, Fijian, Marshallese, etc. [||]
- [ ] Some other race – Print race or origin. [||]
`}
      />
    )
  }
];

const ipsumQuestion = {
  primary_question: (
    <FormattedMessage
      id="components.SampleCensus.primary_question.10"
      defaultMessage="This is an ipsum question">
    </FormattedMessage>
  ),
  secondary_information: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      <p> Additional text will go here </p>
    </div>
  )
};

const QuestionAnswerBox = ({ title, text }) => (
  <li
    className="c_sample-census__content__answer-box"
  >
    <h3
      className="c_sample-census__content__answer-box__header"
    >
      {title}
    </h3>
    <p>{text}</p>
  </li>
);

QuestionAnswerBox.propTypes = {
  title: PropTypes.element.isRequired,
  text: PropTypes.element.isRequired
};

const CensusQuestionCard = ({ item, className, index }) => (
  <li
    key={index}
    className={classnames(
      'c_sample-census__content__census-questions__card',
      className
    )}
  >
    <header
      className="c_sample-census__content__census-questions__card__header"
    >
      <h2 className="c_sample-census__content__census-questions__card__question">
        <span className="c_sample-census__content__census-questions__card__question__label">
          {`Q${index + 1}: `}
        </span>
        { item.primary_question }
      </h2>
    </header>
    { item.secondary_information }
    <ul
      className="c_sample-census__content__census-questions__card__info-list"
    >
    </ul>
  </li>
);

CensusQuestionCard.propTypes = {
  item: PropTypes.shape({
    primary_question: PropTypes.element.isRequired,
    secondary_information: PropTypes.element.isRequired,
    how_to: PropTypes.element.isRequired,
    info_use: PropTypes.element.isRequired,
    why_answer: PropTypes.element.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default class SampleCensus extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentPosition: 0,
      hohh: true
    };
  }

  render () {
    // REMOVE ME
    let censusQuestions = [];
    for (var i = 0; i < 7; i++) {
      censusQuestions.push(ipsumQuestion);
    }

    const buttonClassName = 'c_sample-census__content__button-row__item__button';
    const censusQuestionsClassName = 'c_sample-census__content__census-questions';
    const hohhButtonClassName = 'c_sample-census__content__hohh-container__button';

    return (
      <main className="c_sample-census">
        <div className="c_headers__goldHeader"></div>
        <div className="c_sample-census__content">
          <h1 className="c_sample-census__content__title">
            <FormattedMessage
              id="components.SampleCensus.title"
              defaultMessage="You should complete the questionnaire as Person 1, if you are responsible for the home. If you live in someone else's home, you will need to provide information to the person completing the questionnaire. "
              description="Sample Census page title"/>
          </h1>
          <p className="c_sample-census__content__subtitle">
            <FormattedMessage
              id="components.SampleCensus.subtitle"
              defaultMessage="See what information will need to complete the questionnaire"
              description="Sample Census page subtitle"/>
          </p>
          <div
            className="c_sample-census__content__hohh-container">
            <button
              className={classnames(
                hohhButtonClassName,
                'c_sample-census__content__hohh-container__button__left',
                {
                  [`${hohhButtonClassName}--active`]: this.state.hohh
                }
              )}
              onClick={() => this.setState({
                hohh: true,
                currentPosition: 0
              })}>
              <h4>
                <FormattedMessage
                  id="components.SampleCensus.hohh_button"
                  defaultMessage="I will answer the census"
                  description="Questions for the Head of Household">
                </FormattedMessage>
              </h4>

            </button>
            <button
              className={classnames(
                hohhButtonClassName,
                'c_sample-census__content__hohh-container__button__right',
                {
                  [`${hohhButtonClassName}--active`]: !this.state.hohh
                }
              )}
              onClick={() => this.setState({
                hohh: false,
                currentPosition: 0
              })}>
              <h4>
                <FormattedMessage
                  id="components.SampleCensus.not_hohh_button"
                  defaultMessage="Someone else will answer the census for me"
                  description="Questions for individuals other than the Head of Household">
                </FormattedMessage>
              </h4>
            </button>
          </div>
          <ul className="c_sample-census__content__button-row">
            { ((this.state.hohh) ? questions : censusQuestions).map((item, index) => (
              <li
                key={index}
                className="c_sample-census__content__button-row__item">
                <button
                  className={classnames(
                    buttonClassName,
                    {
                      [`${buttonClassName}--active`]: index === this.state.currentPosition
                    }
                  )}
                  onClick={() => this.setState({
                    currentPosition: index
                  })}
                >
                  {`Q${index + 1}`}
                </button>
              </li>
            ))}
          </ul>
          <ul className={censusQuestionsClassName}>
            { ((this.state.hohh) ? questions : censusQuestions).map((item, index) => (
              <CensusQuestionCard
                className={
                  this.state.currentPosition === index
                    ? `${censusQuestionsClassName}__card--active`
                    : undefined
                }
                key={index}
                item={item}
                index={index}
                currentPosition={this.state.currentPosition}>
              </CensusQuestionCard>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
