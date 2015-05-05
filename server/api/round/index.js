'use strict';

var express = require('express');
var controller = require('./round.controller');

var router = express.Router();

router.get('/:factory', controller.index);
router.get('/:factory/last', controller.last);
router.get('/:factory/:id', controller.show);
router.post('/:factory/', controller.create);
router.put('/:factory/:id', controller.update);
router.patch('/:factory/:id', controller.update);
router.delete('/:factory/:id', controller.destroy);

module.exports = router;
