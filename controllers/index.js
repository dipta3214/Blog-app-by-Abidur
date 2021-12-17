const Article = require('../models/article');

const createArticle = async (req, res) => {
    try {
        const article = await new Article(req.body)
        await article.save()
        return res.status(201).json({
            article,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        return res.status(200).json({ articles })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id)
        if (article) {
            return res.status(200).json({ article });
        }
        return res.status(404).send('Article with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateArticle = async (req, res) => {
    console.log(req.body)
    try {
        const { id } = req.params;
        await Article.findByIdAndUpdate(id, req.body, { new: true }, (err, article) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!article) {
                res.status(500).send('Article not found!');
            }
            console.log(article)
            res.status(200).json(article);
        })
    } catch (error) {
        // res.status(500).send(error.message);
        console.log(error.message)
    }
}

const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Article.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Article deleted");
        }
        throw new Error("Article not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
}