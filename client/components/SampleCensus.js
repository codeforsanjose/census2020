import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';

import './SampleCensus.scss';

const ipsumQuestion = {
  question: (
    <FormattedMessage
      id="components.SampleCensus.ipsumQuestion.question"
      defaultMessage="This is the first question"
    />
  ),
  secondary_text: (
    <FormattedMessage
      id="components.SampleCensus.ipsumQuestion.secondaryText"
      defaultMessage="More text can go here"
    />
  ),
  how_to: (
    <FormattedMessage
      id="components.SampleCensus.ipsumQuestion.howToAnswer"
      defaultMessage={`Laudantium sit veniam at aut. Ab aut qui tenetur et eos animi. 
Fugit cum deserunt quia pariatur praesentium deleniti. Consequatur doloribus fugit est itaque quis 
enim omnis autem. Voluptatibus ut et recusandae. Perferendis esse incidunt ullam quos praesentium. 
Eligendi quasi magni velit et id in velit. Commodi dolorum aspernatur officiis in autem dignissimos.`}
    />
  ),
  info_use: (
    <FormattedMessage
      id="components.SampleCensus.ipsumQuestion.howIsUsed"
      defaultMessage={`Laudantium sit veniam at aut. Ab aut qui tenetur et eos animi. 
Fugit cum deserunt quia pariatur praesentium deleniti. Consequatur doloribus fugit est itaque quis 
enim omnis autem. Voluptatibus ut et recusandae. Perferendis esse incidunt ullam quos praesentium. 
Eligendi quasi magni velit et id in velit. Commodi dolorum aspernatur officiis in autem dignissimos.`}
    />
  ),
  why_answer: (
    <FormattedMessage
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
        { item.question }
      </h2>
      <p> { item.secondary_text } </p>
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
      currentPosition: 0
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

    return (
      <main className="c_sample-census">
        <div className="c_sample-census__header"></div>
        <div className="c_sample-census__content">
          <h1 className="c_sample-census__content__title">
            <FormattedMessage
              id="components.SampleCensus.title"
              defaultMessage="Preview and learn more about each question on the census"
              description="Sample Census page title">
            </FormattedMessage>
          </h1>
          <p className="c_sample-census__content__subtitle">
            <FormattedMessage
              id="components.SampleCensus.subtitle"
              defaultMessage="Learn how to answer, how that info is used, and why it's important to answer"
              description="Sample Census page subtitle">
            </FormattedMessage>
          </p>
          <ul className="c_sample-census__content__button-row">
            { censusQuestions.map((item, index) => (
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
            { censusQuestions.map((item, index) => (
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
