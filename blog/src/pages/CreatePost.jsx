import React, { useState } from "react";
import axios from "axios";
import SuccesfulCreation from "./SuccessfulCreation";

const CreatePost = (props) => {

    const [newPost, setNewPost] = useState({
        title: ``,
        content: ``,
        image: ``,
        category: ``
    })

    const handleChange = (e) => {
        const newestPost = { ...newPost }
        newestPost[e.target.id] = e.target.value
        setNewPost(newestPost)
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/createArticle', {
            title: newPost.title,
            content: newPost.content,
            image: newPost.image,
            category: newPost.category
        })

        if (newPost.title !== '' && newPost.content !== '' && newPost.image !== '' && newPost.category !== '') {
            return (
                <div>
                    {alert('done')}
                    {console.log('done')}
                </div>
            )
        }
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" value={newPost.title} id="title" placeholder="Enter Your title" onChange={(e) => handleChange(e)} required />
                <input type="text" value={newPost.image} id="image" placeholder="Enter Image URL" onChange={(e) => handleChange(e)} required />
                <input type="textarea" value={newPost.content} id="content" placeholder="Enter Your Content" onChange={(e) => handleChange(e)} required />
                <input type="text" value={newPost.category} id="category" placeholder="Enter Category Name" onChange={(e) => handleChange(e)} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost