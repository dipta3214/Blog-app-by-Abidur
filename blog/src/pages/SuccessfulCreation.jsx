import React from "react";
import { Link } from 'react-router-dom'

const SuccesfulCreation = (props) => {

    if (!props.open) {
        return null
    }

    return (
        <>
            <div className="success-name">
                <h2>Successfully created!!! Refresh back to <Link to="/">Homepage</Link> to check! </h2>
            </div>
            <br />
        </>
    )
}

export default SuccesfulCreation