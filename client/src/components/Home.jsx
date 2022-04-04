import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  let history = useHistory();

  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await axios.get('/api/articles/');
    setArticles(res.data.articles);
    console.log(res.data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="main-home">
      <div className="home">
        {articles.map((article) => {
          let timestamp = Date.parse(article.createdAt);
          let time = new Date(timestamp);
          return (
            <div className="articleCard" key={article._id}>
              <ArticleCard
                image={article.image}
                date={`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`}
                title={`${article.title}`}
                onClick={() => props.history.push(`articles/${article._id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
