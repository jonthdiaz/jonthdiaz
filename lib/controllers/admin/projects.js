import express from 'express'
let router = express.Router();
import projects from '../../models/projects'
import multer from 'multer'

var uploading = multer({
  dest: __dirname + '../public/uploads/proyects]/',
})


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
router.get('/crear', (req, res)=>{
  let resp = {}
  resp['menu_proyects_create'] = true
  res.render('./admin/projects/create', resp)
});
router.post('/crear', uploading.single(), function(req, res, next){
  let resp = {}
  resp['menu_proyects_create'] = true
  debugger
  _proyects.create(req.body, function(error, response){
    if (error){
      resp['success'] = false;
      resp['errors'] = response
    } else resp['success'] = true;
    res.render('./admin/projects/create', resp)
  })

});

module.exports = router
