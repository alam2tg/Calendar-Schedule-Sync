//keep track of total card point value for the dealer
let dealerSum = 0;

// keep track of total card point value for the user
let yourSum = 0;


// keep track of how many aces dealer and user has
let dealerAceCount = 0;
let yourAceCount = 0; 

//need boolean to dictate when the user can be given an additional card when the hit button is clicked
let canHit = true;

// keep track of hidden card of the dealer
let hidden;

let deck;

// varriable to allow the user to draw a card while their total sum is less than or equal to 21
//var canHit = true;


// on window load we need the deck to be built
window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
} 

// create the deck and match each type of card to their number value
// so from A-C to K-C, A-D to K-D, A-H to K-H and A-S to K-S
function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // A-C, 2-D, 3-H
    let types = ["C", "D", "H", "S"];
    deck = [];
    
    // double for loop to loop through both values and types array
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            // push each card to the deck array
            deck.push(values[j] + "-" + types[i]);
        }
    }
    
}


// create a function to shuffle the deck and get a random card
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}


function startGame() {
    // remove the card from the end of the array and make it the hidden card for the dealer
    hidden = deck.pop();
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
        cardImg.src = "./cards" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        //append the card
        document.getElementById("").append(cardImg);
    }


    //giving cards to the user
    for (let i = 0; i < 2; i++){
         // create img tag 
         let cardImg = document.createElement("img");
         // get card from the deck
         let card = deck.pop();
         // set the src of image i.e ./cards/5-D.png
         cardImg.src = "./cards" + card + ".png";
         yourSum += getValue(card);
         yourAceCount += checkAce(card);
         //append the card
         document.getElementById("").append(cardImg);
    }

    document.getElementById("").addEventListener("click", hit)
    
    
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
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    //append the card
    document.getElementById("").append(cardImg);
    
}













//functionality for when the user stands
// function stand() {
//     // dealerSum = reduceAce(dealerSum, dealerAceCount);
//     // yourSum = reduceAce(yourSum, yourAceCount);


//     let message = "";
//     if (yourSum > 21) {
//         message = "You Lose!";
//     }
//     else if (dealerSum > 21) {
//         message = "You win!";
//     }
//     //both you and dealer <= 21
//     else if (yourSum == dealerSum) {
//         message = "Tie!";
//     }
//     else if (yourSum > dealerSum) {
//         message = "You Win!";
//     }
//     else if (yourSum < dealerSum) {
//         message = "You Lose!";
//     }

// }













function getValue(card) {
    let data = card.split("-");
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



// function reduceAce(playerSum, playerAceCount) {
//     while (playerSum > 21 && playerAceCount > 0) {
//         playerSum -= 10;
//         playerAceCount -= 1;
//     }
//     return playerSum;
// }