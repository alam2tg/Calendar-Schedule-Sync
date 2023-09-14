import { Button } from "react-bulma-components"
import { useEffect, useState } from "react"
export default function Blackjack() {
    const [dealerInitalValue, setDealerInitalValue]= useState('')
    const [userIntialCard, setUserIntialCard]= useState('')
    const deck = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'k', 'q', 'j', 'a'
    ]
    const randomNumber = deck[Math.floor(Math.random() * deck.length)]
    function deal() {
        setDealerInitalValue(randomNumber)
        setUserIntialCard(randomNumber)
    }
console.log(dealerInitalValue);
    const newCard = (e) => {
        const userchoice = e.target.value
        if (userchoice === 'hit') {
            const userNewValue = randomNumber
            console.log(userIntialCard, userNewValue);
        } else {
            console.log('player stands', userIntialCard)
        }
    }
    useEffect(() => {
        deal()
    }, [])
    return (
        <>
            <Button value='hit' onClick={newCard}>hit</Button>
            <Button value='stand' onClick={newCard}> stand</Button>
        </>
    )
}