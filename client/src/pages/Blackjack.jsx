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
			image: cardImages.CJ,
		},
		{
			name: 'Q-C',
			value: 10,
			count: -1,
			image: cardImages.CQ,
		},
		{
			name: 'K-C',
			value: 10,
			count: -1,
			image: cardImages.CK,
		},
		{
			name: 'A-C',
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
	// // created this function to visualize useState better
	// function drawSingleCard() {
	// 	const singleCard = deck.slice(0)
	// 	setDeck.slice(singleCard)
	// 	return singleCard
	// }

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
		setDealerSum(dealerSum + card.value)
	}

	const [hitButtonVisible, setHitButtonVisible] = useState(false);
	const [standButtonVisible, setStandButtonVisible] = useState(false);
	const [dealButtonVisible, setDealButtonVisible] = useState(true);


	function userHit() {
	//re-arranged format to store a variable within function 
		//remove card from deck
		const card = deck[0]
		console.log(card)
		// if (card.value > 9 || card.value < 2) { // function to check for 10, J, Q, K, A by value. SetCount -1
		// 	setCount(count-1)
		// }
		// if (1 < card.value < 7) {  //function to check for 2,3,4,5,6
		// 	setCount(count+1)
		// }

		// add card to hand
		setUsersHand([...usersHand, card]);

		const updatedDeck = deck.filter(deck => deck !== card)
		console.log(updatedDeck)

		setDeck(updatedDeck); // set new cards in deck
		setUserSum(userSum + card.value)
		

		if (userSum.value > 21) {
			setEndRound(!endRound) //sets gameover to true
			endRoundHandler();
		}
		setHitButtonVisible(false);
		setStandButtonVisible(false);
		setDealButtonVisible(true);
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
		// add card to user
		// store a card value with userHit() User draws 1 card using userHit,
		wait1sec();
		const userCard1 = deck[0]
		checkValue(userCard1)
		console.log(userCard1)
		setUsersHand([...usersHand, userCard1])
		wait1sec();
		

			// setUserSum(...userSum + userCard1.value) - setUserSum is run on userHit, should be adding value already. 
		wait1sec();
		const dealerCard1 = deck[1]
		console.log(dealerCard1)
		setDealersHand([...dealersHand, dealerCard1])
			// setDealerSum(...dealerSum + dealerCard1.value)
		wait1sec();
		const userCard2 = deck[2]
		setUsersHand([...usersHand, userCard2])
		console.log(userCard2)
			// setUserSum(...userSum + userCard2.value)

		// const dealerCard2 = deck[3]
		// dealerCard2.setAttribute("id","dealer-card-2")
		// setDealersHand([...dealersHand, dealerCard2])
		// console.log(dealerCard2)
		// 	// setDealerSum(...dealerSum + dealerCard2.value)


		// setDeck(deck.slice(4, deck.length)); not sure if required, already setting deck in userHit / dealerHit
		console.log(usersHand, dealersHand)
	}

	function endRoundHandler() {
		if (endRound == true) {	//gets called by stateful value
			const usersHandValue = usersHand
			const dealersHandValue = dealersHand
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
		while(dealersHand.value < 17) {
			dealerHit();
		}
		setHitButtonVisible(false);
		setStandButtonVisible(false);
		setDealButtonVisible(true);
		return endRoundHandler();
	}


	// useEffect(() => {
	// 	shuffleCards()
	// }, [])

	function playBlackjack() {
		// shuffle the deck
		wait1sec();
		shuffleCards();

		dealCards();
		setHitButtonVisible(true);
		setStandButtonVisible(true);
		setDealButtonVisible(false);

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
						<h3>Dealer Hand: {dealerSum.value}</h3>
						<h3>Player Hand: {userSum.value}</h3>
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
						<button id="hit-button" onClick={userHit} style={{ display: hitButtonVisible ? 'block' : 'none' }}><h3>Hit</h3></button>
					</div>
					<div>
						<button id="stand-button" onClick={stand} style={{ display: standButtonVisible ? 'block' : 'none' }}><h3>Stand</h3></button>
					</div>
					<div>
						<button id="deal-button" onClick={playBlackjack} style={{ display: dealButtonVisible ? 'block' : 'none' }}><h3>Deal New Hand</h3></button>
					</div>
				</div>


            <div className="outline dealer-cards-container">
					<h3>Dealer Cards</h3>
					<div className="dealer-card">
						{dealersHand.map((deck) => (
							<img key={deck.name} id={deck.name} src={deck.image} value={deck.value} className="playing=card"/>
							// <p key={card.name}>{card.name}</p>
						))}

					</div>
				</div>

				<div className="outline player-cards-container">
					<h3>Player Cards</h3>
					<div className="player-card" >
						{usersHand.map((deck) => (
							<img key={deck.name} id={deck.name} src={deck.image} value={deck.value} className="playing=card" />
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blackjack;

