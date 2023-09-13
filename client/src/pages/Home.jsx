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
        </div>
        <div className="sub-content">
            <p className="subtitle">New to Blackjack?</p>
            <p className="description">Blackjack, also known as 21, is a popular card game played in casinos and homes worldwide. 
            The objective is simple: players aim to beat the dealer by getting a hand value as close to 21 as possible without exceeding it. 
            Each card has a point value; numbered cards are worth their face value, face cards (kings, queens, and jacks) are worth 10 points, 
            and aces can be worth either 1 or 11 points, depending on what benefits the player&apos;s hand. Players are dealt two cards initially and 
            can choose to &quot;hit&quot; (take another card) to improve their hand or &quot;stand&quot; (keep their current hand). The dealer also receives two 
            cards but only one is face-up. Players can win by having a hand totaling 21, getting a higher hand value than the dealer without going 
            over 21, or having the dealer bust (exceed 21). However, if a player&apos;s hand exceeds 21, they lose, regardless of the dealer&apos;s hand. 
            Blackjack combines strategy and luck, making it an exciting and challenging game for players of all skill levels. LET&apos;S PLAY!</p>
        </div>
      </div>
    );
  };
  
  export default HomePage;