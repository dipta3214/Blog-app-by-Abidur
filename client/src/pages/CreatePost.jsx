import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuccesfulCreation from './SuccessfulCreation';
import Modal from '../components/Modal';

const CreatePost = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('/api/users');
      setUser(res.data.users[0]);
    };
    getUser();
  }, []);

  const [newPost, setNewPost] = useState({
    title: ``,
    content: ``,
    image: ``,
    category: ``,
    author_name: user.author
  });

  const handleChange = (e) => {
    const newestPost = { ...newPost };
    newestPost[e.target.id] = e.target.value;
    setNewPost(newestPost);
    console.log(newPost);
  };

  const [message, setMessage] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('/api/createArticle', {
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      category: newPost.category,
      author_name: user.author
    });

    if (
      newPost.title !== '' &&
      newPost.content !== '' &&
      newPost.image !== '' &&
      newPost.category !== ''
    ) {
      setMessage(true);
      let afterSubmit = {
        title: ``,
        content: ``,
        image: ``,
        category: ``,
        author_name: user.author
      };
      setNewPost(afterSubmit);
    }
  };

  return (
    <div className="form-div-div">
      <SuccesfulCreation open={message} />
      <div className="form-div h-100">
        <form onSubmit={(e) => submitForm(e)} className="form">
          <h2>New Post:</h2>
          <div className="form-child">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              value={newPost.title}
              id="title"
              className="inputForm"
              placeholder="Enter Your title"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="form-child">
            <label htmlFor="image">Image(URL Only):</label>
            <input
              type="text"
              value={newPost.image}
              id="image"
              className="inputForm"
              placeholder="Enter Image URL"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-child">
            <label htmlFor="content">Content:</label>
            <textarea
              type="text"
              value={newPost.content}
              id="content"
              className="inputForm"
              placeholder="Enter Your Content"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-child">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              value={newPost.category}
              id="category"
              className="inputForm"
              placeholder="Enter Category Name"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
