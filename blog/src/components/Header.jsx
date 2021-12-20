import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <div>
                <Link to='/' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Home</Link>
                <Link to='/about' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>About</Link>
                <Link to='contact' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Contact Us</Link>
            </div>
            <div>
                <Link to='/createpost' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>New Post</Link>
            </div>
        </div>
    )
}

export default Header