//login page
When I enter the website for the first time, I want to see a welcome screen
On the welcome screen, I see buttons to signup and login


//homepage 
After logging in, I am presented with home page with a start button and a tutorial button
when I click the tutorial button, then the intro.js tutorial is rendered
As a user, when I click the start button the blackjack page is rendered

//tutorial page

//blackjack page
    //mid gameplay functionality
    //Dealing cards / faceup / facedown logic
    When the blackjack page is opened, I can press the "deal" button to get a fresh hand
    when the deal button is clicked, the game begins and the cards are dealt in this order:

    1. Deal one card to players face up
    2. Deal one card to Dealer facedown

    3. then deal another card to user faceup
    4. then, deal another card to dealer face up

    // User Turn / end my hand
    As a user, when I press the stand button, I am not dealt another card, and  "User turn ends"
    As a user, when I press the hit button, I am dealt another card, and that is added to my hand value
    As a user, I want the choice to hit or stand, if my hand value is 21

    //Dealer Turn
    As a user, when "User Turn Ends", then the dealer displays their facedown card.
    As a user, I want the dealer to be dealt another card if their hand value is under 17
    As a user, I want the "hand to end" when the dealer has a hand value of 17+ or busts 

    // win lose draw logic
    As a user, a hand value of 22+ is considered a bust
    As a user, I want the player and dealer hands to be compared when the hand ends to determine if I win, lose, or draw
        //bust logic
        As a user, if the player has a hand value over 21, it's a "bust", and it's a loss
        As a user, if the dealer "busts", it's a win
        //compare logic
        As a user, if both the player and dealer have a hand value of 21 or less, than we compare hands
        As a user, if the player has a higher hand value that is less than or equal to 21(!bust) than the dealer, it's a win
        As a user, if the player has a lower hand value than the dealer, it's a lose
        As a user, if the player and dealer have the same hand value, then it's a draw

    // score logic - win loss count
    As a user, when I win a hand, the count of the win score goes up by 1
    As a user, when I lose a hand, the count of the lose score goes up by 1
    As a user, when I draw a hand, the win loss count stays the same

    //card value + deck logic 
    As a user, I want a deck of 52 cards, and 4 x 13 unique cards (2 - A)
    As a user, when I card is dealt, a random card is selected from the deck of cards
    As a user, I want 4 of each card (2,3,4,5,6,7,8,9,10,J,Q,K,A) in the deck
    As a user, when a card is drawn/dealt, it is removed from the deck of cards
    As a user, when I see a faceup card with a value of 2-6, the count goes up by 1
    As a user, when I see a faceup card with a value of 7-9, the count stays the same, no increment
    As a user, when I see a faceup card with a value of 10 or higher, the count goes down by 1
    As a user, I want cards 2,3,4,5,6,7,8,9 to have the same value
    As a user, I want the 10, J, Q, K, to have a value of 10 
    As a user, I want the A to have a value of either 1 or 11
    
    //ace logic
        As a user, when an ace is drawn, I want a popup alert to choose if the value is 1 or 11

    // ** STRETCH GOAL ** Pause Button // End Game Button
    As a user, I want to a pause button to be able to pause my game and resume it after logging out.
    As a user, if when I end the game, then my score is stored in "My Scores", and is saved to the Database


when I press the hit button, I am given an additional card





when I click on the signup, 