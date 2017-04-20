'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

var _projects = require('./models/projects');

var _projects2 = _interopRequireDefault(_projects);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cookieParser2.default)());

_cloudinary2.default.config({
  cloud_name: 'jonthdiaz',
  api_key: '248673179972386',
  api_secret: '0fNaTfyEuMIuS2DRZZRwCR5Vdy0'
});

var http = require('http').Server(app);
var db = require('./models/db');

var port = process.env.PORT || 3000;

app.locals.env = process.env;

var router = _express2.default.Router();

var dbModel = new db();

dbModel.setupDb();
app.set('view engine', 'pug');
app.set('views', './lib/views');
app.use(_express2.default.static('public'));
app.use((0, _expressSession2.default)({ secret: 'jonthdiaz' }));
app.use('/uploads', _express2.default.static('uploads'));
// parse various different custom JSON types as JSON
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _bodyParser2.default)({ keepExtensions: true, uploadDir: './public/uploads' }));

router.get('/', function (req, res) {
  res.render('index');
});

app.use(require('./controllers'));

router.get('*', function (req, res) {
  res.send('what???', 404);
});

// app.get('/',(req, res)=>{
//   res.render("lib/views/index")
// })

http.listen(port, function (error) {
  if (error) return console.log("server error"), process.exit();
  console.log('server in port ' + port);
});