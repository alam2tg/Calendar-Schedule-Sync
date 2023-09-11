/* Use CSS for header, as it will be used on multiple pages */

// import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header () {
    return (
        <div className="header-container">
            <h1>Blackjack Page Header</h1>
            <h3>Logout</h3>
        </ div>
    );
}

export default Header;