import React from "react";

const SuccesfulCreation = (props) => {

    if (!props.open) {
        return null
    }

    return (
        <>
            <div className="success-name">
                <h2>Successfully created!!!</h2>
            </div>
            <br />
        </>
    )
}

export default SuccesfulCreation