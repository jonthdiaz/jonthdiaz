import express from 'express'
let router = express.Router();
import projects from '../../models/projects'
import multer from 'multer'
import path from 'path'


var storage = multer.diskStorage({
  destination: './uploads/projects/',
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname) //Appending .jpg
  }
})

const upload = multer({ storage: storage })


// router.route('/')
//   .get((req,res)=>{
//     let _proyects = new projects();
//     _proyects.getAllProjects((error, pollResponse)=>{
//       if(error) return res.json({'responseCode': 1, "responseDesc": pollResponse})
//       res.json({'responseCode': 0, 'responseDesc': 'success', 'data':pollResponse})
//     })
//   })

const _proyects = new projects();
router.get('/', (req, res)=>{
  let resp = {}
  resp['menu_proyects_list'] = true
  _proyects.getAllProjects((error, pollResponse)=>{
    if(error){
      resp['error'] = true
      resp['message_error'] = pollResponse
    }
    resp['data'] = pollResponse
    res.render('./admin/projects/', resp)
  })
});

router.get('/:id', (req, res)=>{
  let resp = {}
  _proyects.getById(req.params.id, function(error, result){
    if(error){
      resp['success'] = false;
      resp['message'] = result
    }else resp['project'] = result

    if(req.session.valid){
      resp['success'] =  req.session.valid
      req.session.valid = null
    }
    res.render('./admin/projects/create', resp)
  })

})

router.get('/crear', (req, res)=>{
  let resp = {}
  resp['menu_proyects_create'] = true
  res.render('./admin/projects/create', resp)
});


router.post('/crear', upload.single('image'), function(req, res){
  let resp = {}
  resp['menu_proyects_create'] = true
  if(req.file) req.body.image = req.file.path
  _proyects.create(req.body, function(error, response){
    if (error){
      resp['success'] = false;
      resp['errors'] = response
      res.render('./admin/projects/create', resp)
    }else{
      req.session.valid = true;
      res.redirect(`/admin/proyectos/${response.generated_keys[0]}`)
    }
  })
});
router.post('/update', upload.single('image'), function(req, res){
  let resp = {}
  resp['menu_proyects_create'] = true

  if(req.file) req.body.image = req.file.path

  _proyects.getById(req.body.id, function(error, result){
    let data = req.body
    data.image = req.body.image || result.image

    _proyects.update(req.body.id, data, function(error, response){
      if (error){
        resp['success'] = false;
        if(typeof(response) == "string") resp['message'] = response
        else resp['errors'] = response
        resp['project']  = data
        res.render('./admin/projects/create', resp)
      } else {
        resp['success'] = true;
        resp['project'] = response
        req.session.valid = true
        res.redirect(`/admin/proyectos/${req.body.id}`)
      }
  })
})

});
router.post('/delete', function(req,res){
  let resp = {}
  let id = req.body.id
  _proyects.delete(id, function(error, response){
    res.redirect('/admin/proyectos')
  })

})


router.get('*', function(req, res){
  res.send('what???', 404);
});

module.exports = router
