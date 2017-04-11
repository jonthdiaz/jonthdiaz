import express from 'express'
import bodyParser from 'body-parser'
import r from 'rethinkdb'
import projects from './models/projects'


let _projects = new projects();

const app = express();

let http = require('http').Server(app);
let db = require('./models/db');


const port = process.env.PORT || 3000
let router = express.Router();

let dbModel = new db();

dbModel.setupDb();
app.set('view engine', 'pug');
app.set('views', './lib/views');
app.use(express.static('public'));
// parse various different custom JSON types as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));



router.get('/', (req,res)=>{
  res.render('index')
})



app.use(require('./controllers'));



// app.get('/',(req, res)=>{
//   res.render("lib/views/index")
// })

http.listen(port, (error)=>{
  if(error) return console.log("server error"), process.exit();
  console.log(`server in port ${port}`);
})
