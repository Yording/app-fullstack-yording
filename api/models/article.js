'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    description: String,
    url: String,
    tags:{
			type:Object,
			default:'',
			trim:true,
		name:{
			type:String,
			default:'',
			trim:true
		}
	},
    created: {
        type: Date,
        default: Date.now
    },
})

var Article = mongoose.model('Article',articleSchema)

module.exports = Article