'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _services2 = require('../../models/services');

var _services3 = _interopRequireDefault(_services2);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var storage = _multer2.default.diskStorage({
  destination: './uploads/services/',
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); //Appending .jpg
  }
});

var upload = (0, _multer2.default)({ storage: storage });

var _services = new _services3.default();
router.get('/', function (req, res) {
  var resp = {};
  resp['menu_services_list'] = true;
  _services.getAll(function (error, pollResponse) {
    if (error) {
      resp['error'] = true;
      resp['message_error'] = pollResponse;
    }
    resp['data'] = pollResponse;
    res.render('./admin/services/', resp);
  });
});

router.get('/crear/', function (req, res) {
  var resp = {};
  resp['menu_services_create'] = true;
  res.render('./admin/services/create', resp);
});

router.get('/:id', function (req, res) {
  var resp = {};
  _services.getById(req.params.id, function (error, result) {
    if (error) {
      resp['success'] = false;
      resp['message'] = result;
    } else resp['service'] = result;

    if (req.session.valid) {
      resp['success'] = req.session.valid;
      req.session.valid = null;
    }
    res.render('./admin/services/create', resp);
  });
});

router.post('/crear', upload.single('image'), function (req, res) {
  var resp = {};
  resp['menu_services_create'] = true;
  if (req.file) req.body.image = req.file.path;
  _services.create(req.body, function (error, response) {
    if (error) {
      resp['success'] = false;
      resp['errors'] = response;
      res.render('./admin/services/create', resp);
    } else {
      req.session.valid = true;
      res.redirect('/admin/services/' + response.generated_keys[0]);
    }
  });
});
router.post('/update', upload.single('image'), function (req, res) {
  var resp = {};
  resp['menu_services_create'] = true;

  if (req.file) req.body.image = req.file.path;

  _services.getById(req.body.id, function (error, result) {
    var data = req.body;
    data.image = req.body.image || result.image;

    _services.update(req.body.id, data, function (error, response) {
      if (error) {
        resp['success'] = false;
        if (typeof response == "string") resp['message'] = response;else resp['errors'] = response;
        resp['service'] = data;
        res.render('./admin/services/create', resp);
      } else {
        resp['success'] = true;
        resp['service'] = response;
        req.session.valid = true;
        res.redirect('/admin/services/' + req.body.id);
      }
    });
  });
});
router.post('/delete', function (req, res) {
  var resp = {};
  var id = req.body.id;
  _services.delete(id, function (error, response) {
    res.redirect('/admin/services');
  });
});

router.get('*', function (req, res) {
  res.send('what???', 404);
});

module.exports = router;