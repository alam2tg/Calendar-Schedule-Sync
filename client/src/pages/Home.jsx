// //homepage 
// After logging in, I am presented with home page with a start button and a tutorial button
// when I click the tutorial button, then the intro.js tutorial is rendered
// As a user, when I click the start button the blackjack page is rendered

import {Link} from 'react-router-dom'
import '../styles/Home.css'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <Link
            to="/blackjack"
            >
            <h2>Start</h2>
            </Link>
            <Link
            to="/tutorial"
            >
            <h2>Tutorial</h2>
            </Link>
        </div>
    )
}

export default HomePage