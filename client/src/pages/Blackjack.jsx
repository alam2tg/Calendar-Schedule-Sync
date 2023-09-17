// blackjack page
// add components for different functionality

import cardImages from '../utils/images';


import { Link } from "react-router-dom";
import "../styles/Blackjack.css";
import { useEffect, useState } from "react";
// import PlayerHand from '../components/PlayerHand'

const Blackjack = () => {

	// represents cards
	const [usersHand, setUsersHand] = useState([])   // holds cards
	const [dealersHand, setDealersHand] = useState([])  

	//represents value of hand
	const [userSum, setUserSum] = useState(0);  // use spread operator to clone cards, get value
	const [dealerSum, setDealerSum] = useState(0);

	//represent the "count" ( 2-6=(1) , 7-9=(0), 10-A=(-1))
	const [count, setCount] = useState(0) 
	//create function that analyzes value, then changes counter based on value

	//not sure if this needs to be tracked
	const [endRound, setEndRound] = useState(false);

	// represents the cards in deck as an array
	const [deck, setDeck] = useState([
		{
			name: '2-Clubs',
			value: 2,
			count: 1,
			image: cardImages.C2,
		},
		{
			name: '3-Clubs',
			value: 3,
			count: 1,
			image: cardImages.C3,
		},
		{
			name: '4-Clubs',
			value: 4,
			count: 1,
			image: cardImages.C4,
		},
		{
			name: '5-Clubs',
			value: 5,
			count: 1,
			image: cardImages.C5,
		},
		{
			name: '6-Clubs',
			value: 6,
			count: 1,
			image: cardImages.C6,
		},
		{
			name: '7-Clubs',
			value: 7,
			count: 0,
			image: cardImages.C7,
		},
		{
			name: '8-Clubs',
			value: 8,
			count: 0,
			image: cardImages.C8,
		},
		{
			name: '9-Clubs',
			value: 9,
			count: 0,
			image: cardImages.C9,
		},
		{
			name: '10-Clubs',
			value: 10,
			count: -1,
			image: cardImages.C10,
		},
		{
			name: 'J-Clubs',
			value: 10,
			count: -1,
			image: cardImages.CJ,
		},
		{
			name: 'Q-Clubs',
			value: 10,
			count: -1,
			image: cardImages.CQ,
		},
		{
			name: 'K-Clubs',
			value: 10,
			count: -1,
			image: cardImages.CK,
		},
		{
			name: 'A-Clubs',
			value: 11,
			count: -1,
			image: cardImages.CA,
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
			image: cardImages.HJ,
		},
		{
			name: 'Q-H',
			value: 10,
			count: -1,
			image: cardImages.HQ,
		},
		{
			name: 'K-H',
			value: 10,
			count: -1,
			image: cardImages.HK,
		},
		{
			name: 'A-H',
			value: 11,
			count: -1,
			image: cardImages.HA,
		}, {
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
			image: cardImages.SJ,
		},
		{
			name: 'Q-S',
			value: 10,
			count: -1,
			image: cardImages.SQ,
		},
		{
			name: 'K-S',
			value: 10,
			count: -1,
			image: cardImages.SK,
		},
		{
			name: 'A-S',
			value: 11,
			count: -1,
			image: cardImages.SA,
		}, {
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
			image: cardImages.DJ,
		},
		{
			name: 'Q-D',
			value: 10,
			count: -1,
			image: cardImages.DQ,
		},
		{
			name: 'K-D',
			value: 10,
			count: -1,
			image: cardImages.DK,
		},
		{
			name: 'A-D',
			value: 11,
			count: -1,
			image: cardImages.DA,
		},
	])

	//will represent when it's the user's turn
	// const [turn, setTurn] = useState(true);
	const [winCount, setWinCount] = useState(0)
	const [loseCount ,setLoseCount] = useState(0)

	

	// function to wait 1 second
	function wait1sec() {
		setTimeout(()=> {
			console.log('Delayed for 1 second.');
		}, 1000)
	}

	const handleIncrement = () => {
		setCount(count + 1);
	};
  
	// Helper function to handle when the user clicks decrement
	// Does not allow count value to go negative
	const handleDecrement = () => {
		setCount((count - 1));
	}

	function checkSum() {
		if (dealerSum > 21) {
			setLoseCount(loseCount + 1) 
			setEndRound(!endRound) //sets gameover to true
			endRoundHandler();
			}
		}
	
	

	// create a function to shuffle the deck and get a random card
	function shuffleCards() {
		const tempDeck = [...deck]
		for (let i = tempDeck.length -1; i > 0; i--) {
			let j = Math.floor(Math.random() * (tempDeck.length+1));
			let temp = tempDeck[i];
			tempDeck[i] = tempDeck[j];
			tempDeck[j] = temp;
		}
		setDeck(tempDeck);
	}

	function dealerHit() {
		//rearranged code, stored drawn card into variable for accuracy
		// add card to hand
		const card = deck[0]
		console.log(card)

		if (card.value > 9 || card.value < 2) { // function to check for 10, J, Q, K, A by value. SetCount -1
			setCount(count-1)
		}
		if (1 < card.value < 7) {  //function to check for 2,3,4,5,6
			setCount(count+1)
		}

		setDealersHand([...dealersHand, card]);
		//remove card from deck
		const updatedDeck = deck.filter(deck => deck !== card)

		console.log(updatedDeck)

		setDeck(updatedDeck);
		/// check aces??
		setDealerSum(dealerSum + card.value);

	}


	function userHit() {
	//re-arranged format to store a variable within function 
		//remove card from deck
		const card = deck[0]
		console.log(card)

		checkValue(card)
		// add card to hand
		setUsersHand([...usersHand, card]);
		setUserSum(userSum + card.value)

		const updatedDeck = deck.filter(deck => deck !== card)
		console.log(updatedDeck)

		setDeck(updatedDeck); // set new cards in deck
		checkSum()
	}

	function checkValue(card) {
		if (card.value > 9 || card.value < 2) { // function to check for 10, J, Q, K, A by value. SetCount -1
			setCount(count-1)
		}
		if (1 < card.value < 7) {  //function to check for 2,3,4,5,6
			setCount(count+1)
		}
	}

	function dealCards() {   //function to deal one card user, one dealer, one user, one dealer card face down (make card hidden in html css)
	// add card to user // store stateful values as they populate
		const userCard1 = deck[0]		
		checkValue(userCard1)
		console.log(userCard1)
		setUsersHand([...usersHand, userCard1])
		setUserSum(userSum + userCard1.value)

		const dealerCard1 = deck[1]

		console.log(dealerCard1)
		setDealersHand([...dealersHand, dealerCard1])
		setDealerSum(dealerSum + dealerCard1.value)

		const userCard2 = deck[2]

		setUsersHand([...usersHand, userCard2])
		setUserSum(userSum + userCard2.value)
		console.log(userCard2)
		console.log(usersHand, dealersHand)
	}

	function endRoundHandler() {
		if (endRound == true) {	//gets called by stateful value
			const usersHandValue = userSum
			const dealersHandValue = dealerSum
			if (usersHandValue > 21) {
				setLoseCount(loseCount+1)
				alert("Tough luck!")
			} 
			else if (dealersHandValue > 21) {
				setWinCount(winCount+1)
				alert("Well played!")
			}
			
			else if (usersHandValue > dealersHandValue) {
				setWinCount(winCount+1)
				alert("Nice hand!")

			}
			else if (usersHandValue < dealersHandValue) {
				setLoseCount(loseCount+1)
				alert("Dealers win hands too!")
			}
			else {
				return alert("It's a draw!")
			}
			
		}
	}

	function stand() {
		if (!endRound)
		dealerHit();

		while(dealerSum.value < 17) {
			dealerHit();
		}
		return endRoundHandler();
	}

	// useEffect(() => {
	// 	shuffleCards()
	// }, [])

	function playBlackjack() {
		// shuffle the deck

		shuffleCards();
		dealCards();

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
						<h3>Running Count: {count}</h3>
					</div>
					<div className="outline deck-count-container">
						<h3>Dealer Hand: {dealerSum}</h3>
						<h3>Player Hand: {userSum}</h3>
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
					<div><button id="hit-button" onClick={userHit}><h3>Hit</h3></button></div>
					<div><button id="stand-button" onClick={stand}><h3>Stand</h3></button></div>
					<div><button id="deal-button" onClick={playBlackjack}><h3>Deal New Hand</h3></button></div>
				</div>

            <div className="outline dealer-cards-container">
					<h3>Dealer Cards</h3>
					<div className="dealer-card">
						{dealersHand.map((deck) => (
							<img key={deck.name} 
							id={deck.name} 
							src={deck.image} 
							value={deck.value} 
							className="playing=card"/>
						))}
					</div>
				</div>

				<div className="outline player-cards-container">
					<h3>Player Cards</h3>
					<div className="player-card" >
						{usersHand.map((deck) => (
							<img key={deck.name} 
							id={deck.name} 
							src={deck.image} 
							value={deck.value} 
							className="playing=card" />
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blackjack;

