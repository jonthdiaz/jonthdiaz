"use strict";
var thinky = require('thinky')();
var r = thinky.r;
var config_1 = require("../config");
var db = (function () {
    function db() {
    }
    db.create = function (connection, callback) {
        r.dbList().contains(config_1.default.rethinkdb['db']).do(function (containsDb) {
            return r.branch(containsDb, { created: 0 }, r.created(config_1.default.rethinkdb['db']));
        }).run(connection, function (err) {
            callback(err, connection);
        });
    };
    return db;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = db;
//# sourceMappingURL=db.js.map