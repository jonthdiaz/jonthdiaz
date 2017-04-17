'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/proyectos', require('./projects'));
router.use('/services', require('./services'));
router.use('/profile', require('./profile'));

module.exports = router;