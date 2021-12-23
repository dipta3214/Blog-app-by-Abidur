import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <div className="all-nav">
                <Link to='/' className="nav-item" style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}><h4>Home</h4></Link>
                <Link to='/about' className="nav-item" style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}><h4>About</h4></Link>
                <Link to='contact' className="nav-item" style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}><h4>Contact</h4></Link>
            </div>
            <div className="new-post-button">
                <Link to='/createpost' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}><button className="btn-new-post">New Post</button></Link>
            </div>
        </div>
    )
}

export default Header