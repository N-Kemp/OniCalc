import React from 'react';
import './App.css';
import Tool from './components/data.js'
import Tools from './components/Tools.js'

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/> 
      </head>
      <div id="body">
            <div id="header">
                <h1>ONI calculator</h1>
            </div>
            <div id="tools">
                <p>This is where the tools go.</p>
                <Tools />
            </div>
            <div id="calc">
                <p>This is where the calculations go.</p>
            </div>
        </div>
    </div>
  );
}

export default App;