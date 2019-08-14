import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeedbackMessage from './feedback-message';
import FeedbackMsg from './feedback-message-function';

function App() {
  let nombre = 'Abel'
  return (
    <div className="App">
      <h1>Primeros pasos con react</h1>
      <FeedbackMessage nombre={nombre} app="LA APP"></FeedbackMessage>
      <hr />
      <FeedbackMsg nombre = {nombre} app="LA MISMA APP"></FeedbackMsg>
    </div>
  );
}

export default App;
