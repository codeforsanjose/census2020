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
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.3"
        defaultMessage="Is this house, apartment, or mobile home: ">
      </FormattedMessage>
    ),
    secondary_information: (<ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
        }}>
        <i>
          <FormattedMessage
            id="components.SampleCensus.secondary_information.3.1"
            defaultMessage="Mark ONE box">
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
                id="components.SampleCensus.secondary_information.3.2"
                defaultMessage="Owned by you or someone in this household with a mortgage or loan? Include home equity loans.">
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
                id="components.SampleCensus.secondary_information.3.3"
                defaultMessage="Owned by you or someone in this household free and clear (without a mortgage or loan)?">
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
                id="components.SampleCensus.secondary_information.3.4"
                defaultMessage="Rented?">
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
                id="components.SampleCensus.secondary_information.3.5"
                defaultMessage="Occupied without payment of rent?">
              </FormattedMessage>
            </p>
        </li>
    </ul>
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
      <div
        style={{
          display: 'flex',
          flexDirection : 'row',
          alignItems: 'center',
        }}>
        <FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.4"
          defaultMessage="Telephone Number = <textbox>{text}</textbox>"
          description="Supporting text for question 4"
          values={{
            text: "Enter telephone number here",
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
        id="components.SampleCensus.primary_question.5"
        defaultMessage="Please provide information for each person living here. If there is someone living here who pays the rent or owns this residence, start by listing him or her as Person 1. If the owner or the person who pays the rent does not live here, start by listing any adult living here as Person 1. What is Person 1's name?">
      </FormattedMessage>
    ),
 secondary_information: (
      <div
        style={{
          display: 'flex',
          flexDirection : 'row',
          alignItems: 'center',
        }}>
    <p><i>Print name below.</i></p>
        <FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.5"
          defaultMessage="First Name = <textbox>{text}</textbox> MI = <textbox>{text}</textbox> Last Name(s) = <textbox>{text}</textbox>"
          description="Supporting text for question 5"
          values={{
            text: "",
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
        id="components.SampleCensus.primary_question.6"
        defaultMessage="What is Person 1’s sex?">
      </FormattedMessage>
    ),
    secondary_information: (
   <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
        }}>
        <i>
          <FormattedMessage
            id="components.SampleCensus.secondary_information.6.1"
            defaultMessage="Mark ONE box.">
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
                id="components.SampleCensus.secondary_information.6.2"
                defaultMessage="Male">
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
                id="components.SampleCensus.secondary_information.6.3"
                defaultMessage="Female">
              </FormattedMessage>
            </p>
        </li>
  </ul>
    )
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.7"
        defaultMessage="What is Person 1’s age and what is Person 1’s date of birth?">
      </FormattedMessage>
    ),
    secondary_information: [
      <div
        style={{
          display: 'flex',
          flexDirection : 'row',
          alignItems: 'center',
        }}>
        <p><i>For babies less than 1 year old, do not write the age in months. Write 0 as the age.</i></p>
        <FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.7.1"
          defaultMessage="Age on April 1, 2020 = <textbox>{text}</textbox> years"
          description="Supporting text for question 7"
          values={{
            text: "",
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
      </div>,
      <div
          style={{
            display: 'flex',
            flexDirection : 'row',
            alignItems: 'center',
          }}>
          <FormattedMarkdownMessage
            id="components.SampleCensus.secondary_information.7.2"
            defaultMessage="Month = <textbox>{text}</textbox> Day = <textbox>{text}</textbox> Year of birth = <textbox>{text}</textbox>"
            description="Supporting text for question 7"
            values={{
              text: "",
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
      ]
  },
  {
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.8"
        defaultMessage="Is Person 1 of Hispanic, Latino, or Spanish origin?">
      </FormattedMessage>
    ),
    secondary_information: (
   <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
        }}>
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
                id="components.SampleCensus.secondary_information.8.1"
                defaultMessage="No, not of Hispanic, Latino, or Spanish origin">
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
                id="components.SampleCensus.secondary_information.8.2"
                defaultMessage="Yes, Mexican, Mexican Am., Chicano">
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
                id="components.SampleCensus.secondary_information.8.3"
                defaultMessage="Yes, Puerto Rican">
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
                id="components.SampleCensus.secondary_information.8.4"
                defaultMessage="Yes, Cuban">
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
                id="components.SampleCensus.secondary_information.8.5"
                defaultMessage="Yes, another Hispanic, Latino, or Spanish origin – Print, for example, Salvadoran, Dominicican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc. ">
              </FormattedMessage>
        <FormattedMarkdownMessage
          id="components.SampleCensus.secondary_information.8.6"
          defaultMessage="<textbox>{text}</textbox>"
          description="Supporting text for question 8.5"
          values={{
            text: "",
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
            </p>
        </li>
    </ul>
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
   <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
        }}>
        <i>
          <FormattedMessage
            id="components.SampleCensus.secondary_information.9.1"
            defaultMessage="Mark one or more boxes AND print origins.">
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
                id="components.SampleCensus.secondary_information.9.2"
                defaultMessage="White – Print, for example, German, Irish, English, Italian, Lebanese, Egyptian, etc. [Textbox]">
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
                id="components.SampleCensus.secondary_information.9.3"
                defaultMessage="Black or African Am. – Print, for example, African American, Jamaican, Haitian, Nigerian, Ethiopian, Somali, etc. [Textbox]">
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
                id="components.SampleCensus.secondary_information.9.4"
                defaultMessage="American Indian or Alaska Native – Print name of enrolled or principal tribe(s), for example, Navajo Nation, Blackfeet Tribe, Mayan, Aztec, Native Village of Barrow Inupiat Traditional Government, Nome Eskimo Community, etc. [Textbox]">
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
                id="components.SampleCensus.secondary_information.9.5"
                defaultMessage="Chinese">
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
                id="components.SampleCensus.secondary_information.9.6"
                defaultMessage="Filipino">
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
                id="components.SampleCensus.secondary_information.9.7"
                defaultMessage="Asian Indian">
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
                id="components.SampleCensus.secondary_information.9.8"
                defaultMessage="Vietnamese">
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
                id="components.SampleCensus.secondary_information.9.9"
                defaultMessage="Korean">
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
                id="components.SampleCensus.secondary_information.9.10"
                defaultMessage="Japanese">
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
                id="components.SampleCensus.secondary_information.9.11"
                defaultMessage="Native Hawaiian">
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
                id="components.SampleCensus.secondary_information.9.12"
                defaultMessage="Samoan">
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
                id="components.SampleCensus.secondary_information.9.13"
                defaultMessage="Chamorro">
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
                id="components.SampleCensus.secondary_information.9.14"
                defaultMessage="Other Asian – Print, for example, Pakistani, Cambodian, Hmong, etc. [Textbox]">
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
                id="components.SampleCensus.secondary_information.9.15"
                defaultMessage="Other Pacific Islander – Print, for example, Tongan, Fijian, Marshallese, etc. [Textbox]">
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
                id="components.SampleCensus.secondary_information.9.16"
                defaultMessage="Some other race – Print race or origin. [Textbox]">
              </FormattedMessage>
            </p>
        </li>
    </ul>
    )
  },
]

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
        flexDirection : 'row',
        alignItems: 'center',
      }}>
      <p> Additional text will go here </p>
    </div>
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
    for (var i = 0; i < 7; i++) {
      censusQuestions.push(ipsumQuestion);
    }

    const buttonClassName = 'c_sample-census__content__button-row__item__button';
    const censusQuestionsClassName = 'c_sample-census__content__census-questions';
    const hohhButtonClassName = 'c_sample-census__content__hohh-container__button'

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
                hohh:true,
                currentPosition: 0,
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
                currentPosition: 0,
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
