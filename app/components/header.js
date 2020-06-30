import React from 'react';
import '../styles/App.css';
export default function header(){

    return(
        <div className="Jumbotron">
            <h1>Git Quiz</h1>
            <div className="logo">
                <img src={require('../images/gitlogo.png')} alt=":("/>
        </div>
      </div>
    )

}