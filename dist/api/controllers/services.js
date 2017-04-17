'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _services2 = require('../../models/services');

var _services3 = _interopRequireDefault(_services2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _services = new _services3.default();

exports.default = {
  get: function get(req, res) {
    var resp = {};
    _services.getAll(function (error, response) {
      if (error) return res.status(500).send(response);
      res.json(response);
    });
  }
};