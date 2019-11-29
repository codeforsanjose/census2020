import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMarkdownMessage } from './FormattedMarkdownMessage';

import './FAQ.scss';

const SECTION_KEYS = {
  BASIC: 'basic',
  ABOUT: 'about',
  GETTING_COUNTED: 'gettingCounted',
  LANGUAGE: 'language',
  SAFETY: 'safety'
};

const FAQ_SECTIONS = [
  SECTION_KEYS.BASIC,
  SECTION_KEYS.ABOUT,
  SECTION_KEYS.GETTING_COUNTED,
  SECTION_KEYS.LANGUAGE,
  SECTION_KEYS.SAFETY
];

const HEADERS = {
  [SECTION_KEYS.BASIC]: (
    <FormattedMarkdownMessage
      id="components.FAQ.sections.basics.header"
      defaultMessage="Basics"
    />
  ),
  [SECTION_KEYS.ABOUT]: (
    <FormattedMarkdownMessage
      id="components.FAQ.sections.about.header"
      defaultMessage="About the Survey"
    />
  ),
  [SECTION_KEYS.GETTING_COUNTED]: (
    <FormattedMarkdownMessage
      id="components.FAQ.sections.gettingCounted.header"
      defaultMessage="Getting Counted"
    />
  ),
  [SECTION_KEYS.LANGUAGE]: (
    <FormattedMarkdownMessage
      id="components.FAQ.sections.language.header"
      defaultMessage="Language Access"
    />
  ),
  [SECTION_KEYS.SAFETY]: (
    <FormattedMarkdownMessage
      id="components.FAQ.sections.safety.header"
      defaultMessage="Safety and Privacy"
    />
  )
};

const FAQ_ENTRIES = {
  [SECTION_KEYS.BASIC]: [
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatIsTheCensus.question"
          defaultMessage="What is the census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatIsTheCensus.answer"
          defaultMessage="The United States Census is a national population count that occurs every ten years. It is mandated by the U.S. Constitution."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whyHaveCensus.question"
          defaultMessage="Why do we have a census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whyHaveCensus.answer"
          defaultMessage="The data collected from the Census is used to make sure everyone is equally represented in our political system and that government resources are allocated fairly. The Census data determines how many congressional seats a state receives; how much federal funding will be allocated to local communities for public services and infrastructure needs; and provides a picture of the changing demographics of the country."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whoGetsCounted.question"
          defaultMessage="Who gets counted?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whoGetsCounted.answer"
          defaultMessage="Everyone living in the United States must be counted. Make sure you include everyone living and sleeping in your home on your census survey — regardless of age, gender, relationship to you, or citizenship/immigration status."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whenGetInvitation.question"
          defaultMessage="When should I look for my invitation in the mail?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whenGetInvitation.answer"
          defaultMessage="Starting in March 2020, the U.S. Census Bureau will mail letters to every household in the United States inviting them to respond to the Census survey. Every household should receive a letter requesting that they complete a census form online, by mail, or phone by Census Day on April 1, 2020."
        />
      )
    }
  ],
  [SECTION_KEYS.ABOUT]: [
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatTypesOfQuestions.question"
          defaultMessage="What types of questions are on the 2020 Census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatTypesOfQuestions.answer"
          defaultMessage={`The Census survey will ask basic information about each household, such as the total number of people living at your address, homeownership (own or rent), your phone number, and the names, gender, race/ethnicity of each individual living or staying with you. This information will not be shared with the City or any other local, state or federal agency. For more information on what you will be asked on the Census go to the URL below.
            
{link}`
          }
          values={{
            link: (
              <a href="https://2020census.gov/en/about-questions.html">
                https://2020census.gov/en/about-questions.html
              </a>
            )
          }}
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatIsHouseholdRelationshipQuestion.question"
          defaultMessage={'What is the "Household Relationship Question"?'}
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatIsHouseholdRelationshipQuestion.answer"
          defaultMessage="For the first time, the 2020 Census offers a way for the person filling out the form to indicate a same-sex relationship with another household member. This change is expected to improve national statistics on same-sex couples."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whoCountsAsHousehold.question"
          defaultMessage={'Who counts as a "household?"'}
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whoCountsAsHousehold.answer"
          defaultMessage={`A household consists of all the people who occupy a housing unit, both related family members and all the unrelated people, if any, such as lodgers, foster children, wards, or employees who share the housing. For more information on who to count on your Census form go to the URL below.
          
{link}`
          }
          values={{
            link: (
              <a href="https://2020census.gov/en/who-to-count.html">
                https://2020census.gov/en/who-to-count.html
              </a>
            )
          }}
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howLongDoesItTake.question"
          defaultMessage="How long does it take to complete the census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howLongDoesItTake.answer"
          defaultMessage="The census survey is short and on average takes about 10 minutes or less to complete, depending on the number of people living/sleeping in your home."
        />
      )
    }
  ],
  [SECTION_KEYS.GETTING_COUNTED]: [
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howCanIComplete.question"
          defaultMessage="How can I complete the census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howCanIComplete.answer"
          defaultMessage="There are three ways you can fill out the Census survey: online, by telephone, or via mail. Households can answer the questions on the internet or by phone in English and 12 Non-English languages."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.isFirstTimeAvailableOnline.question"
          defaultMessage="Is this the first time the census survey will be available online?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.isFirstTimeAvailableOnline.answer"
          defaultMessage="Yes! The 2020 Census will be the first Census to be almost entirely digital! The survey will be available in English and 12 Non-English languages."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whenCanFillOut.question"
          defaultMessage="When can I go online to fill out the census survey?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whenCanFillOut.answer"
          defaultMessage="Beginning in mid-March 2020, households will receive an invitation in the mail to participate in the census by visiting the U.S. Census Bureau’s 2020 Census website to fill out the online survey."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.lostCensusId.question"
          defaultMessage="I don’t have or lost my census ID. Can I still complete the census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.lostCensusId.answer"
          defaultMessage="Yes. If you did not receive a census ID code or misplaced it, you can still complete the online census survey by using your mailing address. If you don’t want to respond online, you can call Census Questionnaire Assistance at (###) to complete the survey over the phone."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.noAccessToComputer.question"
          defaultMessage="What if I don’t have access to a computer?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.noAccessToComputer.answer"
          defaultMessage="Households that do not have internet access are encouraged to visit a Census Kiosk to get counted in the 2020 Census. These dedicated computer stations will be available at City library branches, community centers and City Hall. In-person assistance will be available at most locations."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatHappensIfNoResponse.question"
          defaultMessage="What happens if I don’t respond to the Census?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatHappensIfNoResponse.answer"
          defaultMessage="If your household fails to respond online or by telephone, the U.S. Census Bureau will mail several reminders to your household and will ultimately mail you a printed questionnaire—in English and Spanish—for you to return by mail."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatHappensIfNoResponseAtAll.question"
          defaultMessage="What happens if I don’t respond to the census at all?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatHappensIfNoResponseAtAll.answer"
          defaultMessage="If your household does not respond to the Census online, by phone, or via mail by late April 2020, the U.S. Census Bureau will send a Census worker, known as an enumerator, to your address to help you complete the survey. To avoid a visit from a census worker, complete the census survey on your own."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatWillCensusWorkerAsk.question"
          defaultMessage="What will the Census worker ask me?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.whatWillCensusWorkerAsk.answer"
          defaultMessage="The Census worker will ask you all the same survey questions that will appear in the online version of the Census."
        />
      )
    }
  ],
  [SECTION_KEYS.LANGUAGE]: [
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.otherLanguages.question"
          defaultMessage="I don’t speak English. Will the Census survey be available in other languages?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.otherLanguages.answer"
          defaultMessage="Yes. The online survey is available in English and 12 other languages (Spanish, Chinese, Vietnamese, Korean, Russian, Arabic, Tagalog, Polish, French, Haitian Creole, Portuguese, Japanese); phone assistance will also be available in these languages by calling (####). The paper survey is available in English and Spanish. Print and video language guides will be available in 59 Non-English languages, including American Sign Language, Braille, and large print."
        />
      )
    }
  ],
  [SECTION_KEYS.SAFETY]: [
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.isCensusSafe.question"
          defaultMessage="Is the Census safe?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.isCensusSafe.answer"
          defaultMessage="Under federal census law, your responses are kept confidential and can only be used by the U.S. Census Bureau to produce statistics."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.canOtherAgenciesAccess.question"
          defaultMessage="Can another government agency access my census information?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.canOtherAgenciesAccess.answer"
          defaultMessage="No. Title 13 of the U.S. Code requires your information to be kept confidential and prevents your responses from being used against you by any government agency--including law enforcement, the Department of Homeland Security, or US Immigration and Customs Enforcement. All Census Bureau employees take an oath of privacy and are sworn for life to protect the confidentiality of the data. The penalty for unlawful disclosure is a fine of up to $250,000, imprisonment of up to 5 years, or both."
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howToIdentifyCensusWorker.question"
          defaultMessage="How do I identify an official census worker in person?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howToIdentifyCensusWorker.answer"
          defaultMessage={`If someone visits your home to collect a response for the 2020 Census, there are steps you can take to verify their identity:
              
  First, check to make sure that they have a valid ID badge, with their photograph, a Department of Commerce watermark, and an expiration date.
  Note that they may be carrying a Census Bureau phone or a laptop, plus a bag with a Census Bureau logo.
  If you still have questions, call 855-562-2020 and press option 3 to speak with a local Census Bureau representative.
  
  Remember that the U.S. Census Bureau will never ask for:
  
  - Your Social Security number.
  - Your bank account or credit card numbers.
  - Money or donations.
  
  In addition, the Census Bureau will not contact you on behalf of a political party.`
          }
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howToAvoidScams.question"
          defaultMessage="How can I avoid scams online?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howToAvoidScams.answer"
          defaultMessage={`Phishing is the criminal act of trying to get your information by pretending to be an entity that you trust. Phishing emails often direct you to a website that looks real but is fake—and that may be infected with malware.

To help protect yourself from phishing and other scams, please remember that the U.S. Census Bureau will never ask for:

- Your Social Security number.
- Your bank account or credit card numbers.
- Money or donations.

In addition, the Census Bureau will not contact you on behalf of a political party.`
          }
        />
      )
    },
    {
      question: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howToReportFraud.question"
          defaultMessage="How do I report suspected fraud?"
        />
      ),
      answer: (
        <FormattedMarkdownMessage
          id="components.FAQ.entries.howToReportFraud.answer"
          defaultMessage="If you suspect fraud, call {phoneNumber} and press option 3 to speak with a local Census Bureau representative. If it is determined that the visitor who came to your door does not work for the Census Bureau, contact the Police Department (phone ##)."
          values={{
            phoneNumber: (
              <a href="tel:855-562-2020">855-562-2020</a>
            )
          }}
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
        <div className="c_faq__page-header"></div>
        <div className="c_faq__body">
          <header className="c_faq__header" >
            <FormattedMarkdownMessage
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
