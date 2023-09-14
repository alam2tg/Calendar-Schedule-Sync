//tutorial page

import Auth from  "../utils/auth"
// import {Link} from 'react-router-dom';
import '../styles/Blackjack.css';

import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import React, {useState} from 'react';

const Tutorial = () => {
    const [enabled,setEnabled] = useState(true)
    const [initialStep,setInitialStep] = useState(0)
  
    const onExit = () => {
        setEnabled(false)  
    }
    const steps = [
        {
            element: '#count',
            intro: 'This section displays the running count and number of cards left in the deck. These values are vital in the Hi-Lo system, a blackjack card counting technique that assigns values to cards (Ace, King, Queen, Jack, and 10 are -1, 2-6 are +1, 7-9 are 0) and keeps a running count. A higher running count indicates a greater advantage for the player.',
        },
        {
            element: '#action-buttons',
            intro: 'The buttons to hit, stand, and deal a new hand are displayed here. To hit means to be dealt another card. To stay means to keep your current hand. To deal a new hand means to receive two new cards.',
        },
        {
            element: '#dealer',
            intro: 'The dealer\'s hand is displayed here. You can only see one of their cards until you decide to stay. The dealer flips their decond card and either wins or must hit to attempt to beat you. If you bust, you never get to see their second card. If the dealer busts, you win.',
        },
        {
            element: '#player',
            intro: 'Your hand is displayed here. You can see both of your cards and can immediately decide to hit or stay. If you bust, you lose. If you stay and the dealer busts, you win.',
        },
        {
            element: '#score',
            intro: 'Your record of wins and losses is displayed here. GOOD LUCK!',
        }
    ];
    return (
        <>
        { Auth.loggedIn() ? (
        <div className="outline blackjack">
            <Steps
                enabled={enabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
            />
            
            <h1 className="blackjack-header">Welcome to the Blackjack Page</h1>
            {/* <Link to="/home">
                <h2 className="blackjack-nav">Home</h2>
            </Link> */}

            <section className="game-container">

                <div id="count" className="count-container">
                    <div className="outline running-count-container small-container">
                        <h3>Running Count: </h3>
                    </div>
                

                    <div className="outline deck-count-container">
                        <h3>Cards in Deck: </h3>
                    </div>
                </div>

                <div id="score" className="score-container ">
                    <header className="outline wins">
                        <h3>Wins:</h3>
                    </header>
                    <header className="outline losses">
                        <h3>Losses: </h3>
                    </header>
                </div>

                {/* <div className="outline deal-container"></div> */}

                <div id="action-buttons" className="outline buttons-container">
                    <div>
                        <button id="hit-button"><h3>Hit</h3></button>
                    </div>
                    <div>
                        <button id="stand-button"><h3>Stand</h3></button>
                    </div>
                    <div>
                        <button id="deal-button"><h3>Deal New Hand</h3></button>
                    </div>
                </div>


                <div id="dealer" className="outline dealer-cards-container">
                    <h3>Dealer</h3>
                </div>
                <div id="player" className="outline player-cards-container">
                    <h3>Player</h3>
                </div>
            </section>
        </div>
        ) : (
            <div>
                <h2>You must sign-up/login!</h2>
            </div>
        ) }
        </>
        
    );
};

export default Tutorial