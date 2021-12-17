import React from "react";

const ArticleCard = (props) => {
    return (
        <div className="home-contents" onClick={props.onClick}>
            <div>
                <img src={props.image} alt="poster" />
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default ArticleCard