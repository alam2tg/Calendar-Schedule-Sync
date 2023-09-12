//keep track of total card point value for the dealer
var dealerSum = 0;

// keep track of total card point value for the user
var yourSum = 0;


// keep track of how many aces dealer and user has
var dealerAceCount = 0;
var yourAceCount = 0; 


// keep track of hidden card of the dealer
var hidden;

var deck;

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
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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
    dealerAceCount += checkAce(hidden);
    
}

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
