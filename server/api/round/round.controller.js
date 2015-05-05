'use strict';

var _ = require('lodash');
var Round = require('./round.model');

// Get list of rounds
exports.index = function(req, res) {
	var q = Round.find({
		factory: req.params.factory
	}).sort({
		'round': -1
	}).skip(1);
	q.exec(function(err, rounds) {
		if (err) {
			return handleError(res, err);
		}
		return res.json(200, rounds);
	});
};

exports.last = function(req, res) {
	var q = Round.find({
		factory: req.params.factory
	}).sort({
		'round': -1
	}).limit(1);
	q.exec(function(err, rounds) {
		if (err) {
			return handleError(res, err);
		}
		return res.json(200, rounds[0]);
	});
};

// Get a single round
exports.show = function(req, res) {
	Round.findById(req.params.id, function(err, round) {
		if (err) {
			return handleError(res, err);
		}
		if (!round) {
			return res.send(404);
		}
		return res.json(round);
	});
};

// Creates a new round in the DB.
exports.create = function(req, res) {
	Round.create(req.body, function(err, round) {
		if (err) {
			return handleError(res, err);
		}
		return res.json(201, round);
	});
};

// Updates an existing round in the DB.
exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Round.findById(req.params.id, function(err, round) {
		if (err) {
			return handleError(res, err);
		}
		if (!round) {
			return res.send(404);
		}
		var updated = _.merge(round, req.body);
		updated.save(function(err) {
			if (err) {
				return handleError(res, err);
			}
			return res.json(200, round);
		});
	});
};

// Deletes a round from the DB.
exports.destroy = function(req, res) {
	Round.findById(req.params.id, function(err, round) {
		if (err) {
			return handleError(res, err);
		}
		if (!round) {
			return res.send(404);
		}
		round.remove(function(err) {
			if (err) {
				return handleError(res, err);
			}
			return res.send(204);
		});
	});
};

function handleError(res, err) {
	return res.send(500, err);
}
