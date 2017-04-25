"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _tables2 = require('./tables');

var _tables3 = _interopRequireDefault(_tables2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _tables = new _tables3.default();

var db = function () {
  function db() {
    _classCallCheck(this, db);
  }

  _createClass(db, [{
    key: 'setupDb',
    value: function setupDb() {
      var self = this;
      _async2.default.waterfall([function (callback) {
        self.connectToRethinkDbServer(function (err, connection) {
          if (err) {
            return callback(true, "Error in connection Rethinkdb");
          }
          callback(null, connection);
        });
      }, function (connection, callback) {
        _rethinkdb2.default.dbCreate(_config2.default.db_name).run(connection, function (err, result) {
          if (err) console.log("Database already created");else console.log("Created new database");
          callback(null, connection);
        });
      }, _tables.createTableServices, _tables.createTableProjects, _tables.createTableProfile, _tables.createTableContact], function (err, data) {
        console.log("connection done");
      });
    }
  }, {
    key: 'connectToRethinkDbServer',
    value: function connectToRethinkDbServer(callback) {
      _rethinkdb2.default.connect({
        host: _config2.default.host,
        port: _config2.default.port,
        db: _config2.default.db_name
      }, function (err, connection) {
        callback(err, connection);
      });
    }
  }, {
    key: 'connectToDb',
    value: function connectToDb(callback) {
      _rethinkdb2.default.connect({
        host: _config2.default.host,
        port: _config2.default.port,
        db: _config2.default.db_name
      }, function (err, connection) {
        callback(err, connection);
      });
    }
  }], [{
    key: 'connect',
    value: function connect(callback) {
      _rethinkdb2.default.connect({
        host: _config2.default.host,
        port: _config2.default.port,
        db: _config2.default.db_name
      }, function (err, connection) {
        if (err) return callback(true, "Error connecting to database");
        callback(null, connection);
      });
    }
  }]);

  return db;
}();

module.exports = db;