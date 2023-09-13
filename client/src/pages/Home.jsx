// //homepage 
// After logging in, I am presented with home page with a start button and a tutorial button
// when I click the tutorial button, then the intro.js tutorial is rendered
// As a user, when I click the start button the blackjack page is rendered

// import {Link} from 'react-router-dom'
import '../styles/Home.css'

const HomePage = () => {
    return (
      <div className="home-page">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/play-blackjack">Play Blackjack</a></li>
            <li className="nav-item"><a href="/tutorial">Tutorial</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1 className="title">Welcome to the Home Page</h1>
          <p className="subtitle">New to Blackjack?</p>
        </div>
      </div>
    );
  };
  
  export default HomePage;