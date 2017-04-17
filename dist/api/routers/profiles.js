'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _profiles = require('../controllers/profiles');

var _profiles2 = _interopRequireDefault(_profiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.route('/').get(_profiles2.default.get);

module.exports = router;