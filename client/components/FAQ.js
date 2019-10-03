import React from 'react';
import { FormattedMessage } from 'react-intl';


import './FAQ.scss';
import { arrayExpression } from '@babel/types';

const questions = {
    0:"How can I complete the Census?",
    1:"What types of questions are on the Census?",
    2:"How long will it take to complete?",
    3:"Will the census be available in other languages?",
    4:"I forgot my ID. Can I still take the Census?",
    5:"Will my census information be shared with the government?",
    6:"How do I identify a Census official in person?",
    7:"How can I avoid scams online?",
    8:"How do I report suspected fraud?",
    9:"Do I need to complete the Census?",
    10:"Why is the census important?",
    11:"How will the Census count homeless residents?"
};

/*
class Question extends React.Component{
  render(props){  
    
    //We can _call_ functions inside our render method, but we shouldn't
    //define them here!

    function listQuestion(props){
      return <li>{props.questions.id}</li>
    }

    function QuestionList(props){
      const questions=props.questions;
      const listQuestion = questions.map((questions)=>
      <listQuestion key={props.questions.id}
      value={props.questions.description}/>
      );
      return (
        <ul>
          {listQuestion}
        </ul>
      )
    }
  }
}

renderQuestion(){
   return<Questions value={Questions.Component} />;
 }
*/

class Question extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showWarning: false,
            expand: false, //determines whether the question should be collapsed or expanded
        };

        this.handleToggleClick = this.handleToggleClick.bind(this);
      
    }

    handleToggleClick(){
       this.setState(state=>({showWarning:!state.showWarning}));
    }

    render(){
        //one way to handle the conditional rendering of the question's answer
        let answer;
        if (this.state.expand) {
            answer = (
                <div> Put the answer in here! </div>
            );
        }

        return(
            <li>
                <button 
                    onClick={() => this.setState({expand: !this.state.expand})}>
                    <div>{questions[this.props.position]}</div>
                    { answer }
                </button>
            </li>
        )
    }
}

export default class FAQ extends React.Component {
    render () {
        return (
            <div>
                <header className="c_header" >
                    <FormattedMessage
                    id="components.FAQ.header"
                    description="FAQ page header text"
                    defaultMessage="Frequently Asked Questions"
                    />
                </header>
                <main>
                    <div className="c_rectangle_general_information">
                        <div className="c_gen_information">
                            General Information
                        </div>
                        <ul> 
                            <Question position={0} />
                            <Question position={1} />
                            <Question position={2} />
                            <Question position={3} />
                            <Question position={4} />
                        </ul>
                    </div>
                    <div className="c_rectangle_security">
                        <div className="c_security">
                            Security
                        </div>
                        <ul>
                            <Question position={5} />
                            <Question position={6} />
                            <Question position={7} />
                            <Question position={8} />
                        </ul>
                    </div>
                    <div className="c_rectangle_value"> 
                        <div className="c_value">
                            Value
                        </div>
                        <ul>
                            <Question position={9} />
                            <Question position={10} />
                            <Question position={11} />
                        </ul>
                    </div>
                </main> 
            </div>
        );
    }
}



