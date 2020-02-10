import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage, defineMessages } from 'react-intl';

import './SampleCensus.scss';
import './Headers.scss';
import { FormattedMarkdownMessage } from './FormattedMarkdownMessage';
import hohhIcon from '../images/hohhIcon.png';
import nonHohhIcon from '../images/nonHohhIcon.png';

defineMessages({
  preliminaryPrimary1: {
    id: "components.SampleCensus.primary_question.preliminary.1",
    defaultMessage: "This is a placeholder",
    description: "First sample question from the census - prelimiary questions",
  },
  preliminarySecondary1: {
    id: "components.SampleCensus.secondary_information.preliminary.1",
    defaultMessage: "This is a placeholder",
    description: "First sample response field  - prelimiary questions"
  },
  preliminaryExplanation1: {
    id: "components.SampleCensus.explanation.preliminary.1",
    defaultMessage: "This is a placeholder",
    description: "First sample question explanation  - prelimiary questions",
  },
  preliminaryPrimary2: {
    id: "components.SampleCensus.primary_question.preliminary.2",
    defaultMessage: "This is a placeholder",
    description: "Second sample question from the census - prelimiary questions",
  },
  preliminarySecondary2: {
    id: "components.SampleCensus.secondary_information.preliminary.2",
    defaultMessage: "This is a placeholder",
    description: "Second sample response field  - prelimiary questions"
  },
  preliminaryExplanation2: {
    id: "components.SampleCensus.explanation.preliminary.2",
    defaultMessage: "This is a placeholder",
    description: "Second sample question explanation  - prelimiary questions",
  }
  preliminaryPrimary3: {
    id: "components.SampleCensus.primary_question.preliminary.3",
    defaultMessage: "This is a placeholder",
    description: "Third sample question from the census - prelimiary questions",
  },
  preliminarySecondary3: {
    id: "components.SampleCensus.secondary_information.preliminary.3",
    defaultMessage: "This is a placeholder",
    description: "Third sample response field  - prelimiary questions"
  },
  preliminaryExplanation3: {
    id: "components.SampleCensus.explanation.preliminary.3",
    defaultMessage: "This is a placeholder",
    description: "Third sample question explanation  - prelimiary questions",
  }
})

const PRELIMINARY_QUESTIONS = [
  {
    primary: "components.SampleCensus.primary_question.preliminary.1",
    secondary: "components.SampleCensus.secondary_information.preliminary.1",
    explanation: "components.SampleCensus.explanation.preliminary.1",
  },
  {
    primary: "components.SampleCensus.primary_question.preliminary.2",
    secondary: "components.SampleCensus.secondary_information.preliminary.2",
    explanation: "components.SampleCensus.explanation.preliminary.2",
  },
  {
    primary: "components.SampleCensus.primary_question.preliminary.3",
    secondary: "components.SampleCensus.secondary_information.preliminary.3",
    explanation: "components.SampleCensus.explanation.preliminary.3",
  }
]

defineMessages({
  hohhButton: {
    id: "components.SampleCensus.hohh_description",
    defaultMessage: "If you are responsible for the home, you should complete the survey as person one providing infomation for the others you are responsible for.",
    description: "Head of household census description",
  },
  hohhPrimary1: {
    id: "components.SampleCensus.primary_question.1",
    defaultMessage: "How many people were living or staying in this house, apartment, or mobile home on April 1, 2020?",
    description: "First sample question from the census",
  },
  hohhSecondary1: {
    id: "components.SampleCensus.secondary_information.1",
    defaultMessage: `Number of people=[|Enter number here|]`,
    description: "First sample response field"
  },
  hohhExplanation1: {
    id: "components.SampleCensus.explanation.1",
    defaultMessage: `
Include _everyone_ living and sleeping in your home on your census questionnaire — regardless of age, gender, relationship to you, or citizenship/immigration status. Don’t forget to include renters (including students), foster children, wards, or employees.

The Constitution ensures equal representation for all by empowering the people of America through the census process: the counting of everyone living in The United States every ten years.  Your participation ensure your community is represented fully at all levels of governments and receives their fair share of census-guided funding, through programs like Student Loans, SNAP, Medi-Cal, WIC, Housing Vouchers, School Breakfast and Lunch Programs, Special Education, Career Services and Training, Senior Nutrition, and community and transportation development programs.
    `,
    description: "First sample question explanation",
  },
  hohhPrimary2: {
    id: "components.SampleCensus.primary_question.2",
    defaultMessage: "Were there any additional people staying here on April 1, 2020 that you did not include in Question 1?",
    description: "Second sample question from the census",
  },
  hohhSecondary2: {
    id: "components.SampleCensus.secondary_information.2",
    defaultMessage: `
*Mark all that apply*

- [ ] Children, related or unrelated, such as newborn babies, grandchildren, or foster children
- [ ] Relatives, such as adult children, cousins, or in-laws
- [ ] Nonrelatives, such as roommates or live-in babysitters
- [ ] People staying here temporarily
- [ ] No additional people
    `,
    description: "Second sample response field"
  },
  hohhExplanation2: {
    id: "components.SampleCensus.explanation.3",
    defaultMessage: `
The Census Bureau’s goal is to count people once, and only once in the right place according to where they live on Census Day. This question ensures that _everyone_ living at an address is counted, including infants and children under 5, who are one of the largest undercounted groups.  

Help ensure your child or grandchild’s early childhood education program or school meal program is fully funded by including them in your household.
    `,
    description: "Second sample question explanation",
  },
  hohhPrimary3: {
    id: "components.SampleCensus.primary_question.3",
    defaultMessage: "Is this house, apartment, or mobile home: ",
    description: "Third sample question from the census",
  },
  hohhSecondary3: {
    id: "components.SampleCensus.secondary_information.3",
    defaultMessage: `
*Mark ONE box*

- [ ] Owned by you or someone in this household with a mortgage or loan? Include home equity loans.
- [ ] Owned by you or someone in this household free and clear (without a mortgage or loan)?
- [ ] Rented?
- [ ] Occupied without payment of rent?
    `,
    description: "Third sample response field"
  },
  hohhExplanation3: {
    id: "components.SampleCensus.explanation.3",
    defaultMessage: `
The Census Bureau asks about whether a home is owned or rented to create statistics about homeownership and renters. Homeownership rates serve as an indicator of a community’s economic strength.  

The Federal Government, as well as State and Local Governments and businesses, use this information to make planning decisions that can bring new businesses, hospitals, or housing to your neighborhood.
    `,
    description: "Third sample question explanation",
  },
  hohhPrimary4: {
    id: "components.SampleCensus.primary_question.4",
    defaultMessage: "What is your telephone number?",
    description: "Fourth sample question from the census",
  },
  hohhSecondary4: {
    id: "components.SampleCensus.secondary_information.4",
    defaultMessage: `
Telephone Number = [|Enter telephone number here|]
    `,
    description: "Fourth sample response field"
  },
  hohhExplanation4: {
    id: "components.SampleCensus.explanation.4",
    defaultMessage: `
The Census Bureau asks for a phone number in case it needs to contact you. They will _never_ share your number and will _only_ contact you if needed for official Census Bureau business.  
    `,
    description: "Fourth sample question explanation",
  },
  hohhPrimary5: {
    id: "components.SampleCensus.primary_question.5",
    defaultMessage: "Please provide information for each person living here. If there is someone living here who pays the rent or owns this residence, start by listing him or her as Person 1. If the owner or the person who pays the rent does not live here, start by listing any adult living here as Person 1. What is Person 1's name?",
    description: "Fifth sample question from the census",
  },
  hohhSecondary5: {
    id: "components.SampleCensus.secondary_information.5",
    defaultMessage: `
Firstname = [||] Last Name(s) = [||]
    `,
    description: "Fifth sample response field"
  },
  hohhExplanation5: {
    id: "components.SampleCensus.explanation.5",
    defaultMessage: `
The Census Bureau asks for names to ensure everyone in the house is counted. This helps you make sure you have included everyone living and sleeping in your home.  It is easy to skip someone by accident, especially in large households.
       `,
    description: "Fifth sample question explanation",
  },
  hohhPrimary6: {
    id: "components.SampleCensus.primary_question.6",
    defaultMessage: "What is Person 1’s sex?",
    description: "Sixth sample question from the census",
  },
  hohhSecondary6: {
    id: "components.SampleCensus.secondary_information.6",
    defaultMessage: `
*Mark ONE box*

- [ ] Male
- [ ] Female
    `,
    description: "Sixth sample response field"
  },
  hohhExplanation6: {
    id: "components.SampleCensus.explanation.6",
    defaultMessage: `
The Census Bureau asks about the gender of each person for statistical purposes.  The State and Federal government use this information in planning and funding programs, and evaluating programs and policies to ensure they fairly and equitably serve the needs of both men and women.
    `,
    description: "Sixth sample question explanation",
  },
  hohhPrimary7: {
    id: "components.SampleCensus.primary_question.7",
    defaultMessage: "What is Person 1’s age and what is Person 1’s date of birth?",
    description: "Seventh sample question from the census",
  },
  hohhSecondary7: {
    id: "components.SampleCensus.secondary_information.7",
    defaultMessage: `
*For babies less than 1 year olf, do not write the age in months. Write 0 as the age.*

Age on April 1, 2020 = [||] years
Month = [||] Day = [||] Year of birth = [||]
`,
    description: "Seventh sample response field"
  },
  hohhExplanation7: {
    id: "components.SampleCensus.explanation.7",
    defaultMessage: `
The Census Bureau asks about age and date of birth to understand the size and characteristics of different age groups in your neighborhood.  Local, state, tribal, and federal agencies use age information to plan and fund government programs that provide assistance or services for specific age groups, such as children, working-age adults, women of childbearing age, and elders.
       `,
    description: "Seventh sample question explanation",
  },
  hohhPrimary8: {
    id: "components.SampleCensus.primary_question.8",
    defaultMessage: "Is Person 1 of Hispanic, Latino, or Spanish origin?",
    description: "Eigth sample question from the census",
  },
  hohhSecondary8: {
    id: "components.SampleCensus.secondary_information.8",
    defaultMessage: `
- [ ] No, not of Hispanic, Latino, or Spanish origin
- [ ] Yes, Mexican, Mexican Am., Chicano
- [ ] Yes, Puerto Rican
- [ ] Yes, Cuban
- [ ] Yes, another Hispanic, Latino, or Spanish origin – Print, for example, Salvadoran, Dominicican, Colombian, Guatemalan, Spaniard, Ecuadorian, etc.
[||]
    `,
    description: "Eigth sample response field"
  },
  hohhExplanation8: {
    id: "components.SampleCensus.explanation.8",
    defaultMessage: `
The Census Bureau asks whether a person is of Hispanic, Latino or Spanish origin to create statistics about this ethnic group. The information collected in this question is used by Government agencies and community groups in evaluating programs and ensuring compliance with anti-discrimination provisions, such as under the Voting Rights Act and the Civil Rights Act.

**You will need to answer BOTH Question 8 about Hispanic origin and Question 9 about race. For this census, Hispanic origins are not races.**
    `,
    description: "Eigth sample question explanation",
  },
  hohhPrimary9: {
    id: "components.SampleCensus.primary_question.9",
    defaultMessage: "What is Person 1’s race?",
    description: "Ninth sample question from the census",
  },
  hohhSecondary9: {
    id: "components.SampleCensus.secondary_information.9",
    defaultMessage: `
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
    `,
    description: "Ninth sample response field"
  },
  hohhExplanation9: {
    id: "components.SampleCensus.explanation.9",
    defaultMessage: `
The Census Bureau asks about a person's race to create statistics about race and to present other estimates by race groups.  Local, state, tribal, and federal programs use this information, and they are critical factors in the basic research behind numerous policies, particularly for civil rights. Race information is used in planning and funding government programs that provide funds or services for specific groups.
    `,
    description: "Ninth sample question explanation",
  },
})

const HOHH_QUESTIONS = [
  {
    primary: "components.SampleCensus.primary_question.1",
    secondary: "components.SampleCensus.secondary_information.1",
    explanation: "components.SampleCensus.explanation.1"
  },
  {
    primary: "components.SampleCensus.primary_question.2",
    secondary: "components.SampleCensus.secondary_information.2",
    explanation: "components.SampleCensus.explanation.2"
  },
  {
    primary: "components.SampleCensus.primary_question.3",
    secondary: "components.SampleCensus.secondary_information.3",
    explanation: "components.SampleCensus.explanation.3"
  },
  {
    primary: "components.SampleCensus.primary_question.4",
    secondary: "components.SampleCensus.secondary_information.4",
    explanation: "components.SampleCensus.explanation.4"
  },
  {
    primary: "components.SampleCensus.primary_question.5",
    secondary: "components.SampleCensus.secondary_information.5",
    explanation: "components.SampleCensus.explanation.5"
  },
  {
    primary: "components.SampleCensus.primary_question.6",
    secondary: "components.SampleCensus.secondary_information.6",
    explanation: "components.SampleCensus.explanation.6"
  },
  {
    primary: "components.SampleCensus.primary_question.7",
    secondary: "components.SampleCensus.secondary_information.7",
    explanation: "components.SampleCensus.explanation.7"
  },
  {
    primary: "components.SampleCensus.primary_question.8",
    secondary: "components.SampleCensus.secondary_information.8",
    explanation: "components.SampleCensus.explanation.8"
  },
  {
    primary: "components.SampleCensus.primary_question.8",
    secondary: "components.SampleCensus.secondary_information.8",
    explanation: "components.SampleCensus.explanation.8"
  },
];

defineMessages({
  nonHohhButton: {
    id: "components.SampleCensus.nonHohh_description",
    defaultMessage: "If you live in someone else's home, you will need to provide information to the person completing the questionnaire.",
    description: "Non-head of household census description",
  },
  nonHohhPrimary1: {
    id: "components.SampleCensus.primary_question.nonhohh.1",
    defaultMessage: "How many people were living or staying in this house, apartment, or mobile home on April 1, 2020?",
    description: "First sample question from the census - not head of household",
  },
  nonHohhSecondary1: {
    id: "components.SampleCensus.secondary_information.nonhohh.1",
    defaultMessage: `
Number of people=[|Enter number here|]
    `,
    description: "First sample response field  - not head of household"
  },
  nonHohhExplanation1: {
    id: "components.SampleCensus.explanation.nonhohh.1",
    defaultMessage: `
Include _everyone_ living and sleeping in your home on your census questionnaire — regardless of age, gender, relationship to you, or citizenship/immigration status. Don’t forget to include renters (including students), foster children, wards, or employees.

The Constitution ensures equal representation for all by empowering the people of America through the census process: the counting of everyone living in The United States every ten years.  Your participation ensure your community is represented fully at all levels of governments and receives their fair share of census-guided funding, through programs like Student Loans, SNAP, Medi-Cal, WIC, Housing Vouchers, School Breakfast and Lunch Programs, Special Education, Career Services and Training, Senior Nutrition, and community and transportation development programs.
    `,
    description: "First sample question explanation  - not head of household",
  },
  nonHohhPrimary2: {
    id: "components.SampleCensus.primary_question.nonhohh.2",
    defaultMessage: "This is a placeholder",
    description: "Second sample question from the census - not head of household",
  },
  nonHohhSecondary2: {
    id: "components.SampleCensus.secondary_information.nonhohh.2",
    defaultMessage: "This is a placeholder",
    description: "Second sample response field  - not head of household"
  },
  nonHohhExplanation2: {
    id: "components.SampleCensus.explanation.nonhohh.2",
    defaultMessage: "This is a placeholder",
    description: "Second sample question explanation  - not head of household",
  },
  nonHohhPrimary3: {
    id: "components.SampleCensus.primary_question.nonhohh.3",
    defaultMessage: "This is a placeholder",
    description: "Third sample question from the census - not head of household",
  },
  nonHohhSecondary3: {
    id: "components.SampleCensus.secondary_information.nonhohh.3",
    defaultMessage: "This is a placeholder",
    description: "Third sample response field  - not head of household"
  },
  nonHohhExplanation3: {
    id: "components.SampleCensus.explanation.nonhohh.3",
    defaultMessage: "This is a placeholder",
    description: "Third sample question explanation  - not head of household",
  },
  nonHohhPrimary4: {
    id: "components.SampleCensus.primary_question.nonhohh.4",
    defaultMessage: "This is a placeholder",
    description: "Fourth sample question from the census - not head of household",
  },
  nonHohhSecondary4: {
    id: "components.SampleCensus.secondary_information.nonhohh.4",
    defaultMessage: "This is a placeholder",
    description: "Fourth sample response field  - not head of household"
  },
  nonHohhExplanation4: {
    id: "components.SampleCensus.explanation.nonhohh.4",
    defaultMessage: "This is a placeholder",
    description: "Fourth sample question explanation  - not head of household",
  },
  nonHohhPrimary5: {
    id: "components.SampleCensus.primary_question.nonhohh.5",
    defaultMessage: "This is a placeholder",
    description: "Fifth sample question from the census - not head of household",
  },
  nonHohhSecondary5: {
    id: "components.SampleCensus.secondary_information.nonhohh.5",
    defaultMessage: "This is a placeholder",
    description: "Fifth sample response field  - not head of household"
  },
  nonHohhExplanation5: {
    id: "components.SampleCensus.explanation.nonhohh.5",
    defaultMessage: "This is a placeholder",
    description: "Fifth sample question explanation  - not head of household",
  },
  nonHohhPrimary6: {
    id: "components.SampleCensus.primary_question.nonhohh.6",
    defaultMessage: "This is a placeholder",
    description: "Sixth sample question from the census - not head of household",
  },
  nonHohhSecondary6: {
    id: "components.SampleCensus.secondary_information.nonhohh.6",
    defaultMessage: "This is a placeholder",
    description: "Sixth sample response field  - not head of household"
  },
  nonHohhExplanation6: {
    id: "components.SampleCensus.explanation.nonhohh.6",
    defaultMessage: "This is a placeholder",
    description: "Sixth sample question explanation  - not head of household",
  },
  nonHohhPrimary7: {
    id: "components.SampleCensus.primary_question.nonhohh.7",
    defaultMessage: "This is a placeholder",
    description: "Seventh sample question from the census - not head of household",
  },
  nonHohhSecondary7: {
    id: "components.SampleCensus.secondary_information.nonhohh.7",
    defaultMessage: "This is a placeholder",
    description: "Seventh sample response field  - not head of household"
  },
  nonHohhExplanation7: {
    id: "components.SampleCensus.explanation.nonhohh.7",
    defaultMessage: "This is a placeholder",
    description: "Seventh sample question explanation  - not head of household",
  },
})

const NONHOHH_QUESTIONS = [
  {
    primary: "components.SampleCensus.primary_question.nonhohh.1",
    secondary: "components.SampleCensus.secondary_information.nonhohh.1",
    explanation: "components.SampleCensus.explanation.nonhohh.1",
  }
  {
    primary: "components.SampleCensus.primary_question.nonhohh.2",
    secondary: "components.SampleCensus.secondary_information.nonhohh.2",
    explanation: "components.SampleCensus.explanation.nonhohh.2",
  },
  {
    primary: "components.SampleCensus.primary_question.nonhohh.3",
    secondary: "components.SampleCensus.secondary_information.nonhohh.3",
    explanation: "components.SampleCensus.explanation.nonhohh.3",
  },
  {
    primary: "components.SampleCensus.primary_question.nonhohh.4",
    secondary: "components.SampleCensus.secondary_information.nonhohh.4",
    explanation: "components.SampleCensus.explanation.nonhohh.4",
  },
  {
    primary: "components.SampleCensus.primary_question.nonhohh.5",
    secondary: "components.SampleCensus.secondary_information.nonhohh.5",
    explanation: "components.SampleCensus.explanation.nonhohh.5",
  },
  {
    primary: "components.SampleCensus.primary_question.nonhohh.6",
    secondary: "components.SampleCensus.secondary_information.nonhohh.6",
    explanation: "components.SampleCensus.explanation.nonhohh.6",
  },
  {
    primary: "components.SampleCensus.primary_question.nonhohh.7",
    secondary: "components.SampleCensus.secondary_information.nonhohh.7",
    explanation: "components.SampleCensus.explanation.nonhohh.7",
  },
];

const sampleCensusButtons = [
  {
    id: "components.SampleCensus.preliminary_description",
    questions: PRELIMINARY_QUESTIONS,
    icon: "",
  },
  {
    id: "components.SampleCensus.hohh_description",
    questions: HOHH_QUESTIONS,
    icon: hohhIcon,
  },
  {
    id: "components.SampleCensus.nonHohh_description",
    questions: NONHOHH_QUESTIONS,
    icon: nonHohhIcon,
  },
]

const CheckboxList = ({ children }) => {
  return (
    <ul className="c_sample-census__question__checkbox-list">
      {
        React.Children.map(
          children,
          (item, index) => (
            <li key={index}>
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


const hohhDescriptions = {
  hohh: (
    <FormattedMessage
      id="components.SampleCensus.hohh_description"
      defaultMessage="If you are responsible for the home, you should complete the survey as person one providing infomation for the others you are responsible for."
    />
  ),
  nonHohh: (
    <FormattedMessage
      id="components.SampleCensus.nonHohh_description"
      defaultMessage="If you live in someone else's home, you will need to provide information to the person completing the questionnaire."
    />
  )
};

const QuestionAnswerBox = ({ title, text }) => (
  <li className="c_sample-census__content__answer-box">
    <h3 className="c_sample-census__content__answer-box__header">
      {title}
    </h3>
    <div>{text}</div>
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
        <FormattedMessage id={item.primary} />
      </h2>
    </header>
    <FormattedMarkdownMessage id={item.secondary} />
    <h3 className="c_sample-census__content__census-questions__card__explanation-title">
      <FormattedMessage
        id="components.CensusQuestionCard.explanation"
        defaultMessage="Explanation"
      />
    </h3>
    <div className="c_sample-census__content__census-questions__card__explanation">
      <FormattedMarkdownMessage id={item.explanation} />
    </div>
  </li>
);

CensusQuestionCard.propTypes = {
  item: PropTypes.shape({
    primary_question: PropTypes.element.isRequired,
    secondary_information: PropTypes.element.isRequired,
    explanation: PropTypes.element.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default class SampleCensus extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      questionPosition: 0,
      buttonPosition: 0,
    };
  }

  render () {
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
              defaultMessage="Preview each question on the survey"
              description="Sample Census page title"/>
          </h1>
          <p className="c_sample-census__content__subtitle">
            <FormattedMessage
              id="components.SampleCensus.subtitle"
              defaultMessage="Learn if you should answer, how to answer, and how your info is used."
              description="Sample Census page subtitle"/>
          </p>
          <div
            className="c_sample-census__content__hohh-container">
            { sampleCensusButtons.map( (item,index) => (
              <button
                key={index}
                className={classnames(
                  hohhButtonClassName,
                  'c_sample-census__content__hohh-container__button__left',
                  {
                    [`${hohhButtonClassName}--active`]: (index === this.state.buttonPosition)
                  }
                )}
                onClick={() => this.setState({
                  buttonPosition: index,
                  currentPosition: 0,
                })}>
                <div className="c_sample-census__content__hohh-container__button__icon-container">
                  <img
                    src={item.icon}
                    alt="Head of Household Icon"
                    className={classnames(
                      'c_sample-census__content__hohh-container__button__icon-container__hohh-icon'
                    )}
                  />
                </div>
                <p>
                  <FormattedMessage id={item.question} />
                </p>
              </button>
            ))}
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
              <img
                src={nonHohhIcon}
                alt="Head of Household Icon"
                className="c_sample-census__content__hohh-container__button__nonhohh-icon"
              />
              <p>
                <FormattedMessage
                  id="components.SampleCensus.not_hohh_button"
                  defaultMessage="Someone else will answer the census for me"
                  description="Questions for individuals other than the Head of Household">
                </FormattedMessage>
              </p>
            </button>
          </div>
          <p className="c_sample-census__content__hohh-description">
            { (this.state.hohh) ? hohhDescriptions.hohh : hohhDescriptions.nonHohh }
          </p>
          <ul className="c_sample-census__content__button-row">
            { ((this.state.hohh) ? HOHH_QUESTIONS : NONHOHH_QUESTIONS).map((item, index) => (
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
            { ((this.state.hohh) ? HOHH_QUESTIONS : NONHOHH_QUESTIONS).map((item, index) => (
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
