'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects2 = require('../../models/projects');

var _projects3 = _interopRequireDefault(_projects2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _projects = new _projects3.default();

exports.default = {
  get: function get(req, res) {
    var resp = {};
    _projects.getAllProjects(function (error, response) {
      if (error) return res.status(500).send(response);
      res.json(response);
    });
  }
};