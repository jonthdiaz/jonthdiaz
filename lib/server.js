import express from 'express'

const app = express();
const port = process.env.PORT || 3000


app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/',(req, res)=>{
  res.render("index")
})

app.listen(port, (error)=>{
  if(error) return console.log("hubo un error "), process.exit();
  console.log(`server in port ${port}`);
})
