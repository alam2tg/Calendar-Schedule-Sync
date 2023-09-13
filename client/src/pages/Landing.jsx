// //login page
// When I enter the website for the first time, I want to see a welcome screen
// On the welcome screen, I see buttons to signup and login

// import {Link} from 'react-router-dom';
// import React from 'react';
import "../styles/Landing.css";

const LandingPage = () => {
    return (
      <div className="landing-page">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/play-blackjack">Play Blackjack</a></li>
            <li className="nav-item"><a href="/tutorial">Tutorial</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1 className="title">Welcome to the Landing Page</h1>
          <img src="/path/to/your/logo.png" alt="Blackjack Logo" className="logo" />
        </div>
      </div>
    );
  };

export default LandingPage