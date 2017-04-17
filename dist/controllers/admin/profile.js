'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _profile2 = require('../../models/profile');

var _profile3 = _interopRequireDefault(_profile2);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var storage = _multer2.default.diskStorage({
  destination: './uploads/profile/',
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); //Appending .jpg
  }
});

var upload = (0, _multer2.default)({ storage: storage });

var _profile = new _profile3.default();

router.get('/', function (req, res) {
  var resp = {};
  resp['menu_profile'] = true;
  resp['menu_profile_list'] = true;
  _profile.getAll(function (error, pollResponse) {
    if (error) {
      resp['error'] = true;
      resp['message_error'] = pollResponse;
    }
    resp['data'] = pollResponse;
    res.render('./admin/profile/', resp);
  });
});

router.get('/create', function (req, res) {
  var resp = {};
  resp['menu_profile'] = true;
  resp['menu_profile_create'] = true;
  res.render('./admin/profile/create', resp);
});

router.get('/:id', function (req, res) {
  var resp = {};
  _profile.getById(req.params.id, function (error, result) {
    if (error) {
      resp['success'] = false;
      resp['message'] = result;
    } else resp['profile'] = result;

    if (req.session.valid) {
      resp['success'] = req.session.valid;
      req.session.valid = null;
    }
    res.render('./admin/profile/create', resp);
  });
});

router.post('/crear', upload.single('picture'), function (req, res) {
  var resp = {};
  resp['menu_profile_create'] = true;
  if (req.file) req.body.picture = req.file.path;
  _profile.create(req.body, function (error, response) {
    if (error) {
      resp['success'] = false;
      resp['errors'] = response;
      resp['profile'] = req.body;
      res.render('./admin/profile/create', resp);
    } else {
      req.session.valid = true;
      res.redirect('/admin/profile/' + response.generated_keys[0]);
    }
  });
});

router.post('/update', upload.single('picture'), function (req, res) {
  var resp = {};
  resp['menu_profile_create'] = true;
  if (req.file) req.body.picture = req.file.path;

  _profile.getById(req.body.id, function (error, result) {
    var data = req.body;
    data.picture = req.body.picture || result.picture;

    _profile.update(req.body.id, data, function (error, response) {
      if (error) {
        resp['success'] = false;
        if (typeof response == "string") resp['message'] = response;else resp['errors'] = response;
        resp['profile'] = data;
        res.render('./admin/profile/create', resp);
      } else {
        resp['success'] = true;
        resp['profile'] = response;
        req.session.valid = true;
        res.redirect('/admin/profile/' + req.body.id);
      }
    });
  });
});

module.exports = router;