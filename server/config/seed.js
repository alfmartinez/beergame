/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Round = require('../api/round/round.model');

Round.find({}).remove(function() {
	Round.create({
		round: 1,
		incoming: 5,
		available: 20,
		newOrder: 9,
		toShip: 9,
		delivery: 9,
		backorder: 0,
		inventory: 11,
		yourOrder: 5,
		cost: 5.5,
		factory: 1
	}, {
		round: 2,
		incoming: 5,
		available: 16,
		newOrder: 9,
		toShip: 9,
		delivery: 9,
		backorder: 0,
		inventory: 7,
		yourOrder: 5,
		cost: 9,
		factory: 1
	}, {
		round: 3,
		incoming: 5,
		available: 12,
		newOrder: 9,
		toShip: 9,
		delivery: 9,
		backorder: 0,
		inventory: 3,
		yourOrder: 5,
		cost: 10.5,
		factory: 1
	}, {
		round: 4,
		incoming: 5,
		available: 8,
		newOrder: 9,
		toShip: 9,
		delivery: 8,
		backorder: 1,
		inventory: 0,
		yourOrder: 5,
		cost: 11.5,
		factory: 1
	}, {
		round: 1,
		incoming: 5,
		available: 8,
		newOrder: 9,
		toShip: 9,
		delivery: 8,
		backorder: 1,
		inventory: 0,
		yourOrder: 5,
		cost: 11.5,
		factory: 2
	})
});

User.find({}).remove(function() {
	User.create({
		provider: 'local',
		name: 'Test User',
		email: 'test@test.com',
		password: 'test'
	}, {
		provider: 'local',
		role: 'admin',
		name: 'Admin',
		email: 'admin@admin.com',
		password: 'admin'
	}, function() {
		console.log('finished populating users');
	});
});
