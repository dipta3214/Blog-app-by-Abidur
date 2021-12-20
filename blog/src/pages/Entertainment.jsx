import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import axios from 'axios'

const Entertainment = (props) => {

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
                    if (article.category === 'entertainment') {
                        return (
                            <div className="articleCard">
                                <ArticleCard key={article._id} image={article.image} title={article.title} onClick={() => props.history.push(`articles/${article._id}`)} />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Entertainment