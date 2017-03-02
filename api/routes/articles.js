'use strict'

var express = require('express')
var router = express.Router()
var articleCtrl = require('../controllers/articles')

router
    .get('/', articleCtrl.getArticles)
    .post('/', articleCtrl.createArticle)

module.exports = router