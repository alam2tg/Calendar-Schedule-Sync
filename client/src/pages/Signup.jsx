//Signup page
import {Link} from 'react-router-dom'

const SignupPage = () => {
    return (
        <div>
            <h1>Welcome to the Signup Page</h1>
            <Link
            to="/home"
            >
            <h2>Sign Up</h2>
            </Link>
        </div>
    )
}

export default SignupPage