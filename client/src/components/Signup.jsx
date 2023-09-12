//Signup page

import {Link} from 'react-router-dom';
import '../styles/Signup.css';

import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'


const SignupPage = () => {

    return (
        <div>
            <h1>Welcome to the Signup Page</h1>
            <form >
                <h2>Sign Up</h2>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' value='' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value='' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value='' />
                </div>

                <button type='submit'>Submit</button>
            </form>

            <Link
            to="/home"
            >
                Home
            </Link>
        </div>
    )
}

export default SignupPage