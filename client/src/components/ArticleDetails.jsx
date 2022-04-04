import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { FaEdit } from 'react-icons/fa';

const ArticleDetails = (props) => {
  const [selectedArticle, setSelectedArticle] = useState({});

  const getArticleDetails = async () => {
    const res = await axios.get(
      `/api/articles/${props.match.params.articleId}`
    );
    setSelectedArticle(res.data.article);
    // console.log(res)
  };

  const [modalBoolean, setModalBoolean] = useState(false);

  const deleteArticle = () => {
    axios.delete(`/api/articles/${props.match.params.articleId}`);
    props.history.push('/');
    window.location.reload();
  };

  const refuseDelete = () => {
    setModalBoolean(false);
  };

  useEffect(() => {
    getArticleDetails();
  }, []);

  let timestamp = Date.parse(selectedArticle.createdAt);
  let time = new Date(timestamp);

  return (
    <div className="article-details-main">
      <div className="article-details-secondary">
        <Modal
          open={modalBoolean}
          text="Are you sure you want to delete it?"
          okay="Yes"
          onSubmit={deleteArticle}
        >
          <button onClick={refuseDelete}>Cancel</button>
        </Modal>

        <div className="article-details">
          <div className="edit-delete">
            <button
              onClick={() =>
                props.history.push(`/articles/update/${selectedArticle._id}`)
              }
              style={{ margin: '1vh' }}
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png"
                style={{ borderRadius: '5px' }}
              />
            </button>
            <button
              onClick={() => setModalBoolean(true)}
              style={{ margin: '1vh', padding: '1vh' }}
            >
              <img
                src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png"
                style={{ borderRadius: '5px' }}
              />
            </button>
          </div>
          <h1>{selectedArticle.title}</h1>
          <img
            src={selectedArticle.image}
            alt="bleh"
            className="details-image"
          />
          <h2>Author: {selectedArticle.author_name}</h2>
          <h4>{`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</h4>
          <h4>Category: {selectedArticle.category}</h4>
          <p>{selectedArticle.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
