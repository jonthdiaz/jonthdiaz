'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _projects = require('../controllers/projects');

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.route('/').get(_projects2.default.get);

module.exports = router;