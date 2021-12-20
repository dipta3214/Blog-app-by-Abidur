import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccesfulCreation from "./SuccessfulCreation";

const CreatePost = (props) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('http://localhost:3001/api/users')
            setUser(res.data.users[0])
        }
        getUser()
    }, [])

    const [newPost, setNewPost] = useState({
        title: ``,
        content: ``,
        image: ``,
        category: ``,
        author_name: user.author
    })

    const handleChange = (e) => {
        const newestPost = { ...newPost }
        newestPost[e.target.id] = e.target.value
        setNewPost(newestPost)
        console.log(newPost)
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/createArticle', {
            title: newPost.title,
            content: newPost.content,
            image: newPost.image,
            category: newPost.category,
            author_name: user.author
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
        <div className="form-div-div">
            <div className="form-div">
                <form onSubmit={(e) => submitForm(e)} className="form">
                    <h2>New Post:</h2>
                    <label for='title'>Title:</label>
                    <input type="text" value={newPost.title} id="title" placeholder="Enter Your title" onChange={(e) => handleChange(e)} required />
                    <label for='image'>Image(Url Only):</label>
                    <input type="text" value={newPost.image} id="image" placeholder="Enter Image URL" onChange={(e) => handleChange(e)} required />
                    <label for='content'>Content:</label>
                    <textarea type="text" value={newPost.content} id="content" placeholder="Enter Your Content" onChange={(e) => handleChange(e)} required />
                    <label for='category'>Category:</label>
                    <input type="text" value={newPost.category} id="category" placeholder="Enter Category Name" onChange={(e) => handleChange(e)} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost