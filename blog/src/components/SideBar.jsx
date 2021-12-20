import React from "react";
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="sidebar">
                <Link to='/entertainment' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Entertainment</Link>
                <Link to='/sports' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Sports</Link>
                <Link to='/tech' style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}>Tech</Link>
            </div>
        </div>
    )
}

export default SideBar