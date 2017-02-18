import express from 'express'
import bodyparser from 'body-parser'
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




router.get('/', (req,res)=>{
  res.render('index')
})


app.use(bodyparser.json())
app.use(require('./controllers'));



// app.get('/',(req, res)=>{
//   res.render("lib/views/index")
// })

http.listen(port, (error)=>{
  if(error) return console.log("server error"), process.exit();
  console.log(`server in port ${port}`);
})
