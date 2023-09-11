// blackjack page
// add components for different functionality

import { Link } from "react-router-dom";
import "../styles/Blackjack.css";

const Blackjack = () => {
    return (
        <div className="outline blackjack">
            <h1>Welcome to the Blackjack Page</h1>
            <Link to="/home">
                <h2>Home</h2>
            </Link>

            <section className="game-container outline">
                <div className="outline count-container">
                    <h3>Count: </h3>
                </div>

                <div className="score-container">
                    <div className="outline wins">
                        <h3>Wins:</h3>
                    </div>

                    <div className="outline losses">
                        <h3>Losses: </h3>
                    </div>
                </div>

                <div className="outline deck">
                    <h3>Cards in Deck: </h3>
                </div>

                <div className="outline deal">
                    <button className="deal-button">
                        <h3>Deal New Hand</h3>
                    </button>
                </div>

                <div className="hit-stand-container">
                    <div className="outline hit">
                        <button className="hit-button">
                            <h3>Hit</h3>
                        </button>
                    </div>
                    <div className="outline stand">
                        <button className="stand-button">
                            <h3>Stand</h3>
                        </button>
                    </div>
                </div>

                <div className="outline dealer-cards-container">
                    <h3>Dealer Cards Container</h3>
                </div>
                <div className="outline player-cards">
                    <h3>Player Cards Container</h3>
                </div>
            </section>
        </div>
    );
};

export default Blackjack;
