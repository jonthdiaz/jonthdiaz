import express from 'express'
let router = express.Router()
import ctrlforms from '../controllers/forms'


router.route('/contact')
  .post(ctrlforms.post)


module.exports = router
