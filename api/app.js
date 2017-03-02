'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var routes = require('./routes')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

app.use('/api', routes)

app.get('/', (req, res) => {
    res.status(200).send({message: 'Bienvenido a la api de app-fullstack-yording'})
})

module.exports = app;