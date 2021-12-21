import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

const Sports = (props) => {

    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        const res = await axios.get('/api/articles/')
        setArticles(res.data.articles)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <div className="home">
            {
                articles.map((article) => {
                    if (article.category === 'sports') {
                        return (
                            <div className="articleCard" key={article._id} >
                                <ArticleCard image={article.image} title={article.title} onClick={() => props.history.push(`articles/${article._id}`)} />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Sports