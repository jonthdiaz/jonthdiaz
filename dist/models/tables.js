"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tables = function () {
  function tables() {
    _classCallCheck(this, tables);
  }

  _createClass(tables, [{
    key: 'createTableServices',
    value: function createTableServices(connection, callback) {
      _rethinkdb2.default.db(_config2.default.db_name).tableCreate('services').run(connection, function (err, result) {
        if (err) console.log("tabla services already created");else console.log("created new table services");
        callback(null, connection);
      });
    }
  }, {
    key: 'createTableProjects',
    value: function createTableProjects(connection, callback) {
      _rethinkdb2.default.db(_config2.default.db_name).tableCreate('projects').run(connection, function (err, result) {
        if (err) console.log("tabla projects already created");else console.log("created new table projects");
        callback(null, connection);
      });
    }
  }, {
    key: 'createTableUser',
    value: function createTableUser(connection, callback) {
      _rethinkdb2.default.db(_config2.default.db_name).tableCreate('users').run(connection, function (err, result) {
        if (err) console.log("tabla users already created");else console.log("created new table users");
        callback(null, connection);
      });
    }
  }, {
    key: 'createTableProfile',
    value: function createTableProfile(connection, callback) {
      _rethinkdb2.default.db(_config2.default.db_name).tableCreate('profile').run(connection, function (err, result) {
        if (err) console.log("tabla profile already created");else console.log("created new table profile");
        callback(null, connection);
      });
    }
  }]);

  return tables;
}();

module.exports = tables;