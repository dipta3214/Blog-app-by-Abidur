import React from 'react';

const ArticleCard = (props) => {
  return (
    <div className="home-contents" onClick={props.onClick}>
      <div className="post-content">
        <img src={props.image} alt="poster" />
        <h4>{props.date}</h4>
        <h3 className="passthrough-link">{props.title}</h3>
      </div>
    </div>
  );
};

export default ArticleCard;
