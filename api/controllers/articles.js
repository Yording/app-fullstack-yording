'use strict'

var Article = require('../models/article');

module.exports = {
    getArticle: (req, res) => {
        return null
    },
    getArticles: (req, res) => {
        Article.find({}, (err, articles) => {
            if(err)
                return res.status(500).send({message: `Error al realizar la petición: ${err}`})

            if(!articles)
                return res.status(404).send({message: 'No se encontraron articles'})

            return res.status(200).send({articles: articles})
        })
    },
    createArticle: (req, res) => {
        var article = new Article({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            tags: req.body.tags
        })

        article.save((err, article) => {
            if(err)
                return res.status(500).send({message: `Error al realizar la petición: ${err}`})
            
            return res.status(200).send({article: article})
        }) 
    },
    deleteArticle: (req, res) => {
        return null
    },
    updateArticle: (req, res) => {
        return null
    }
}