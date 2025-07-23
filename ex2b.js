import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2>Counter using Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
