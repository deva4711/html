import React, { useState } from 'react';
import './App.css';
function App() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [submitted, setSubmitted] = useState(false);
const handleSubmit = (event) => {
event.preventDefault();
setSubmitted(true);
};
return (
<div className="App">
<h2>React Form Example</h2>
<form onSubmit={handleSubmit}>
<div>
<label>Name: </label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</div>
<div>
<label>Email: </label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<button type="submit">Submit</button>
</form>
{submitted && (
<div className="output">
<h4>Form Submitted</h4>
<p><strong>Name:</strong> {name}</p>
<p><strong>Email:</strong> {email}</p>
</div>
)}
</div>
);
}
export default App;