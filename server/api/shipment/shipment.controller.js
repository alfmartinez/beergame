'use strict';

var _ = require('lodash');
var Shipment = require('./shipment.model');

// Get list of shipments
exports.index = function(req, res) {
  Shipment.find(function (err, shipments) {
    if(err) { return handleError(res, err); }
    return res.json(200, shipments);
  });
};

// Get a single shipment
exports.show = function(req, res) {
  Shipment.findById(req.params.id, function (err, shipment) {
    if(err) { return handleError(res, err); }
    if(!shipment) { return res.send(404); }
    return res.json(shipment);
  });
};

// Creates a new shipment in the DB.
exports.create = function(req, res) {
  Shipment.create(req.body, function(err, shipment) {
    if(err) { return handleError(res, err); }
    return res.json(201, shipment);
  });
};

// Updates an existing shipment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Shipment.findById(req.params.id, function (err, shipment) {
    if (err) { return handleError(res, err); }
    if(!shipment) { return res.send(404); }
    var updated = _.merge(shipment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, shipment);
    });
  });
};

// Deletes a shipment from the DB.
exports.destroy = function(req, res) {
  Shipment.findById(req.params.id, function (err, shipment) {
    if(err) { return handleError(res, err); }
    if(!shipment) { return res.send(404); }
    shipment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}