import React from "react";
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="sidebar">
                <h4 style={{ color: 'white' }}>Categories:</h4>
                <Link to='/' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>All</Link>
                <Link to='/entertainment' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Entertainment</Link>
                <Link to='/sports' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Sports</Link>
                <Link to='/tech' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Tech</Link>
                <Link to='/investing' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Investing</Link>
            </div>
        </div>
    )
}

export default SideBar