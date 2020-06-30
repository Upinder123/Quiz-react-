import React from 'react';


function Result(props) {
  return (
    <div className="result jumbotron">
     you got {props.marks} out of {props.total}
    </div>
  );
}



export default Result;