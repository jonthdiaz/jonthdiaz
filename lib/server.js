import express from 'express'
import bodyParser from 'body-parser'
import r from 'rethinkdb'
import projects from './models/projects'
import session from 'express-session'
import cookieParse from 'cookie-parser'
import cloudinary from 'cloudinary'
import sendinblue from 'sendinblue-api'
import cloudinaryConf from './config'

const app = express();

app.use(cookieParse())
cloudinary.config({
  cloud_name: 'jonthdiaz',
  api_key: cloudinaryConf.cloudinary_api_key,
  api_secret: cloudinaryConf.cloudinary_api_secret
});


let http = require('http').Server(app);
let db = require('./models/db');


const port = process.env.PORT || 3000

app.locals.env = process.env;

let router = express.Router();

let dbModel = new db();

dbModel.setupDb();
app.set('view engine', 'pug');
app.set('views', './lib/views');
app.use(express.static('public'));
app.use(session({secret: 'jonthdiaz'}))
app.use('/uploads', express.static('uploads'));
// parse various different custom JSON types as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser({ keepExtensions: true, uploadDir: './public/uploads' }));



router.get('/', (req,res)=>{
  res.render('index')
})


app.use(require('./controllers'));

router.get('*', function(req, res){
  res.send('what???', 404);
});




// app.get('/',(req, res)=>{
//   res.render("lib/views/index")
// })

http.listen(port, (error)=>{
  if(error) return console.log("server error"), process.exit();
  console.log(`server in port ${port}`);
})
