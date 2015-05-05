'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RoundSchema = new Schema({
	round: Number,
	incoming: Number,
	available: Number,
	newOrder: Number,
	toShip: Number,
	delivery: Number,
	backorder: Number,
	inventory: Number,
	yourOrder: Number,
	cost: Number,
	factory: Number
});

module.exports = mongoose.model('Round', RoundSchema);
