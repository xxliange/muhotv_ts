import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebHome from './core/web/home';
import MHome from './core/mobile/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <WebHome num={1} />
      <MHome string={'string'} number={38} />
    </div>
  );
}

export default App;
