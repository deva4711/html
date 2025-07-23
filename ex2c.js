import React, { useState } from 'react';
import './App.css';

function ButtonEvents() {
  const [message, setMessage] = useState("Click a button to see the action");

  const sayHello = () => {
    setMessage("Hello, User!");
  };

  const resetMessage = () => {
    setMessage("Click a button to see the action");
  };

  return (
    <div className="App">
      <h2>Handling Button Click Events</h2>
      <p>{message}</p>
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={resetMessage}>Reset</button>
    </div>
  );
}

export default ButtonEvents;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ButtonEvents from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonEvents />);
