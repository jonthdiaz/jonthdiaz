import express from 'express'
let router = express.Router()


router.use('/projects', require('./routers/projects'))
router.use('/services', require('./routers/services'))
router.use('/profiles', require('./routers/profiles'))


module.exports = router
