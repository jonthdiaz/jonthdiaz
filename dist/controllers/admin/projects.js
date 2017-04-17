'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _projects = require('../../models/projects');

var _projects2 = _interopRequireDefault(_projects);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var storage = _multer2.default.diskStorage({
  destination: './uploads/projects/',
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); //Appending .jpg
  }
});

var upload = (0, _multer2.default)({ storage: storage });

var _proyects = new _projects2.default();
router.get('/', function (req, res) {
  var resp = {};
  resp['menu_proyects_list'] = true;
  _proyects.getAllProjects(function (error, pollResponse) {
    if (error) {
      resp['error'] = true;
      resp['message_error'] = pollResponse;
    }
    resp['data'] = pollResponse;
    res.render('./admin/projects/', resp);
  });
});

router.get('/crear/', function (req, res) {
  var resp = {};
  resp['menu_proyects_create'] = true;
  res.render('./admin/projects/create', resp);
});

router.get('/:id', function (req, res) {
  var resp = {};
  _proyects.getById(req.params.id, function (error, result) {
    if (error) {
      resp['success'] = false;
      resp['message'] = result;
    } else resp['project'] = result;

    if (req.session.valid) {
      resp['success'] = req.session.valid;
      req.session.valid = null;
    }
    res.render('./admin/projects/create', resp);
  });
});

router.post('/crear', upload.single('image'), function (req, res) {
  var resp = {};
  resp['menu_proyects_create'] = true;
  if (req.file) req.body.image = req.file.path;
  _proyects.create(req.body, function (error, response) {
    if (error) {
      resp['success'] = false;
      resp['errors'] = response;
      res.render('./admin/projects/create', resp);
    } else {
      req.session.valid = true;
      res.redirect('/admin/proyectos/' + response.generated_keys[0]);
    }
  });
});
router.post('/update', upload.single('image'), function (req, res) {
  var resp = {};
  resp['menu_proyects_create'] = true;

  if (req.file) req.body.image = req.file.path;

  _proyects.getById(req.body.id, function (error, result) {
    var data = req.body;
    data.image = req.body.image || result.image;

    _proyects.update(req.body.id, data, function (error, response) {
      if (error) {
        resp['success'] = false;
        if (typeof response == "string") resp['message'] = response;else resp['errors'] = response;
        resp['project'] = data;
        res.render('./admin/projects/create', resp);
      } else {
        resp['success'] = true;
        resp['project'] = response;
        req.session.valid = true;
        res.redirect('/admin/proyectos/' + req.body.id);
      }
    });
  });
});
router.post('/delete', function (req, res) {
  var resp = {};
  var id = req.body.id;
  _proyects.delete(id, function (error, response) {
    res.redirect('/admin/proyectos');
  });
});

module.exports = router;