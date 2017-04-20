'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/', require('./home'));
router.use('/admin', require('./admin'));
router.use('/api', require('../api'));

router.get('/test', function (req, res) {
  debugger;
  setTimeout(function () {
    console.log("esto es una prueba");
  }, 600000);
});

module.exports = router;