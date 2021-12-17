import axios from "axios";
import React, { useState, useEffect } from "react";

const ArticleDetails = (props) => {

    const [selectedArticle, setSelectedArticle] = useState({})

    const getArticleDetails = async () => {
        const res = await axios.get(`http://localhost:3001/api/articles/${props.match.params.articleId}`)
        setSelectedArticle(res.data.article)
        // console.log(res)
    }

    const deleteArticle = () => {
        axios.delete(`http://localhost:3001/api/articles/${props.match.params.articleId}`)
    }

    useEffect(() => {
        getArticleDetails()
    }, [])


    return (
        <div>
            <div className="article-details" onClick={() => props.history.push(`/articles/update/${selectedArticle._id}`)}>
                <h1>{selectedArticle.title}</h1>
                <img src={selectedArticle.image} alt="bleh" />
                <h6>{selectedArticle.createdAt}</h6>
                <p>{selectedArticle.content}</p>
                <h6>{selectedArticle.category}</h6>
            </div>
            <br /><br />
            <button onClick={deleteArticle}>Delete</button>
            <br /><br />
        </div>
    )
}

export default ArticleDetails