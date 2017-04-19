import express from 'express'
let router = express.Router();


router.use('/', require('./home'));
router.use('/admin', require('./admin'));
router.use('/api', require('../api'))

router.get('/test', (req, res)=>{
  debugger
  setTimeout(()=>{
    console.log("esto es una prueba")
  }, 600000)
});


module.exports = router
