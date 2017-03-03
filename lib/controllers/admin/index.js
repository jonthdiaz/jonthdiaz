import express from 'express'
let router = express.Router();



router.get('/', (req, res)=>{
  res.send('hola soy el admin again')

});
router.use('/proyectos', require('./projects'))

module.exports = router
