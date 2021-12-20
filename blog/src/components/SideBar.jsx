import React from "react";
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <div className="sidebar">
                <Link to='/entertainment'>Entertainment</Link>
                <Link to='/sports'>Sports</Link>
                <Link to='/tech'>Tech</Link>
            </div>
        </div>
    )
}

export default SideBar