// src/StartScreen.js
import React from 'react';

function StartScreen({ onStartGame }) {
  return (
    <div className="container">
      <h1>Welcome to the Yes or No Quiz</h1>
      <p>Select the number of questions:</p>
      <button onClick={() => onStartGame(10)}>10 Questions</button>
      <button onClick={() => onStartGame(20)}>20 Questions</button>
      <button onClick={() => onStartGame(30)}>30 Questions</button>
    </div>
  );
}

export default StartScreen;
