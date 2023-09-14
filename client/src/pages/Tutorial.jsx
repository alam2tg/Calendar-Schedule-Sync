//tutorial page

import Auth from  "../utils/auth"
import {Link} from 'react-router-dom';
import '../styles/Blackjack.css';

const Tutorial = () => {
    return (
        <>
        { Auth.loggedIn() ? (
            <div className="outline blackjack">
            
            <h1 className="blackjack-header">Welcome to the Blackjack Page</h1>
            <Link to="/home">
                <h2 className="blackjack-nav">Home</h2>
            </Link>

            <section className="game-container">

                <div className="count-container">
                    <div className="outline running-count-container small-container">
                        <h3>Running Count: </h3>
                    </div>
                

                    <div className="outline deck-count-container">
                        <h3>Cards in Deck: </h3>
                    </div>
                </div>

                <div className="score-container ">
                    <header className="outline wins">
                        <h3>Wins:</h3>
                    </header>
                    <header className="outline losses">
                        <h3>Losses: </h3>
                    </header>
                </div>

                {/* <div className="outline deal-container"></div> */}

                <div className="outline buttons-container">
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


                <div className="outline dealer-cards-container">
                    <h3>Dealer</h3>
                </div>
                <div className="outline player-cards-container">
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