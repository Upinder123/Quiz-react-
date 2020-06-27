import React from 'react';
import '../styles/App.css'

export default function QuestionCount(props){

    return(
        <div className="questionCount">
             Question {props.current} out of {props.total} 
        </div>
    )
}