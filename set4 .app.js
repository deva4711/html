import React from 'react';
import Greeting from './Greeting';
import './App.css';
function App() {
const studentName = "Sai Kiran";
return (
<div className="App">
<h2>Props Example</h2>
<Greeting name={studentName} />
</div>
);
}
export default App;