import express from 'express'
let router = express.Router();


router.use('/', require('./home'));
router.use('/admin', require('./admin'));
router.use('/api', require('../api'))



module.exports = router
