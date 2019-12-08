import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { FormattedMarkdownMessage } from './FormattedMarkdownMessage';

import './SampleCensus.scss';
import './Headers.scss';

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
        style={{
          display: 'flex',
          flexDirection : 'row',
          alignItems: 'center',
        }}>
        <FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.1"
          defaultMessage="Number of people = <textbox>{text}</textbox>"
          description="Supporting text for question 1"
          values={{
            text: "Enter number here",
            textbox: text => (
              <textarea
                value={text}
                readonly="True"
                style={{
                  resize: 'none',
                  height: '2em',
                  border: 'none',
                  borderRadius: '3px',
                  padding: '.25em',
                  backgroundColor: '#2F80ED88',
                  textAlign: 'center',
                }}>
              </textarea>
            )
          }}>
        </FormattedMarkdownMessage>
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
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
        }}>
        { /*<FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.2.1"
          defaultMessage="<italics>{text}</italics>"
          description="Supporting text for question 2"
          values={{
            text: "Mark all that apply",
            italics: text => (
              <i> {text} </i>
            )
          }}>
        </FormattedMarkdownMessage>
     */ }
        <i>
          <FormattedMessage
            id="components.SampleCensus.secondary_information.2.1"
            defaultMessage="Mark all that apply">
          </FormattedMessage>
        </i>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
            <input
              style={{
                margin: '.5em',
              }}
              type="checkbox"
              disabled="True">
            </input>
            <p>
              <FormattedMessage
                id="components.SampleCensus.secondary_information.2.2"
                defaultMessage="Children, related or unrelated, such as newborn babies, grandchildren, or foster children">
              </FormattedMessage>
            </p>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
            <input
              style={{
                margin: '.5em',
              }}
              type="checkbox"
              disabled="True">
            </input>
            <p>
              <FormattedMessage
                id="components.SampleCensus.secondary_information.2.3"
                defaultMessage="Relatives, such as adult children, cousins, or in-laws">
              </FormattedMessage>
            </p>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
            <input
              style={{
                margin: '.5em',
              }}
              type="checkbox"
              disabled="True">
            </input>
            <p>
              <FormattedMessage
                id="components.SampleCensus.secondary_information.2.4"
                defaultMessage="Nonrelatives, such as roommates or live-in babysitters">
              </FormattedMessage>
            </p>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
            <input
              style={{
                margin: '.5em',
              }}
              type="checkbox"
              disabled="True">
            </input>
            <p>
              <FormattedMessage
                id="components.SampleCensus.secondary_information.2.5"
                defaultMessage="People staying here temporarily">
              </FormattedMessage>
            </p>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
            <input
              style={{
                margin: '.5em',
              }}
              type="checkbox"
              disabled="True">
            </input>
            <p>
              <FormattedMessage
                id="components.SampleCensus.secondary_information.2.6"
                defaultMessage="No additional people">
              </FormattedMessage>
            </p>
        </li>
      </ul>
    )
  },
]

const ipsumQuestion = {
  question: (
    <FormattedMessage
      id="components.SampleCensus.ipsumQuestion.question"
      defaultMessage="How many people were living or staring in this house, apartment, or mobile home on April 1, 2020?"
    />
  ),
  secondary_text: (
    <FormattedMessage
      id="components.SampleCensus.ipsumQuestion.secondaryText"
      defaultMessage="This is secondary text"
    />
  ),
  how_to: (
    <FormattedMarkdownMessage
      id="components.SampleCensus.ipsumQuestion.howToAnswer"
      defaultMessage={`Laudantium sit veniam at aut. Ab aut qui tenetur et eos animi.
Fugit cum deserunt quia pariatur praesentium deleniti. Consequatur doloribus fugit est itaque quis
enim omnis autem. Voluptatibus ut et recusandae. Perferendis esse incidunt ullam quos praesentium.
Eligendi quasi magni velit et id in velit. Commodi dolorum aspernatur officiis in autem dignissimos.`}
    />
  ),
  info_use: (
    <FormattedMarkdownMessage
      id="components.SampleCensus.ipsumQuestion.howIsUsed"
      defaultMessage={`Laudantium sit veniam at aut. Ab aut qui tenetur et eos animi.
Fugit cum deserunt quia pariatur praesentium deleniti. Consequatur doloribus fugit est itaque quis
enim omnis autem. Voluptatibus ut et recusandae. Perferendis esse incidunt ullam quos praesentium.
Eligendi quasi magni velit et id in velit. Commodi dolorum aspernatur officiis in autem dignissimos.`}
    />
  ),
  why_answer: (
    <FormattedMarkdownMessage
      id="components.SampleCensus.ipsumQuestion.whyAnswer"
      defaultMessage={`Laudantium sit veniam at aut. Ab aut qui tenetur et eos animi.
Fugit cum deserunt quia pariatur praesentium deleniti. Consequatur doloribus fugit est itaque quis
enim omnis autem. Voluptatibus ut et recusandae. Perferendis esse incidunt ullam quos praesentium.
Eligendi quasi magni velit et id in velit. Commodi dolorum aspernatur officiis in autem dignissimos.`}
    />
  )
};

const indexToSection = {
  0: (
    <FormattedMessage
      id="component.SampleCensus.sectionHeaders.howToAnswer"
      defaultMessage="How to answer this question"
    />
  ),
  1: (
    <FormattedMessage
      id="component.SampleCensus.sectionHeaders.howInfoIsUsed"
      defaultMessage="How is this info used"
    />
  ),
  2: (
    <FormattedMessage
      id="component.SampleCensus.sectionHeaders.whyAnswer"
      defaultMessage="Why answer this question"
    />
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
      { item.secondary_information }
    </header>
    <ul
      className="c_sample-census__content__census-questions__card__info-list"
    >
      { [item.how_to, item.info_use, item.why_answer].map((item, index) => (
        <QuestionAnswerBox
          title={indexToSection[index]}
          text={item}
          key={index}>
        </QuestionAnswerBox>
      ))}
    </ul>
  </li>
);

CensusQuestionCard.propTypes = {
  item: PropTypes.shape({
    question: PropTypes.element.isRequired,
    secondary_text: PropTypes.element.isRequired,
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
      hohh: true,
    };
  }

  render () {
    // REMOVE ME
    let censusQuestions = [];
    for (var i = 0; i < 9; i++) {
      censusQuestions.push(ipsumQuestion);
    }

    const buttonClassName = 'c_sample-census__content__button-row__item__button';
    const censusQuestionsClassName = 'c_sample-census__content__census-questions';
    const hohhButtonClassName = 'c_sample-census__content__hohh-container__button'

    return (
      <main className="c_sample-census">
        <div className="c_headers__goldHeader"></div>
        <div className="c_sample-census__content">
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
              onClick={() => this.setState({hohh:true})}>
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
              onClick={() => this.setState({hohh: false})}>
                <h4>
                  <FormattedMessage
                    id="components.SampleCensus.not_hohh_button"
                    defaultMessage="Someone else will answer the census for me"
                    description="Questions for individuals other than the Head of Household">
                  </FormattedMessage>
                </h4> 
            </button>
          </div>
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
          <ul className="c_sample-census__content__button-row">
            { questions.map((item, index) => (
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
            { questions.map((item, index) => (
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
