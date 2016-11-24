"use strict";
var bodyparser = require("body-parser");
var express = require("express");
var async = require("async");
var r = require("rethinkdb");
var config_1 = require("./config");
// const thinky = require('thinky')();
// const r = thinky.r;
var app = express();
var port = process.env.PORT || config_1.default.express_port;
app.set('view engine', 'pug');
app.use(express.static(__dirname + 'public'));
app.use(bodyparser.json());
app.get('/', function (req, res) {
    res.render("index");
});
async.waterfall([
    function connect(callback) {
        r.connect(config_1.default.rethinkdb, callback);
    },
    function (connection, callback) {
        console.log("saludos jajjaja");
    }
], function (error, connection) {
    if (error) {
        console.log(error);
        process.exit(1);
        return;
    }
    console.log("connection to db done");
});
app.listen(port, function (error) {
    if (error)
        return console.log("Hubo un error"), process.exit();
    console.log("server listening in port " + port);
});
//# sourceMappingURL=server.js.map