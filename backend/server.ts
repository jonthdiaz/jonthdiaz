import * as path from 'path'
import * as bodyparser from 'body-parser'
import * as express from 'express'
import * as async from 'async'
import * as r from 'rethinkdb'
import config  from './config'
import db from './db/db'

// const thinky = require('thinky')();
// const r = thinky.r;
const app = express();
const port = process.env.PORT || config.express_port;


app.set('view engine', 'pug');
app.use(express.static(__dirname + 'public'));
app.use(bodyparser.json())


app.get('/', (req, res)=>{
  res.render("index")
})

async.waterfall([
  function connect(callback){
    r.connect(config.rethinkdb, callback)
  },
  function(connection, callback){
    console.log("saludos jajjaja")
  }
], (error, connection)=>{
  if(error){
    console.log(error)
    process.exit(1)
    return;
  }
  console.log("connection to db done")

})
app.listen(port, (error)=>{
  if(error) return console.log("Hubo un error"), process.exit()
  console.log(`server listening in port ${port}`)
})
