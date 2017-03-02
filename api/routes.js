'use strict'

var express = require('express')
var router = express.Router()
var articleRoute = require('./routes/articles')

router
    .use('/articles', articleRoute)

module.exports = router;