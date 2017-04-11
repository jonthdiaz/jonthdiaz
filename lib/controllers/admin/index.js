import express from 'express'
let router = express.Router();



router.use('/proyectos', require('./projects'))

module.exports = router
