// blackjack page
// add components for different functionality

// import { Link } from "react-router-dom";
import "../styles/Blackjack.css";
import PlayerHand from '../components/PlayerHand'

const Blackjack = () => {
    const cards = [
	{
	name: '2-C',
	value: 2,
	count: 1,
	image: '../assets/cards/2-C',
	},
	{
	name: '3-C',
	value: 3,
	count: 1,
	image: '../assets/cards/3-C',
	},
	{
	name: '4-C',
	value: 4,
	count: 1,
	image: '../assets/cards/4-C',
	},
	{
	name: '5-C',
	value: 5,
	count: 1,
	image: '../assets/cards/5-C',
	},
	{
	name: '6-C',
	value: 6,
	count: 1,
	image: '../assets/cards/6-C',
	},
	{
	name: '7-C',
	value: 7,
	count: 0,
	image: '../assets/cards/7-C',
	},
	{
	name: '8-C',
	value: 8,
	count: 0,
	image: '../assets/cards/8-C',
	},
	{
	name: '9-C',
	value: 9,
	count: 0,
	image: '../assets/cards/9-C',
	},
	{
	name: '10-C',
	value: 10,
	count: -1,
	image: '../assets/cards/10-C',
	},
	{
	name: 'J-C',
	value: 10,
	count: -1,
	image: '../assets/cards/J-C',
	},
	{
	name: 'Q-C',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-C',
	},
	{
	name: 'K-C',
	value: 10,
	count: -1,
	image: '../assets/cards/K-C',
	},
	{
	name: 'A-C',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-C',
	},
	{
	name: '2-H',
	value: 2,
	count: 1,
	image: '../assets/cards/2-H',
	},
	{
	name: '3-H',
	value: 3,
	count: 1,
	image: '../assets/cards/3-H',
	},
	{
	name: '4-H',
	value: 4,
	count: 1,
	image: '../assets/cards/4-H',
	},
	{
	name: '5-H',
	value: 5,
	count: 1,
	image: '../assets/cards/5-H',
	},
	{
	name: '6-H',
	value: 6,
	count: 1,
	image: '../assets/cards/6-H',
	},
	{
	name: '7-H',
	value: 7,
	count: 0,
	image: '../assets/cards/7-H',
	},
	{
	name: '8-H',
	value: 8,
	count: 0,
	image: '../assets/cards/8-H',
	},
	{
	name: '9-H',
	value: 9,
	count: 0,
	image: '../assets/cards/9-H',
	},
	{
	name: '10-H',
	value: 10,
	count: -1,
	image: '../assets/cards/10-H',
	},
	{
	name: 'J-H',
	value: 10,
	count: -1,
	image: '../assets/cards/J-H',
	},
	{
	name: 'Q-H',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-H',
	},
	{
	name: 'K-H',
	value: 10,
	count: -1,
	image: '../assets/cards/K-H',
	},
	{
	name: 'A-H',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-H',
	},{
	name: '2-S',
	value: 2,
	count: 1,
	image: '../assets/cards/2-S',
	},
	{
	name: '3-S',
	value: 3,
	count: 1,
	image: '../assets/cards/3-S',
	},
	{
	name: '4-S',
	value: 4,
	count: 1,
	image: '../assets/cards/4-S',
	},
	{
	name: '5-S',
	value: 5,
	count: 1,
	image: '../assets/cards/5-S',
	},
	{
	name: '6-S',
	value: 6,
	count: 1,
	image: '../assets/cards/6-S',
	},
	{
	name: '7-S',
	value: 7,
	count: 0,
	image: '../assets/cards/7-S',
	},
	{
	name: '8-S',
	value: 8,
	count: 0,
	image: '../assets/cards/8-S',
	},
	{
	name: '9-S',
	value: 9,
	count: 0,
	image: '../assets/cards/9-S',
	},
	{
	name: '10-S',
	value: 10,
	count: -1,
	image: '../assets/cards/10-S',
	},
	{
	name: 'J-S',
	value: 10,
	count: -1,
	image: '../assets/cards/J-S',
	},
	{
	name: 'Q-S',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-S',
	},
	{
	name: 'K-S',
	value: 10,
	count: -1,
	image: '../assets/cards/K-S',
	},
	{
	name: 'A-S',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-S',
	},{
	name: '2-D',
	value: 2,
	count: 1,
	image: '../assets/cards/2-D',
	},
	{
	name: '3-D',
	value: 3,
	count: 1,
	image: '../assets/cards/3-D',
	},
	{
	name: '4-D',
	value: 4,
	count: 1,
	image: '../assets/cards/4-D',
	},
	{
	name: '5-D',
	value: 5,
	count: 1,
	image: '../assets/cards/5-D',
	},
	{
	name: '6-D',
	value: 6,
	count: 1,
	image: '../assets/cards/6-D',
	},
	{
	name: '7-D',
	value: 7,
	count: 0,
	image: '../assets/cards/7-D',
	},
	{
	name: '8-D',
	value: 8,
	count: 0,
	image: '../assets/cards/8-D',
	},
	{
	name: '9-D',
	value: 9,
	count: 0,
	image: '../assets/cards/9-D',
	},
	{
	name: '10-D',
	value: 10,
	count: -1,
	image: '../assets/cards/10-D',
	},
	{
	name: 'J-D',
	value: 10,
	count: -1,
	image: '../assets/cards/J-D',
	},
	{
	name: 'Q-D',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-D',
	},
	{
	name: 'K-D',
	value: 10,
	count: -1,
	image: '../assets/cards/K-D',
	},
	{
	name: 'A-D',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-D',
	},
	]
    //keep track of total card point value for the dealer
    let dealerSum = 0;

    // keep track of total card point value for the user
    let userSum = 0;

    // keep track of how many aces dealer and user has
    let dealerAceCount = 0;
    let userAceCount = 0; 

    //need boolean to dictate when the user can be given an additional card when the hit button is clicked and userSum is <=21
    let canHit = true;

    // keep track of hidden card of the dealer
    let hidden;
    let deck;

    // on window load we need the deck to be built
    window.onload = function() {
        cardContainer();
        shuffleCards();
        // playBlackjack();
    } 
    
    // create the deck and match each type of card to their number value
    // so from A-C to K-C, A-D to K-D, A-H to K-H and A-S to K-S
    function cardContainer() {
        let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
        let types = ["C", "D", "H", "S"];
        deck = [card];
        
        // double for loop to loop through both values and types array
        for (let i = 0; i < types.length; i++) {
            for (let j = 0; j < values.length; j++) {
                // push each card to the deck array
                deck.push(values[j] + "-" + types[i]);
            }
        } 
    }

    // create a function to shuffle the deck and get a random card
    function shuffleCards() {
        for (let i = 0; i < deck.length; i++) {
            let j = Math.floor(Math.random() * deck.length);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
    }

    function playBlackjack() {
        // remove the card from the end of the array and make it the hidden card for the dealer
        hidden = deck.pop();
        // increment dealerSum depending on the value of the hidden card
        dealerSum += getValue(hidden);
        // check to see if the hidden card is an ace
        dealerAceCount += checkAce(hidden);

        // giving cards to the dealer
        //append card until dealer has card value of 17 or higher
        while (dealerSum < 17) {

            // create img tag 
            let cardImg = document.createElement("img");
            // get card from the deck
            let card = deck.pop();
            // set the src of image i.e ./cards/5-D.png   
            cardImg.src = "./cards/" + card + ".png"; // 5-D.png
            dealerSum += getValue(card);
            dealerAceCount += checkAce(card);
            //append the card
            document.getElementById("dealer-cards").append(cardImg);
        }

        //giving cards to the user
        for (let i = 0; i < 2; i++){
            // create img tag 
            let cardImg = document.createElement("img");
            // get card from the deck
            let card = deck.pop();
            // set the src of image i.e ./cards/5-D.png
            cardImg.src = "./cards" + card + ".png";
            userSum += getValue(card);
            userAceCount += checkAce(card);
            //append the card
            document.getElementsByClassName("").append(cardImg);
        }

        // document.getElementById("hit-button").addEventListener("click", hit)
        // document.getElementById("stand-button").addEventListener("click", stand)
    }

    function dealNewHand() {
        // deal one card to player face up, one card to dealer face down, 2nd card to player, 2nd card to dealer face up.
        let playerCard1;
        let dealerCard1;
        let playerCard2;
        let dealerCard2;

        //if statement that only allows dealing new hand when no game is active

    }
    // functionality for the hit button
    function hit(){
        if (!canHit) {
            return;
        }
        // create img tag 
        let cardImg = document.createElement("img");
        // get card from the deck
        let card = deck.pop();
        // set the src of image i.e ./cards/5-D.png
        cardImg.src = "./cards" + card + ".png";
        userSum += getValue(card);
        userAceCount += checkAce(card);
        //append the card
        document.getElementById("").append(cardImg);

        if (reduceAce(userSum, userAceCount) > 21) {
            canHit = false;
        }
    }

    //functionality for when the user stands
    function stand() {
        dealerSum = reduceAce(dealerSum, dealerAceCount);
        userSum = reduceAce(userSum, userAceCount);

        canHit = false;
        document.getElementById("").src = "./cards/" + hidden + ".png";


        let message = "";
        if (userSum > 21) {
            message = "Uh Oh, You bust!";
        }
        else if (dealerSum > 21) {
            message = "Congratulations, You Win!";
        }
        //both you and dealer <= 21
        else if (userSum == dealerSum) {
            message = "Stalemate!";
        }
        else if (userSum > dealerSum) {
            message = "Congratulations, You Win!";
        }
        else if (userSum < dealerSum) {
            message = "Uh Oh, You Lose!";
        }

        document.getElementById("").innerText = message;
        document.getElementById("").innerText = dealerSum;
        document.getElementById("").innerText = userSum;
    }

    function getValue(card) {
        // i.e split method allows 5-D to give us an array ["5", "D"]
        let data = card.split("-");
        // the first index of that array is the value
        let value = data[0];


        // J, Q, and K have a value of 10 and not a number
        // A has a value of 11 and not a number
        if (isNaN(value)) {
            if (value == "A") {
                return 11;
            }
            return 10;
        }
        // otherwise return value of digits
        return parseInt(value);  
    }

    // A has a value of 1, if not the value is 0
    function checkAce(card) {
        if (card[0] == "A") {
            return 1;
        }
        return 0;
    }

    // reduce total sum by changed ace number from 11 to 1 as many times as possible
    function reduceAce(userSum, userAceCount) {
        while (userSum > 21 && userAceCount > 0) {
            userSum -= 10;
            userAceCount -= 1;
        }
        return userSum;
    }

    // HTML Template to create blackjack page, style with traditional CSS
    return (
        <div className="outline blackjack">
            
            <h1 className="blackjack-header">Welcome to the Blackjack Page</h1>
            {/* <Link to="/home">
                <h2 className="blackjack-nav">Home</h2>
            </Link> */}

            <section className="game-container">

                <div className="outline running-count-container small-container">
                    <h3>Running Count: </h3>
                </div>

                <div className="outline deck-count-container">
                    <h3>Cards in Deck: </h3>
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
                        <button id="hit-button" onClick={hit}><h3>Hit</h3></button>
                    </div>
                    <div>
                        <button id="stand-button" onClick={stand}><h3>Stand</h3></button>
                    </div>
                    <div>
                        <button id="deal-button" onClick={playBlackjack}><h3>Deal New Hand</h3></button>
                    </div>
                </div>


                <div className="outline dealer-cards-container">

                    <h3>Dealer</h3>
                </div>
                <div className="outline player-cards-container">
                    <h3>Player</h3>

                    <h3>Dealer Cards Container</h3>
                    <div className="dealer-card">
                        <img id={cards.name} src={cards.image}></img>
                    </div>
                </div>
                <div className="outline player-cards-container">
                    <h3>Player Cards Container</h3>
                    <div className="player-cards">
                        <img id={cards.name} src={cards.image}></img>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Blackjack;
