import React from 'react';
import './App.css';

function App() {
  const name = "deva";
  const course = "B.Tech CSE";
  const greeting = `Hello, my name is ${name} and I am studying ${course}.`;

  return (
    <div className="App">
      <h2>Displaying Text Using String Literals</h2>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
