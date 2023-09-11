

var deck;

window.onload = buildDeck();

// create the deck and match each type of card to their number value
// so from A-C to K-C, A-D to K-D, A-H to K-H and A-S to K-S
function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
    
}