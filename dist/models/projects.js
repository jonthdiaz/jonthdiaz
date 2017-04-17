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

var _proyects = require('../schema/proyects');

var _proyects2 = _interopRequireDefault(_proyects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var projects = function () {
  function projects() {
    _classCallCheck(this, projects);

    this.tableName = 'projects';
  }

  _createClass(projects, [{
    key: 'getAllProjects',
    value: function getAllProjects(callback) {
      var _this = this;

      _async2.default.waterfall([_db2.default.connect, function (connection, callback) {
        _rethinkdb2.default.table(_this.tableName).filter({ active: 'on' }).orderBy('order').run(connection, function (error, cursor) {
          connection.close();
          if (error) return callback(true, 'Error fetching proyects');
          cursor.toArray(function (error, result) {
            if (error) return callback(true, "error reading cursor");
            callback(null, result);
          });
        });
      }], function (error, data) {
        callback(error === null ? false : true, data);
      });
    }
  }, {
    key: 'getById',
    value: function getById(id, callback) {
      var _this2 = this;

      _async2.default.waterfall([_db2.default.connect, function (connection, callback) {
        _rethinkdb2.default.table(_this2.tableName).get(id).run(connection, function (error, result) {
          if (error) return callback(true, 'Error getting register ' + error.message);
          callback(null, result);
        });
      }], function (error, data) {
        callback(error === null ? false : true, data);
      });
    }
  }, {
    key: 'update',
    value: function update(id, data, callback) {
      var _this3 = this;

      _async2.default.waterfall([_db2.default.connect, function (connection, callback) {
        if (!id) return callback(true, 'The register with id ' + id + ' does not exists');

        var model = new _proyects2.default(data);
        var valid = model.valid();
        if (valid.success) {
          _rethinkdb2.default.table(_this3.tableName).get(id).update(model).run(connection, function (error, result) {
            if (error) return callback(true, 'Error updating register ' + error.message);
            callback(null, result);
          });
        } else callback(true, valid.errors);
      }], function (error, data) {
        callback(error === null ? false : true, data);
      });
    }
  }, {
    key: 'create',
    value: function create(data, callback) {
      var _this4 = this;

      _async2.default.waterfall([_db2.default.connect, function (connection, callback) {
        var model = new _proyects2.default(data);
        var valid = model.valid();
        if (valid.success) {
          _rethinkdb2.default.table(_this4.tableName).insert(model).run(connection, function (error, result) {
            connection.close();
            if (error) return callback(true, 'Error happens while adding new proyectos');
            callback(null, result);
          });
        } else callback(true, valid.errors);
      }], function (error, data) {
        callback(error === null ? false : true, data);
      });
    }
  }, {
    key: 'delete',
    value: function _delete(id, callback) {
      var _this5 = this;

      _async2.default.waterfall([_db2.default.connect, function (connection, callback) {
        if (!id) return callback(true, 'The register with id ' + id + ' does not exists');
        _rethinkdb2.default.table(_this5.tableName).get(id).delete().run(connection, function (error, result) {
          connection.close();
          if (error) return callback(true, 'Error happens while deleting record');
          callback(null, result);
        });
      }], function (error, data) {
        callback(error === null ? false : true, data);
      });
    }
  }, {
    key: 'fixture',
    value: function fixture(callback) {
      _async2.default.waterfall([_db2.default.connect, function (connection, callback) {
        _rethinkdb2.default.table('projects').insert({
          "name": 'tutorya'
        }).run(connection, function (err, result) {
          connection.close();
          if (err) return callback(true, "error happens while adding new polls");
          callback(null, result);
        });
      }], function (err, data) {
        callback(err === null ? false : true, data);
      });
    }
  }]);

  return projects;
}();

module.exports = projects;