const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/createArticle', controllers.createArticle)

router.get('/articles', controllers.getAllArticles)

router.get('/articles/:id', controllers.getArticleById)

router.put('/articles/:id', controllers.updateArticle)

router.delete('/articles/:id', controllers.deleteArticle)

router.get('/users', controllers.getAllUsers)

module.exports = router;