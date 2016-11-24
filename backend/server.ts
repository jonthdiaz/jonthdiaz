import * as path from 'path'
import * as bodyparse from 'body-parser'
import * as express from 'express'

const app = express();
const port = process.env.PORT || 3000

app.set('view engine', 'pug');
app.use(express.static('public'))


app.get('/', (req, res)=>{
  res.render("index")
})

app.listen(port, (error)=>{
  if(error) return console.log("Hubo un error"), process.exit()
  console.log(`server listening in port ${port}`)
})
