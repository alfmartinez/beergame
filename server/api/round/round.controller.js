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

// Updates an existing round in the DB.
exports.update = function(req, res) {
  var q = Round.find({
    factory: req.params.factory
  }).sort({
    'round': -1
  }).limit(1);
  q.exec(function(err, rounds) {
    if (err) {
      return handleError(res, err);
    }
    createNewRound(rounds[0], res)
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

function createNewRound(oldState, res) {
  var incoming = 5;
  var newOrder = 9;
  var newRound = {
    round: oldState.round + 1,
    incoming: incoming,
    available: oldState.inventory + incoming,
    newOrder: newOrder,
    toShip: oldState.backorder + newOrder,
    yourOrder: oldState.yourOrder,
    factory: oldState.factory
  };
  if (newRound.toShip > newRound.available) {
    newRound.delivery = newRound.available;
    newRound.backorder = newRound.toShip - newRound.delivery;
    newRound.inventory = 0;
  } else {
    newRound.delivery = newRound.toShip;
    newRound.inventory = newRound.available - newRound.delivery;
    newRound.backorder = 0;
  }
  newRound.cost = oldState.cost + (
    newRound.inventory * 0.5 + newRound.backorder * 1
  );
  Round.create(newRound, function(err, newRound) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, newRound);
  });
}
