{
    primary_question: (
      <FormattedMessage
        id="components.SampleCensus.primary_question.2"
        defaultMessage="Were there any additional people staying here on April 1, 2020 that you did not include in Question 1?">
      </FormattedMessage>
    ),
    secondary_information: (
<<<<<<< HEAD
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
=======
      <div>
        <em>
>>>>>>> cfsjmaster
          <FormattedMessage
            id="components.SampleCensus.secondary_information.9.1"
            defaultMessage="Mark one or more boxes AND print origins.">
          </FormattedMessage>
<<<<<<< HEAD
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