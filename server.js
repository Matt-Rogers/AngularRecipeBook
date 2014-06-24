var express = require('express');
var app		= express();
var mongoose= require('mongoose');

var db = require('./config/db');

var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

//create schema for datamodel

var Schema = mongoose.Schema;

var Ingredients = new Schema({
	name: String,
	amount: Number
});

var Directions = new Schema({
	name: String
});

var Images = new Schema(
{	title: String,
	url: String
});

var Categories = new Schema({
	name: String
});

var Recipe = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	ingredients: [Ingredients],
	directions: [Directions],
	images: [Images],
	categories: [Categories]
});

var RecipeModel = mongoose.model('RecipeModel', Recipe);

//require the routes for api
require('./app/routes.js')(app,RecipeModel);

//open up the port
app.listen(port);
console.log("app running on " + port);

//expose the app
exports = module.exports = app;