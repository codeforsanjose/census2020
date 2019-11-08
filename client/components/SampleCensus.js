import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

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
    style={{
      display: (index === current_position) ? 'flex' : 'none',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: 'white',
      padding: '5vh 5vw',
      margin: '5vh 5vw',
      borderRadius: '3px',
    }}>
    <h2
      style={{
        display: 'inline',
        margin: '0',
      }}> 
      <span
        style={{
          color: '#2f80ed'
        }}> 
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
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          overflow: 'auto',
          backgroundColor: '#f2f2f2',
        }}>
          <div 
            style={{
              width: '100%',
              height: '10vh',
              background: 'linear-gradient(to right, rgb(246,188,137), rgb(246,220,139))'
            }}>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              alignItems: 'center',
            }}>
            <h1
              style={{
                margin: '10px',
                textAlign: 'center',
              }}> 
              Preview and learn more about each question on the census 
            </h1>
            <p
              style={{
                margin: '10px',
              }}> 
              Learn how to answer, how that info is used, and why it's important to answer 
            </p>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                listStyle: 'none',
                flexWrap: 'wrap',
                padding: 0,
              }}>
              { census_questions.map((item,index) => (
                <li
                  style={{
                    height: '3.5em',
                    width: '10%',
                    minWidth: '80px',
                    maxWidth: '100px',
                    margin: '5px',
                  }}>
                  <button
                    onClick={() => this.setState({
                      current_position: index,
                    })}
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: (index === this.state.current_position) ? '#2f80ed' : 'white',
                      color: (index === this.state.current_position) ? 'white' : 'grey',
                      border: 'none',
                      borderRadius: '3px',
                    }}>
                    { "Q" + (index+1).toString() }
                  </button>
                </li>
              ))}
            </ul>
            { census_questions.map((item,index) => (
              <CensusQuestionCard
                item={item}
                index={index}
                current_position={this.state.current_position}>
              </CensusQuestionCard>
            ))}
          </div>
      </main>
    )
  }
}