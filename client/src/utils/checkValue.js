import setCount, count from '../pages/Blackjack.jsx'

export default function checkValue(card) {
	
	if (card.value > 9 || card.value < 2) { // function to check for 10, J, Q, K, A by value. SetCount -1
		setCount(count-1)
	}
	if (1 < card.value < 7) {  //function to check for 2,3,4,5,6
		setCount(count+1)
	}
}