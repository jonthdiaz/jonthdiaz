import express from 'express'
let router = express.Router();
import profile from '../../models/profile'
import multer from 'multer'
import path from 'path'
import cloudinary from 'cloudinary'
import config from '../../config'
import cloudinaryStorage from 'multer-storage-cloudinary'


var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: config.folder_cloudinary,
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname) //Appending .jpg
  }
})

const upload = multer({ storage: storage })


const _profile = new profile();

router.get('/', (req, res)=>{
  let resp = {}
  resp['menu_profile'] = true
  resp['menu_profile_list'] = true
  _profile.getAll((error, pollResponse)=>{
    if(error){
      resp['error'] = true
      resp['message_error'] = pollResponse
    }
    resp['data'] = pollResponse
    res.render('./admin/profile/', resp)
  })
});

router.get('/create', (req, res)=>{
  let resp = {}
  resp['menu_profile'] = true
  resp['menu_profile_create'] = true
  res.render('./admin/profile/create', resp)
});

router.get('/:id', (req, res)=>{
  let resp = {}
  _profile.getById(req.params.id, function(error, result){
    if(error){
      resp['success'] = false;
      resp['message'] = result
    }else resp['profile'] = result

    if(req.session.valid){
      resp['success'] =  req.session.valid
      req.session.valid = null
    }
    res.render('./admin/profile/create', resp)
  })
})

router.post('/crear', upload.single('picture'), function(req, res){
  let resp = {}
  resp['menu_profile_create'] = true
  if(req.file) req.body.picture = req.file.url
  _profile.create(req.body, function(error, response){
    if (error){
      resp['success'] = false;
      resp['errors'] = response
      resp['profile'] = req.body
      res.render('./admin/profile/create', resp)
    }else{
      req.session.valid = true;
      res.redirect(`/admin/profile/${response.generated_keys[0]}`)
    }
  })
});

router.post('/update', upload.single('picture'), function(req, res){
  let resp = {}
  resp['menu_profile_create'] = true
  if(req.file) req.body.picture = req.file.url

  _profile.getById(req.body.id, function(error, result){
    let data = req.body
    data.picture = req.body.picture || result.picture

    _profile.update(req.body.id, data, function(error, response){
      if (error){
        resp['success'] = false;
        if(typeof(response) == "string") resp['message'] = response
        else resp['errors'] = response
        resp['profile']  = data
        res.render('./admin/profile/create', resp)
      } else {
        resp['success'] = true;
        resp['profile'] = response
        req.session.valid = true
        res.redirect(`/admin/profile/${req.body.id}`)
      }
  })
})

});

module.exports = router
