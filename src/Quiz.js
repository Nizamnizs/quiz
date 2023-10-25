import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import quizData from "./quizData.json";
import "./Quiz.css";

function Quiz() {


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const questions = quizData.questions;
  
    const handleAnswerClick = (isCorrect) => {
      if (selectedOption !== null) return;
  
      setSelectedOption(isCorrect);
  
      if (isCorrect) {
        setScore(score + 1);
      }
    };
  
    const handleNextQuestion = () => {
      if (selectedOption === null) return;
  
      setSelectedOption(null);
  
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    };
  
    const handleRestartQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setSelectedOption(null);
      setQuizCompleted(false);
    };
  
    if (quizCompleted) {
      return (
        <Container className="text-center shadow quiz-container mt-5">
          <h1 className="quiz-title">Quiz Completed!</h1>
          <div ><img style={{height:"300px"}} src="https://i.postimg.cc/LX9KSGZ5/Online-quiz-maker-tool.png" alt="" /></div>
          <h1 className="quiz-score mt-3">Your Score: {score} out of {questions.length}</h1>
          <Button variant="primary" onClick={handleRestartQuiz}>
            Restart Quiz
          </Button>
        </Container>
      );
    }
  






  return (
    
    <Container className="text-center mt-3 quiz-container">
    <h1 className="quiz-title">Indian GK Quiz</h1>
    <div><img style={{height:"250px"}} src="https://i.postimg.cc/BQDhhMXV/quiz-examples-1536x777.png" alt="" /></div>
    <Card className="shadow mt-3 card">
      <Card.Body className="mt-2">
        <h4 className="question-number">Question {currentQuestion + 1}:</h4>
        <h5 className="question-text">{questions[currentQuestion].questionText}</h5>
        <div className="answer-options">
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <Button
              className="answer-button"
              key={index}
              variant={
                selectedOption === option.isCorrect
                  ? "success"
                  : selectedOption === false && option.isCorrect
                  ? "danger"
                  : "outline-primary"
              }
              onClick={() => handleAnswerClick(option.isCorrect)}
              disabled={selectedOption !== null}
            >
              {option.answerText}
            </Button>
          ))}
        </div>
        <Button className="mt-4 w-25 next-button"
          variant="primary"
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          Next Question
        </Button>
      </Card.Body>
    </Card>
  </Container>
);
}





 
export default Quiz