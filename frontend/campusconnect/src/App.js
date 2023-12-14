import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '/components/Login';
import Signup from '/components/Signup';

function App() {
  return (
    <Router>
        <div className="App">
        <header className="App-header">
          {/* Search Bar */}
          <div className="search-bar">
            <div className="search-bar-container">
              <input type="text" placeholder="Search..." />
              {/* You can add a search button or any other elements as needed */}
            </div>
          </div>

          {/* Logo */}
          <div className="logo-container">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </div>

          {/* Login/Signup Button */}
          <div className="login-signup">
            {/* Your login/signup button component goes here */}
          </div>
        </header>

        {/* Main Page */}
        <main className="App-main">
          {/* Bulletin Board */}
          <div className="bulletin-board">
            {/* Your notice cards with tags, voting buttons, and content go here */}
          </div>
          
          {/* Sidebar */}
          <aside className="sidebar">
            {/* VVI Links */}
            {/* Your frequently clicked links go here */}
          </aside>
        </main>

        {/* Login and Signup Components */}
        <Login />
        <Signup />
      </div>
    </Router>
  );
}

export default App;