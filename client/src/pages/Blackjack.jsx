// blackjack page
// add components for different functionality

import {Link} from 'react-router-dom'
import '../styles/Blackjack.css'

const Blackjack = () => {
    return (
        <div className="blackjack">
            <h1>Welcome to the Blackjack Page</h1>
            <Link
            to="/home"
            >
            <h2>Home</h2>
            </Link>
            <div className="">

            </div>
        </div>
    )
}

export default Blackjack