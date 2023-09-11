// blackjack page
// add components for different functionality

import {Link} from 'react-router-dom'

const Blackjack = () => {
    return (
        <div>
            <h1>Welcome to the Blackjack Page</h1>
            <Link
            to="/home"
            >
            <h2>Home</h2>
            </Link>
        </div>
    )
}

export default Blackjack