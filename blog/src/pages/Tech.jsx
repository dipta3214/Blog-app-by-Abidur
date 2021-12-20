import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import axios from 'axios'

const Tech = (props) => {

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
                    if (article.category === 'tech') {
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

export default Tech