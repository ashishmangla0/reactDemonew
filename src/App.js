import React from 'react';
import logo from './logo.svg';
import './App.css';


const handleClick = (e) => {
  console.log(e.target.value);
}

function App() {
  return (
    <div className="App">
      <div className="">
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}

export default App;
