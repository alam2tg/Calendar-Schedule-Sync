// //login page
// When I enter the website for the first time, I want to see a welcome screen
// On the welcome screen, I see buttons to signup and login
import {Link} from 'react-router-dom'
import "../styles/Landing.css"

const LandingPage = () => {
    return (
        <div>
            <h1 id="Landing-Header">Welcome to the Landing Page</h1>
            <Link
            to="/signup"
            >
            <h2>Sign Up</h2>
            </Link>

            <Link
            to="/login"
            >
            <h2>Log In</h2>
            </Link>
        </div>
    )
}

export default LandingPage