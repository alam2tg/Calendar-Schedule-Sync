// blackjack page
// add components for different functionality

import cardImages from '../utils/images';
import { Link } from "react-router-dom";

import "../styles/Blackjack.css";
import { useEffect, useState } from "react";
// import PlayerHand from '../components/PlayerHand'

const Blackjack = () => {
	const [dealersHand, setDealersHand] = useState([])
	const [usersHand, setUsersHand] = useState([])
	const [userCount, setUserCount] = useState(0)
	const [dealerCount, setDealerCount] = useState(0)
	const [deck , setDeck] = useState([
		{
			name: '2-C',
			value: 2,
			count: 1,
			image: cardImages.C2,
			},
			{
			name: '3-C',
			value: 3,
			count: 1,
			image: cardImages.C3,
			},
			{
			name: '4-C',
			value: 4,
			count: 1,
			image: cardImages.C4,
			},
			{
			name: '5-C',
			value: 5,
			count: 1,
			image: cardImages.C5,
			},
			{
			name: '6-C',
			value: 6,
			count: 1,
			image: cardImages.C6,
			},
			{
			name: '7-C',
			value: 7,
			count: 0,
			image: cardImages.C7,
			},
			{
			name: '8-C',
			value: 8,
			count: 0,
			image: cardImages.C8,
			},
			{
			name: '9-C',
			value: 9,
			count: 0,
			image: cardImages.C9,
			},
			{
			name: '10-C',
			value: 10,
			count: -1,
			image: cardImages.C10,
			},
			{
			name: 'J-C',
			value: 10,
			count: -1,
			image: cardImages.JC,
			},
			{
			name: 'Q-C',
			value: 10,
			count: -1,
			image: cardImages.QC,
			},
			{
			name: 'K-C',
			value: 10,
			count: -1,
			image: cardImages.KC,
			},
			{
			name: 'A-C',
			value: 11,
			count: -1,
			image: cardImages.AC,
			},
			{
			name: '2-H',
			value: 2,
			count: 1,
			image: cardImages.H2,
			},
			{
			name: '3-H',
			value: 3,
			count: 1,
			image: cardImages.H3,
			},
			{
			name: '4-H',
			value: 4,
			count: 1,
			image: cardImages.H4,
			},
			{
			name: '5-H',
			value: 5,
			count: 1,
			image: cardImages.H5,
			},
			{
			name: '6-H',
			value: 6,
			count: 1,
			image: cardImages.H6,
			},
			{
			name: '7-H',
			value: 7,
			count: 0,
			image: cardImages.H7,
			},
			{
			name: '8-H',
			value: 8,
			count: 0,
			image: cardImages.H8,
			},
			{
			name: '9-H',
			value: 9,
			count: 0,
			image: cardImages.H9,
			},
			{
			name: '10-H',
			value: 10,
			count: -1,
			image: cardImages.H10,
			},
			{
			name: 'J-H',
			value: 10,
			count: -1,
			image: cardImages.JH,
			},
			{
			name: 'Q-H',
			value: 10,
			count: -1,
			image: cardImages.QH,
			},
			{
			name: 'K-H',
			value: 10,
			count: -1,
			image: cardImages.KH,
			},
			{
			name: 'A-H',
			value: 11,
			count: -1,
			image: cardImages.AH,
			},{
			name: '2-S',
			value: 2,
			count: 1,
			image: cardImages.S2,
			},
			{
			name: '3-S',
			value: 3,
			count: 1,
			image: cardImages.S3,
			},
			{
			name: '4-S',
			value: 4,
			count: 1,
			image: cardImages.S4,
			},
			{
			name: '5-S',
			value: 5,
			count: 1,
			image: cardImages.S5,
			},
			{
			name: '6-S',
			value: 6,
			count: 1,
			image: cardImages.S6,
			},
			{
			name: '7-S',
			value: 7,
			count: 0,
			image: cardImages.S7,
			},
			{
			name: '8-S',
			value: 8,
			count: 0,
			image: cardImages.S8,
			},
			{
			name: '9-S',
			value: 9,
			count: 0,
			image: cardImages.S9,
			},
			{
			name: '10-S',
			value: 10,
			count: -1,
			image: cardImages.S10,
			},
			{
			name: 'J-S',
			value: 10,
			count: -1,
			image: cardImages.JS,
			},
			{
			name: 'Q-S',
			value: 10,
			count: -1,
			image: cardImages.QS,
			},
			{
			name: 'K-S',
			value: 10,
			count: -1,
			image: cardImages.KS,
			},
			{
			name: 'A-S',
			value: 11,
			count: -1,
			image: cardImages.AS,
			},{
			name: '2-D',
			value: 2,
			count: 1,
			image: cardImages.D2,
			},
			{
			name: '3-D',
			value: 3,
			count: 1,
			image: cardImages.D3,
			},
			{
			name: '4-D',
			value: 4,
			count: 1,
			image: cardImages.D4,
			},
			{
			name: '5-D',
			value: 5,
			count: 1,
			image: cardImages.D5,
			},
			{
			name: '6-D',
			value: 6,
			count: 1,
			image: cardImages.D6,
			},
			{
			name: '7-D',
			value: 7,
			count: 0,
			image: cardImages.D7,
			},
			{
			name: '8-D',
			value: 8,
			count: 0,
			image: cardImages.D8,
			},
			{
			name: '9-D',
			value: 9,
			count: 0,
			image: cardImages.D9,
			},
			{
			name: '10-D',
			value: 10,
			count: -1,
			image: cardImages.D10,
			},
			{
			name: 'J-D',
			value: 10,
			count: -1,
			image: cardImages.JD,
			},
			{
			name: 'Q-D',
			value: 10,
			count: -1,
			image: cardImages.QD,
			},
			{
			name: 'K-D',
			value: 10,
			count: -1,
			image: cardImages.KD,
			},
			{
			name: 'A-D',
			value: 11,
			count: -1,
			image: cardImages.AD,
			},
	])
	const [dealerSum, setDealerSum] = useState(0);
	const [userSum, setUserSum] = useState(0);
	const [dealerAceCount, setDealerAceCount] = useState(0);
    // let dealerAceCount = 0;
	const [userAceCount, setUserAceCount] = useState(0);
	const [turn, setTurn] = useState(true);
    
    //keep track of total card point value for the dealer
    // let dealerSum = 0;

    // keep track of total card point value for the user
    // let userSum = 0;

    // keep track of how many aces dealer and user has
    // let userAceCount = 0; 

    //need boolean to dictate when the user can be given an additional card when the hit button is clicked and userSum is <=21
    // let canHit = true;

    // keep track of hidden card of the dealer
    // let hidden;
    // let deck;

    // on window load we need the deck to be built
    // window.onload = function() {
    //     cardContainer();
    //     shuffleCards();
    //     // playBlackjack();
    // } 
    
    // create the deck and match each type of card to their number value
    // so from A-C to K-C, A-D to K-D, A-H to K-H and A-S to K-S
    // function cardContainer() {
    //     let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
    //     let types = ["C", "D", "H", "S"];
    //     deck = [];
        
    //     // double for loop to loop through both values and types array
    //     for (let i = 0; i < types.length; i++) {
    //         for (let j = 0; j < values.length; j++) {
    //             // push each card to the deck array
    //             deck.push(values[j] + "-" + types[i]);
    //         }
    //     } 
    // }

    // create a function to shuffle the deck and get a random card
    function shuffleCards() {
		const tempDeck = [...deck]
        for (let i = 0; i < tempDeck.length; i++) {
            let j = Math.floor(Math.random() * tempDeck.length);
            let temp = tempDeck[i];
            tempDeck[i] = tempDeck[j];
            tempDeck[j] = temp;
        }
		setDeck(tempDeck);
    }

	function dealerHit(){
		// add card to hand
		setDealersHand([...dealersHand, deck[0]]);
		//remove card from deck
		const card = deck[0]
		setDeck(deck.slice(1, deck.length));
		/// check aces??
		setDealerSum(dealerSum+ card.value)
		if (card.value ==11) {
			setDealerAceCount(dealerAceCount+1)
		}
		reduceAce()

	}

	function userHit(){
		// add card to hand
		setUsersHand([...usersHand, deck[0]]);
		//remove card from deck
		const card = deck[0]
		setDeck(deck.slice(1, deck.length));
		// update count
		setUserCount(userCount + card.count);
		/// check aces??
		setUserSum(userSum+ card.value)
		if (card.value ==11) {
			setUserAceCount(userAceCount+1)
		}
		reduceAce()

		
	}
	useEffect(() => {
		shuffleCards()
	}, [])

    function playBlackjack() {
		// shuffle the deck
		//deal cards
		setDealersHand(deck.slice(0,2))
		setUsersHand(deck.slice(2,4))
		setDeck(deck.slice(4))

		// user can hit or stand
		// if user stands, setTurn(false) disable hit button, have dealer finish
		// if user hits, have user finish
		// and then dealer turn

        // giving cards to the dealer
        //append card until dealer has card value of 17 or higher
        // while (dealerSum < 17) {

        //     // create img tag 
        //     let cardImg = document.createElement("img");
        //     // get card from the deck
        //     let card = deck.pop();
        //     // set the src of image i.e ./cards/5-D.png   
        //     cardImg.src = "./cards/" + card + ".png"; // 5-D.png
        //     dealerSum += getValue(card);
        //     dealerAceCount += checkAce(card);
        //     //append the card
        //     document.getElementById("dealer-cards").append(cardImg);
        // }

        // //giving cards to the user
        // for (let i = 0; i < 2; i++){
        //     // create img tag 
        //     let cardImg = document.createElement("img");
        //     // get card from the deck
        //     let card = deck.pop();
        //     // set the src of image i.e ./cards/5-D.png
        //     cardImg.src = "./cards" + card + ".png";
        //     userSum += getValue(card);
        //     userAceCount += checkAce(card);
        //     //append the card
        //     document.getElementsByClassName("").append(cardImg);
        // }

        // document.getElementById("hit-button").addEventListener("click", hit)
        // document.getElementById("stand-button").addEventListener("click", stand)
    }

	function endRound() {
		//gets called by bust or dealer stand
		//show results
		//ask to play agin?
	}

	 

    // function dealNewHand() {
    //     // deal one card to player face up, one card to dealer face down, 2nd card to player, 2nd card to dealer face up.
    //     let playerCard1;
    //     let dealerCard1;
    //     let playerCard2;
    //     let dealerCard2;

    //     //if statement that only allows dealing new hand when no game is active

    // }
    // functionality for the hit button
    // function hit(){
    //     if (!canHit) {
    //         return;
    //     }
    //     // create img tag 
    //     let cardImg = document.createElement("img");
    //     // get card from the deck
    //     let card = deck.pop();
    //     // set the src of image i.e ./cards/5-D.png
    //     cardImg.src = "./cards" + card + ".png";
    //     userSum += getValue(card);
    //     userAceCount += checkAce(card);
    //     //append the card
    //     document.getElementById("").append(cardImg);

    //     if (reduceAce(userSum, userAceCount) > 21) {
    //         canHit = false;
    //     }
    // }

    //functionality for when the user stands
    function stand() {
        // dealerSum = reduceAce(dealerSum, dealerAceCount);
        // userSum = reduceAce(userSum, userAceCount);
		// setTurn(false)
		//play the dealers hand

        canHit = false;
        // document.getElementById("").src = "./cards/" + hidden + ".png";


        let message = "";
        //both you and dealer <= 21
        // else if (userSum == dealerSum) {
        //     message = "Stalemate!";
        // }
        // else if (userSum > dealerSum) {
        //     message = "Congratulations, You Win!";
        // }
        // else if (userSum < dealerSum) {
        //     message = "Uh Oh, You Lose!";
        // }

        document.getElementById("").innerText = message;
        document.getElementById("").innerText = dealerSum;
        document.getElementById("").innerText = userSum;
    }

    // function getValue(card) {
    //     // i.e split method allows 5-D to give us an array ["5", "D"]
    //     let data = card.split("-");
    //     // the first index of that array is the value
    //     let value = data[0];


    //     // J, Q, and K have a value of 10 and not a number
    //     // A has a value of 11 and not a number
    //     if (isNaN(value)) {
    //         if (value == "A") {
    //             return 11;
    //         }
    //         return 10;
    //     }
    //     // otherwise return value of digits
    //     return parseInt(value);  
    // }

    // A has a value of 1, if not the value is 0
    // function checkAce(card) {
    //     if (card[0] == "A") {
    //         return 1;
    //     }
    //     return 0;
    // }

    // reduce total sum by changed ace number from 11 to 1 as many times as possible
    function reduceAce() {
        while (userSum > 21 && userAceCount > 0) {
            setUserSum(userSum - 10);
			setUserAceCount(userAceCount - 1);
        }
		while (dealerSum > 21 && dealerAceCount > 0) {
            setDealerSum(dealerSum - 10);
			setDealerAceCount(userAceCount - 1);
        }
    }

    // HTML Template to create blackjack page, style with traditional CSS
    return (
        <div className="outline blackjack">
            
            <h1 className="blackjack-header">Welcome to the Blackjack Page</h1>
            {/* <Link to="/home">
                <h2 className="blackjack-nav">Home</h2>
            </Link> */}

            <section className="game-container">


                <div className="count-container">
					<div className="outline running-count-container">
						<h3>Running Count: {userCount}</h3>
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
                        <button id="hit-button" onClick={userHit}><h3>Hit</h3></button>
                    </div>
                    <div>
                        <button id="stand-button" onClick={stand}><h3>Stand</h3></button>
                    </div>
                    <div>
                        <button id="deal-button" onClick={playBlackjack}><h3>Deal New Hand</h3></button>
                    </div>
                </div>


                <div className="outline dealer-cards-container">

                    {/* <h3>Dealer</h3>

					<div className="dealer-card">
                        <img id={cards.name} src={cards.image}></img>
                    </div>
                </div>
                <div className="outline player-cards-container">
                    <h3>Player</h3> */}

                    <h3>Dealer</h3>
                    <div className="dealer-card">
						{dealersHand.map(() => (
							<img key={deck.name} src={deck.image}/>
							// <p key={card.name}>{card.name}</p>
							))}

                    </div>
                </div>
                <div className="outline player-cards-container">
                    <h3>Player</h3>
                    <div className="player-cards">
						{usersHand.map(() => (
							<p key={deck.name}>{deck.image}</p>
							// <img key={card.name} src={card.image}/>
						))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blackjack;


