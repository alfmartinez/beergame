/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Round = require('./round.model');

exports.register = function(socket) {
  Round.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Round.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('round:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('round:remove', doc);
}