'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _profile2 = require('../../models/profile');

var _profile3 = _interopRequireDefault(_profile2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _profile = new _profile3.default();

exports.default = {
  get: function get(req, res) {
    var resp = {};
    _profile.getByUsername('jonthdiaz', function (error, response) {
      if (error) return res.status(500).send(response);
      res.json(response);
    });
  }
};