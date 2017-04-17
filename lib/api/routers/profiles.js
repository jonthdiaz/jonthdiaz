import express from 'express'
let router = express.Router()
import ctrlprofiles from '../controllers/profiles'


router.route('/')
  .get(ctrlprofiles.get)


module.exports = router
