import axios from "axios";
import React, { useState, useEffect } from "react";

const ArticleDetails = (props) => {

    const [selectedArticle, setSelectedArticle] = useState({})

    const getArticleDetails = async () => {
        const res = await axios.get(`http://localhost:3001/api/articles/${props.match.params.articleId}`)
        setSelectedArticle(res.data.article)
        console.log(res)
    }

    useEffect(() => {
        getArticleDetails()
    }, [])

    return (
        <div>
            <h1>hi</h1>
            <h1>{selectedArticle.name}</h1>
            <img src={selectedArticle.image} alt="bleh" />
            <p>{selectedArticle.content}</p>
            <h6>{selectedArticle.category}</h6>
        </div>
    )
}

export default ArticleDetails