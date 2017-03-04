'use strict'

var express = require('express')
var router = express.Router()
var articleCtrl = require('../controllers/articles')

router
    .get('/', articleCtrl.getArticles)
    .post('/', articleCtrl.createArticle)
    .delete('/:id', articleCtrl.deleteArticle)
    .put(':/id', articleCtrl.updateArticle)
    .get('/:id', articleCtrl.getArticle)

module.exports = router