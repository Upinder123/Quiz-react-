import React from 'react';
import Question from './Questions';
import QuestionCount from './QuestionCount';

export default function Quiz(props){


    return(
      
        <div>
          <QuestionCount
          current={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} correct={props.correct}/>
        <ul>
          {props.answerOptions.map((option)=>{
            
            return(
              <li key={option}  
             id="answers" >
            <label >
             <input           
             style={{backgroundColor:props.bgcolor}}
             htmlFor={option}
             type="radio" 
             id={option}
             checked={props.answer===option}
             onChange={props.onAnswerSelected}
             value= {option}
             />{option}
              </label>
              </li>)
          })}
        </ul>
    
          </div>

    )

}