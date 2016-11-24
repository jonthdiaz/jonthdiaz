"use strict";
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render("index");
});
app.listen(port, function (error) {
    if (error)
        return console.log("Hubo un error"), process.exit();
    console.log("server listening in port " + port);
});
//# sourceMappingURL=server.js.map