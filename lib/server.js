import express from 'express'
import bodyparser from 'body-parser'

const app = express();
const port = process.env.PORT || 3000


app.set('view engine', 'pug');
console.log(`${__dirname} dir name`)
app.use(express.static('public'));
app.use(bodyparser.json())


app.get('/',(req, res)=>{
  res.render("index")
})

app.listen(port, (error)=>{
  if(error) return console.log("Erroddfsr in server  "), process.exit();
  console.log(`server in port ${port}`);
})