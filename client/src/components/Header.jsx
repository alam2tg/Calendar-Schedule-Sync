/* Use CSS for header, as it will be used on multiple pages */

// import { Link } from 'react-router-dom'
import '../styles/header.css'
// add onClick to  logout button
function Header () {
    return (
        <div className="header-container">
            <a href="/home">Home</a>
            <a href="/blackjack">Blackjackpage</a>
            <a href="/login">login</a>
            <a href="/signup">signup</a>
            <button>Logout</button>
        </ div>
    );
}

export default Header;