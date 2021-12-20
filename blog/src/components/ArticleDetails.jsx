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
        alert('Do you want to delete it?')
        axios.delete(`http://localhost:3001/api/articles/${props.match.params.articleId}`)
        props.history.push('/')
        window.location.reload()
    }

    useEffect(() => {
        getArticleDetails()
    }, [])


    return (
        <div>
            <div className="article-details">
                <div className="edit-delete">
                    <button onClick={() => props.history.push(`/articles/update/${selectedArticle._id}`)} style={{ margin: '1vh' }}><img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png" style={{ borderRadius: '5px' }} /></button>
                    <button onClick={deleteArticle} style={{ margin: '1vh', padding: '1vh' }}><img src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png" style={{ borderRadius: '5px' }} /></button>
                </div>
                <h1 style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif', color: 'white' }}>{selectedArticle.title}</h1>
                <img src={selectedArticle.image} alt="bleh" className="details-image" />
                <h6>{selectedArticle.createdAt}</h6>
                <h4 style={{ color: 'white' }}>Category: {selectedArticle.category}</h4>
                <p style={{ color: 'white', fontSize: '4vh' }}>{selectedArticle.content}</p>
            </div>
        </div>
    )
}

export default ArticleDetails