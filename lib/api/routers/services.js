import express from 'express'
let router = express.Router()
import ctrlservices from '../controllers/services'


router.route('/')
  .get(ctrlservices.get)


module.exports = router
