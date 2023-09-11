//tutorial page

import {Link} from 'react-router-dom'

const Tutorial = () => {
    return (
        <div>
            <h1>Welcome to the Tutorial Page</h1>
            <Link
            to="/home"
            >
            <h2>Home</h2>
            </Link>
        </div>
    )
}

export default Tutorial