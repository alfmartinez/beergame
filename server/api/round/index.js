'use strict';

var express = require('express');
var controller = require('./round.controller');

var router = express.Router();

router.get('/:factory', controller.index);
router.get('/:factory/last', controller.last);
router.put('/:factory', controller.update);

module.exports = router;
