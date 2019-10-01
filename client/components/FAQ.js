import React from 'react';
import { FormattedMessage } from 'react-intl';


import './FAQ.scss';
import { arrayExpression } from '@babel/types';

class Question extends React.Component{
 
  
  render(props){  
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

class Questions extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      showWarning:false,
      
      };
        this.handleToggleClick =
        this.handleToggleClick.bind(this);
      
        }
  
  handleToggleClick(){
       this.setState(state=>({showWarning:!state.showWarning}));
  }
  render(){
   
    return(
  
<li><button onClick={this.handleToggleClick}><div>{Question.QuestionList }</div><div>{this.state.showWarning ? console.log("true"):console.log("false")}</div></button></li>
    )
  }
}

export default class FAQ extends React.Component {
 
 
 renderQuestion(){
   return<Questions value={Questions.Component} />;
 }


  render (){
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
            {this.renderQuestion(0)}
            {this.renderQuestion(1)}
            {this.renderQuestion(2)}
            {this.renderQuestion(3)}
            {this.renderQuestion(4)}
          </ul>
        </div>
          <div className="c_rectangle_security">
            <div className="c_security">
              Security
            </div>
            <ul>
            {this.renderQuestion(5)}
            {this.renderQuestion(6)}
            {this.renderQuestion(7)}
            {this.renderQuestion(8)}
            </ul>
          </div>
          <div className="c_rectangle_value"> 
          <div className="c_value">
            Value
          </div>
          <ul>
          {this.renderQuestion(9)}
          {this.renderQuestion(10)}
          {this.renderQuestion(11)}
                      
          </ul>
          </div>
     
      </main> 
      </div>

    );
  }
}



