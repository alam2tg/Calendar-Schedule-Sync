// //login page
// When I enter the website for the first time, I want to see a welcome screen
// On the welcome screen, I see buttons to signup and login

// import {Link} from 'react-router-dom';
// import React from 'react';
import "../styles/Landing.css";

const LandingPage = () => {
    return (
      <div className="landing-page">
        <nav className="landing-navbar">
          <ul className="landing-nav-list">
            <li className="landing-nav-item"><a href="/Home">Home</a></li>
            <li className="landing-nav-item"><a href="/Blackjack">Play Blackjack</a></li>
            <li className="landing-nav-item"><a href="/Tutorial">Tutorial</a></li>
          </ul>
        </nav>
        <div className="landing-content">
          <h1 className="landing-title">Welcome to the Landing Page</h1>
          <img src="src/assets/images/black-jack-logo.png" alt="Blackjack Logo" className="logo" />
        </div>
      </div>
    );
  };

export default LandingPage