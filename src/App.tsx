import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Name } from './Name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WIP - Coming soon...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Name name={'bob2'} />
      </header>
    </div>
  );
}

export default App;
