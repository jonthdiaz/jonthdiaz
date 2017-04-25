'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contact2 = require('../../models/contact');

var _contact3 = _interopRequireDefault(_contact2);

var _sendinblueApi = require('sendinblue-api');

var _sendinblueApi2 = _interopRequireDefault(_sendinblueApi);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendinObj = new _sendinblueApi2.default({
  'apiKey': _config2.default.keySendinblue,
  'timeout': 5000
});
var _contact = new _contact3.default();

exports.default = {
  post: function post(req, res) {
    var resp = {};

    try {

      _contact.create(req.body, function (error, response) {
        if (error) return res.status(400).json({ 'error': response });

        var message = {
          "to": { "jonthdiaz@gmail.com": "to whom!" },
          "from": [_config2.default.email, "from email!"],
          "subject": 'Nuevo contacto ' + req.body.name + ' ' + req.body.lastname,
          "html": "This is the <h1>HTML</h1>"
        };
        sendinObj.send_email(message, function (error, response) {});

        res.status(200).json({});
      });
    } catch (e) {
      res.status(400).json({
        'error': '' + e.message
      });
    }
  }
};