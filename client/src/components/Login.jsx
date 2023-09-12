//login page

import {Link} from 'react-router-dom';
import "../styles/Login.css";


const LoginPage = () => {
    return (
        <div>
            <h1>Welcome to the Login Page</h1>
            <Link
            to="/home"
            >
            <h2>Log In</h2>
            </Link>
        </div>
    )
}

export default LoginPage