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
  <li>
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

const CensusQuestionCard = ({item, index, current_position}) => (
  <li
    key={index}
    style={{
      display: (index === current_position) ? 'flex' : 'none',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: 'white',
      padding: '10px 20px',
      margin: '20px 0 40px 0'
    }}>
    <h2
      style={{
        display: 'inline'
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
        height:'2px',
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
            <h1> Preview and learn more about each question on the census </h1>
            <h2> Learn how to answer, how that info is used, and why it's important to answer </h2>
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


/*
import './SampleCensus.scss';

const SampleCensusCheckbox = ({ checked, readOnly }) => (
  <span className="c_sample-census__form__checkbox-container">
    <input
      type="checkbox"
      checked={checked}
      readOnly={readOnly}
    />
    <span></span>
  </span>
);

SampleCensusCheckbox.propTypes = {
  checked: PropTypes.bool,
  readOnly: PropTypes.bool
};

SampleCensusCheckbox.defaultProps = {
  readOnly: false
};

const SampleCensusTextInput = ({ size }) => (
  <input
    className="c_sample-census__form__input"
    type="text"
    maxLength={size}
    style={{
      '--size': size
    }}
  />
);

SampleCensusTextInput.propTypes = {
  size: PropTypes.number.isRequired
};

export default class SampleCensus extends React.PureComponent {
  render () {
    return (
      <div className="c_sample-census">
        <header>
          <FormattedMessage
            id="components.SampleCensus.header"
            description="Sample Census page header"
            defaultMessage="Sample Census"
          />
        </header>
        <div>
          <div className="c_sample-census__form">
            <div className="c_sample-census__form__preliminary-instructions">
              <h3>
                <FormattedMessage
                  id="components.SampleCensus.form.preliminary-instructions.question1.header"
                  defaultMessage="Before you answer Question 1, count the people living in this house, apartment, or mobile home using our guidelines."
                />
              </h3>
              <ul>
                <li>
                  <FormattedMessage
                    id="components.SampleCensus.form.preliminary-instructions.question1.count-all-people"
                    defaultMessage="Count all people, including babies, who live and sleep here most of the time."
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="components.SampleCensus.form.preliminary-instructions.question1.if-no-one-lives-here"
                    defaultMessage="If no one lives and sleeps at this address most of the time, go online at {websiteUrl} or call the number on page 8"
                    values={{
                      websiteUrl: 'XXXX.XXXX.gov'
                    }}
                  />
                </li>
              </ul>
              <h3>
                <FormattedMessage
                  id="components.SampleCensus.form.preliminary-instructions.includeWithoutPermanent.header"
                  defaultMessage="The census must also include people without a permanent place to live, so:"
                />
              </h3>
              <ul>
                <li>
                  <FormattedMessage
                    id="components.SampleCensus.form.preliminary-instructions.includeWithoutPermanent.include"
                    defaultMessage="If someone who does not have a permanent place to live is staying here on April 1, 2020, count that person."
                  />
                </li>
              </ul>
              <h3>
                <FormattedMessage
                  id="components.SampleCensus.form.preliminary-instructions.dont-include-absent.header"
                  defaultMessage="The Census Bureau also conducts counts in institutions and other places, so:"
                />
              </h3>
              <ul>
                <li>
                  <FormattedMessage
                    id="components.SampleCensus.form.preliminary-instructions.dont-include-absent.college-or-armed-forces"
                    defaultMessage="Do not count anyone living away from here, either at college or in the Armed Forces."
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="components.SampleCensus.form.preliminary-instructions.dont-include-absent.prison"
                    defaultMessage="Do not count anyone in a nursing home, jail, prison, detention facility, etc., on April 1, 2020."
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="components.SampleCensus.form.preliminary-instructions.dont-include-absent.even-if-they-return"
                    defaultMessage="Leave these people off your questionnaire, even if they will return to live here after they leave college, the nursing home, the military, jail, etc. Otherwise, they may be counted twice."
                  />
                </li>
              </ul>
            </div>
            <ol
              className="c_sample-census__form__sections"
            >
              <li>
                <h3>
                  <FormattedMessage
                    id="components.SampleCensus.form.question1.header"
                    defaultMessage="How many people were living or staying in this house,apartment, or mobile home on April 1, 2020?"
                  />
                </h3>
                <div>
                  <FormattedMessage
                    id="components.SampleCensus.form.question1.input-label"
                    defaultMessage="Number of people"
                  /> = <SampleCensusTextInput
                    size={2}
                  />
                </div>
              </li>
              <li>
                <header>
                  <h3 className="c_sample-census__form__question-header">
                    <FormattedMessage
                      id="components.SampleCensus.form.question2.header"
                      defaultMessage="Were there any additional people staying here on April 1, 2020 that you did not include in Question 1?"
                    />
                  </h3>
                  <div className="c_sample-census__form__question-instructions">
                    <FormattedMessage
                      id="components.SampleCensus.form.mark-all"
                      defaultMessage="Mark {markBoxImage} all that apply"
                      values={{
                        markBoxImage: (
                          <SampleCensusCheckbox
                            checked
                            readOnly
                          />
                        )
                      }}
                    />
                  </div>
                </header>

                <ul
                  className="c_sample-census__form__checkbox-list"
                >
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question2.fields.related-children"
                        defaultMessage="Children, related or unrelated, such as newborn babies, grandchildren, or foster children"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question2.fields.related-adults"
                        defaultMessage="Relatives, such as adult children, cousins, or in-laws"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question2.fields.nonrelatives"
                        defaultMessage="Nonrelatives, such as roommates or live-in babysitters"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question2.fields.staying-temporarily"
                        defaultMessage="People staying here temporarily"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question2.fields.no-additional"
                        defaultMessage="No additional people"
                      />
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <header>
                  <h3 className="c_sample-census__form__question-header">
                    <FormattedMessage
                      id="components.SampleCensus.form.question3.header"
                      defaultMessage="Is this house, apartment, or mobile home"
                    />
                  </h3>
                  &mdash;
                  <span className="c_sample-census__form__question-instructions">
                    <FormattedMessage
                      id="components.SampleCensus.form.markOne"
                      defaultMessage="Mark {markBoxImage} ONE box"
                      values={{
                        markBoxImage: (
                          <SampleCensusCheckbox
                            checked
                            readOnly
                          />
                        )
                      }}
                    />
                  </span>
                </header>

                <ul
                  className="c_sample-census__form__checkbox-list"
                >
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question3.fields.mortgage-or-loan"
                        defaultMessage="Owned by you or someone in this household with a mortgage or loan? Include home equity loans."
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question3.fields.without-mortgage-or-loan"
                        defaultMessage="Owned by you or someone in this household free and clear (without a mortgage or loan)?"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question3.fields.rented"
                        defaultMessage="Rented?"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <SampleCensusCheckbox
                      />
                      <FormattedMessage
                        id="components.SampleCensus.form.question3.fields.occupied-without-rent"
                        defaultMessage="Occupied without payment of rent?"
                      />
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <header>
                  <h3 className="c_sample-census__form__question-header">
                    <FormattedMessage
                      id="components.SampleCensus.form.question4.header"
                      defaultMessage="What is your telephone number?"
                    />
                  </h3>
                  <div className="c_sample-census__form__question-instructions">
                    <FormattedMessage
                      id="components.SampleCensus.form.question4.header.phone-disclaimer"
                      defaultMessage="We will only contact you if needed for official Census Bureau business."
                    />
                  </div>
                </header>
                <div>
                  <label>
                    <div>
                      <FormattedMessage
                        id="components.SampleCensus.form.question4.field.label"
                        defaultMessage="Telephone Number"
                      />
                    </div>
                    <SampleCensusTextInput
                      size={3}
                    />
                    &ndash;
                    <SampleCensusTextInput
                      size={3}
                    />
                    &ndash;
                    <SampleCensusTextInput
                      size={4}
                    />
                  </label>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
*/