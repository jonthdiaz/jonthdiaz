import express from 'express'

const app = express();

app.get('/',(req, res)=>{
  res.send("hola mundo desde el server");
})

app.listen(3000, (error)=>{
  if(error) return console.log("hubo un error "), process.exit();
  console.log("server in port 3000");
})
