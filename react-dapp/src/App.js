import React, { useState }  from 'react'

import logo from './logo.svg';
import './App.css';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'


const greeterAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

function App() {

  const [greeting, setGreetingValue] = useState()

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
    
  }
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
    </div>
  );
}

export default App;
