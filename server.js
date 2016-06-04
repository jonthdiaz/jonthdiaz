var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send("hola mundo")
})

app.listen(3000, function(error){
  if (error) return console.log("hubo un error "), process.exit()

  console.log("project init in port 3000")

})
