import express from 'express'
let router = express.Router();



router.use('/proyectos', require('./projects'))
router.use('/services', require('./services'))
router.use('/profile', require('./profile'))

module.exports = router
