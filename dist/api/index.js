'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/projects', require('./routers/projects'));
router.use('/services', require('./routers/services'));
router.use('/profiles', require('./routers/profiles'));

module.exports = router;