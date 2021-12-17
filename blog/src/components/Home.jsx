import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Home = (props) => {

    let history = useHistory();

    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        const res = await axios.get('http://localhost:3001/api/articles/')
        setArticles(res.data.articles)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <div className="home">
            {
                articles.map((article) => {
                    return (
                        <ArticleCard key={article._id} image={article.image} title={article.title} onClick={() => props.history.push(`articles/${article._id}`)} />
                    )
                })
            }
        </div>
    )

}

export default Home