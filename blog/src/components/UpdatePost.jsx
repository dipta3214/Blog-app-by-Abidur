import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdatePost = (props) => {

    const [selectedArticle, setSelectedArticle] = useState({})

    const getArticleDetails = async () => {
        const res = await axios.get(`http://localhost:3001/api/articles/update/${props.match.params.articleId}`)
        setSelectedArticle(res.data.article)
        setNewPost(res.data.article)
        console.log(res)
    }

    useEffect(() => {
        getArticleDetails()
    }, [])



    const [newPost, setNewPost] = useState({})

    console.log(newPost)

    const handleChange = (e) => {
        const newestPost = { ...newPost }
        newestPost[e.target.id] = e.target.value
        setNewPost(newestPost)
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/api/articles/${props.match.params.articleId}/update`, {
            title: newPost.title,
            image: newPost.image,
            content: newPost.content,
            category: newPost.category
        })
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" value={newPost.title} id="title" placeholder="Enter Your title" onChange={(e) => handleChange(e)} required />
                <input type="text" value={newPost.image} id="image" placeholder="Enter Image URL" onChange={(e) => handleChange(e)} />
                <input type="textarea" value={newPost.content} id="content" placeholder="Enter Your Content" onChange={(e) => handleChange(e)} required />
                <input type="text" value={newPost.category} id="category" placeholder="Enter Category Name" onChange={(e) => handleChange(e)} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePost