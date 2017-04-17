import express from 'express'
let router = express.Router()
import ctrlprojects from '../controllers/projects'


router.route('/')
  .get(ctrlprojects.get)


module.exports = router
