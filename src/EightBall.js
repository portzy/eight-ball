import React, { useState } from 'react';
import './App.css'; // Importing combined CSS file

const EightBall = ({ answers }) => {
  // Define state variables for message and color
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  // Function to handle click event
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  // Function to handle reset
  const handleReset = () => {
    setMessage('Think of a Question');
    setColor('black');
  };

  return (
    <div>
      <div className="eight-ball" onClick={handleClick} style={{ backgroundColor: color }}>
        {message}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default EightBall;
