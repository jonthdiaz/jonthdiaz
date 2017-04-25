'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _forms = require('../controllers/forms');

var _forms2 = _interopRequireDefault(_forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.route('/contact').post(_forms2.default.post);

module.exports = router;