import React, { Component } from 'react';
import Result from './components/Result';
import Quiz from './components/Quiz';
import './styles/App.css';
import quizQuestions from './data/data';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  constructor(props) {
    super(props);  
    this.state = {
      current: 0,
      result:0,
      questionId: 1,
      correct:'',
      bgcolor:'',
      question: '',
      answerOptions: [],
      answer: '',
      marks: 0
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

  }

  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions:quizQuestions[0].answerOptions,
      correct:quizQuestions[0].correct
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.target.value);
    if (this.state.questionId < quizQuestions.length) {

       setTimeout(() => this.setNextQuestion(), 300);
        
      } else {
        
       setTimeout(() => this.getResults(), 300);

      }
  }

  setUserAnswer(answer) {
    this.setState({
      answer: answer
    })
    console.log(answer+" "+this.state.correct)
    if (answer===this.state.correct){
      const marks=this.state.marks+1;
      console.log(answer===this.state.correct)
      this.setState({
        bgcolor:"green",
        marks:marks
      })
      console.log(this.state.marks)
    }
    
    else {
    this.setState({bgcolor:"red"});
    console.log(answer+" "+this.state.correct)
    console.log("incorrect")
    }
  }
 

  setNextQuestion() {
    //console.log(this.state.marks)
    const current = this.state.current + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      current: current,
      questionId: questionId,
      question: quizQuestions[current].question,
      answerOptions: quizQuestions[current].answerOptions,
      correct: quizQuestions[current].correct,
      answer:'',
      bgcolor:''
    });
    console.log(this.state.correct)
  }
 
  getResults() {
    this.setState({
      result:this.state.marks
    });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        bgcolor={this.state.bgcolor}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  
  renderResult() {
    console.log(this.state.marks)
    return (
      <div>
        <Result total={quizQuestions.length} marks={this.state.marks} />
        </div>
      
    );
  }

  render(){  
  return (
    <div className="App">
      <Header/>
      <div className="quiz">
      {this.state.result ? this.renderResult() : this.renderQuiz()}   
      </div> 
      <Footer/>
    </div>
  );
}
}
export default App;
