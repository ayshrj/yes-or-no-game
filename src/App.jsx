// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import {YesAnswerString, NoAnswerString} from './Question'

function convertToArray(inputString) {
  return inputString.split('\n').filter(item => item.trim() !== '');
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const questionsWithYesAnswer = convertToArray(YesAnswerString);
  const questionsWithNoAnswer = convertToArray(NoAnswerString);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        handleNextQuestion();
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  useEffect(() => {
    const allQuestions = [...questionsWithYesAnswer, ...questionsWithNoAnswer];
    const shuffledQuestions = shuffle(allQuestions);
    setSelectedQuestions(shuffledQuestions.slice(0, 10));
    setQuestions(shuffledQuestions);
  }, []);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex, tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;
  };

  const handleAnswer = (answer) => {
    if (answer === (currentIndex < questionsWithYesAnswer.length ? 'yes' : 'no')) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimer(10);
    } else {
      setQuestions([]);
    }
  };

  return (
    <div className="container">
      {questions.length > 0 ? (
        <>
          <h1>Yes or No</h1>
          <div className="timer-and-question">
            <p id="timer">Time left: {timer} seconds</p>
            <p id="question-no">Question {currentIndex + 1} of {selectedQuestions.length}</p>
          </div>
          <p className="question">{selectedQuestions[currentIndex]}</p>
          <div className='yes-or-no'>
            <button onClick={() => handleAnswer('yes')}>Yes</button>
            <button onClick={() => handleAnswer('no')}>No</button>
          </div>
        </>
      ) : (
        <>
          <h1>Quiz Ended</h1>
          <p>Your score: {score}/10</p>
        </>
      )}
    </div>
  );
  
}

export default App;