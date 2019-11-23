import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './SampleCensus.scss'

const ipsum = `Laudantium sit veniam at aut. Ab aut qui tenetur et eos animi. 
Fugit cum deserunt quia pariatur praesentium deleniti. Consequatur doloribus fugit est itaque quis 
enim omnis autem. Voluptatibus ut et recusandae. Perferendis esse incidunt ullam quos praesentium. 
Eligendi quasi magni velit et id in velit. Commodi dolorum aspernatur officiis in autem dignissimos.`


const ipsum_question =   {
  question: "This is the first question",
  secondary_text: "More text can go here",
  how_to: ipsum,
  info_use: ipsum,
  why_answer: ipsum,
}

const indexToSection = {
  0: 'How to answer this question',
  1: 'How is this info used',
  2: 'Why answer this question'
}

const QuestionAnswerBox = ({title, text}) => (
  <li
    style={{
      margin: '10px'
    }}>
    <h3
      style={{
        padding: '5px',
        backgroundColor: '#f7cb8a',
        borderRadius: '3px',
        display: 'inline',
      }}>
      { title }
    </h3>
    <p> { text} </p>
  </li>
)

QuestionAnswerBox.PropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const CensusQuestionCard = ({item, index, current_position}) => (
  <li
    key={index}
    className="c_sample-census__content__census-questions__card"
    style={{display: (index === current_position) ? 'flex' : 'none'}}>
    <h2 className="c_sample-census__content__census-questions__card__question"> 
      <span className="c_sample-census__content__census-questions__card__question__label"> 
        { "Q" + (index+1).toString() + ": " }
      </span>
      { item.question }
    </h2>
    <p> { item.secondary_text } </p>
    <div 
        style={{
        width:'100%',
        height:'1px',
        borderRadius: '1px',
        backgroundColor: 'black'
      }}>
    </div>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        listStyle: 'none',
        padding: 0,
      }}>
        { [item.how_to, item.info_use,item.why_answer].map((item,index) => (
          <QuestionAnswerBox
            title={indexToSection[index]}
            text={item}
            key={index}>
          </QuestionAnswerBox>
        ))}
    </ul>
  </li>
)

CensusQuestionCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  current_position: PropTypes.number.isRequired
}

export default class SampleCensus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current_position: 0,
    }
  }

  render() {

    //REMOVE ME
    let census_questions = []
    for (var i=0; i<9; i++) {
      census_questions.push(ipsum_question)
    }

    return (
      <main className="c_sample-census">
          <div className="c_sample-census__header"></div>
          <div className="c_sample-census__content">
            <h1 className="c_sample-census__content__title">
              <FormattedMessage
                 id="components.SampleCenus.title"
                 defaultMessage="Preview and learn more about each question on the census"
                 description="Sample Census page title">
              </FormattedMessage> 
            </h1>
            <p className="c_sample-census__content__subtitle">
              <FormattedMessage
                id="components.SampleCenus.subtitle"
                defaultMessage="Learn how to answer, how that info is used, and why it's important to answer"
                description="Sample Census page subtitle">
              </FormattedMessage>
            </p>
            <ul className="c_sample-census__content__button-row">
              { census_questions.map((item,index) => (
                <li className="c_sample-census__content__button-row__item">
                  <button
                    className="c_sample-census__content__button-row__item__button"
                    onClick={() => this.setState({
                      current_position: index,
                    })}
                    style={{
                      backgroundColor: (index === this.state.current_position) ? '#2f80ed' : 'white',
                      color: (index === this.state.current_position) ? 'white' : 'grey',
                    }}>
                    { "Q" + (index+1).toString() }
                  </button>
                </li>
              ))}
            </ul>
            <ul className="c_sample-census__content__census-questions"> 
              { census_questions.map((item,index) => (
                <CensusQuestionCard
                  item={item}
                  index={index}
                  current_position={this.state.current_position}>
                </CensusQuestionCard>
              ))}
            </ul>
          </div>
      </main>
    )
  }
}