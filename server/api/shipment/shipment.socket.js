/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Shipment = require('./shipment.model');

exports.register = function(socket) {
  Shipment.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Shipment.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('shipment:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('shipment:remove', doc);
}