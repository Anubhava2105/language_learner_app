import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Profile from "../Admin/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import questions from "./questions"; // Assuming you have a separate questions.js file

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
  };

  return (
    <div className="container mt-5">
      <header className="mb-4">
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand">
            <h1 className="d-inline">Celestial</h1>
            <h1 className="d-inline"> Challenge</h1>
          </div>
          <NavLink to={Profile} className="profile">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </nav>
      </header>
      <div className="quiz-container">
        <h1 className="text-center">Quiz</h1>
        {showScore ? (
          <div className="text-center">
            <h2>
              You scored {score} out of {questions.length}
            </h2>
            <button className="btn btn-primary" onClick={handleRestart}>
              Play Again
            </button>
          </div>
        ) : (
          <div className="quiz">
            <h2 id="question" className="mb-4">
              {questions[currentQuestionIndex].question}
            </h2>
            <div id="answer-buttons" className="btn-group-vertical">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className="btn btn-outline-primary mb-2"
                  onClick={() => handleAnswerButtonClick(answer.correct)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            <button
              id="next-btn"
              className="btn btn-secondary mt-3"
              onClick={() => handleAnswerButtonClick(null)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
