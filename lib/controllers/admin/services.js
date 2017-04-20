import express from 'express'
let router = express.Router();
import services from '../../models/services'
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

const _services = new services();
router.get('/', (req, res)=>{
  let resp = {}
  resp['menu_services_list'] = true
  _services.getAll((error, pollResponse)=>{
    if(error){
      resp['error'] = true
      resp['message_error'] = pollResponse
    }
    resp['data'] = pollResponse
    res.render('./admin/services/', resp)
  })
});

router.get('/crear/', (req, res)=>{
  let resp = {}
  resp['menu_services_create'] = true
  res.render('./admin/services/create', resp)
});

router.get('/:id', (req, res)=>{
  let resp = {}
  _services.getById(req.params.id, function(error, result){
    if(error){
      resp['success'] = false;
      resp['message'] = result
    }else resp['service'] = result

    if(req.session.valid){
      resp['success'] =  req.session.valid
      req.session.valid = null
    }
    res.render('./admin/services/create', resp)
  })

})


router.post('/crear', upload.single('image'), function(req, res){
  let resp = {}
  resp['menu_services_create'] = true
  if(req.file) req.body.image = req.file.url
  _services.create(req.body, function(error, response){
    if (error){
      resp['success'] = false;
      resp['errors'] = response
      res.render('./admin/services/create', resp)
    }else{
      req.session.valid = true;
      res.redirect(`/admin/services/${response.generated_keys[0]}`)
    }
  })
});
router.post('/update', upload.single('image'), function(req, res){
  let resp = {}
  resp['menu_services_create'] = true

  if(req.file) req.body.image = req.file.url

  _services.getById(req.body.id, function(error, result){
    let data = req.body
    data.image = req.body.image || result.image

    _services.update(req.body.id, data, function(error, response){
      if (error){
        resp['success'] = false;
        if(typeof(response) == "string") resp['message'] = response
        else resp['errors'] = response
        resp['service']  = data
        res.render('./admin/services/create', resp)
      } else {
        resp['success'] = true;
        resp['service'] = response
        req.session.valid = true
        res.redirect(`/admin/services/${req.body.id}`)
      }
  })
})

});
router.post('/delete', function(req,res){
  let resp = {}
  let id = req.body.id
  _services.delete(id, function(error, response){
    res.redirect('/admin/services')
  })

})


router.get('*', function(req, res){
  res.send('what???', 404);
});

module.exports = router
