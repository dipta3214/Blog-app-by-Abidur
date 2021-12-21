import React from "react";

const SuccesfulCreation = (props) => {

    if (!props.open) {
        return null
    }

    return (
        <div>
            <h2>Successfully created!!!</h2>
        </div>
    )
}

export default SuccesfulCreation