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
            <div className="article-details">
                <h1 style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif', color: 'white' }}>{selectedArticle.title}</h1>
                <img src={selectedArticle.image} alt="bleh" />
                <div>
                    <button onClick={() => props.history.push(`/articles/update/${selectedArticle._id}`)}>Update</button>
                    <button onClick={deleteArticle}>Delete</button>
                </div>
                <h6>{selectedArticle.createdAt}</h6>
                <p style={{ color: 'white', fontSize: '4vh' }}>{selectedArticle.content}</p>
                <h4 style={{ color: 'white' }}>Category: {selectedArticle.category}</h4>
            </div>
        </div>
    )
}

export default ArticleDetails