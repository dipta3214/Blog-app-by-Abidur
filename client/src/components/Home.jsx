import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Home = (props) => {

    let history = useHistory();

    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        const res = await axios.get('/api/articles/')
        setArticles(res.data.articles)
        console.log(res.data)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <div className="home">
            {
                articles.map((article) => {
                    return (
                        <div className="articleCard" key={article._id}>
                            <ArticleCard image={article.image} title={article.title} onClick={() => props.history.push(`articles/${article._id}`)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home