'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _services = require('../controllers/services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.route('/').get(_services2.default.get);

module.exports = router;