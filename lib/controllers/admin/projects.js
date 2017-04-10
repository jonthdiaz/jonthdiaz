import express from 'express'
let router = express.Router();
import projects from '../../models/projects'


// router.route('/')
//   .get((req,res)=>{
//     let _proyects = new projects();
//     _proyects.getAllProjects((error, pollResponse)=>{
//       if(error) return res.json({'responseCode': 1, "responseDesc": pollResponse})
//       res.json({'responseCode': 0, 'responseDesc': 'success', 'data':pollResponse})
//     })
//   })
router.get('/', (req, res)=>{
  let resp = {}
  resp['menu_proyects_list'] = true
  let _proyects = new projects();
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
router.post('/crear', (req, res)=>{
  debugger
  let resp = {}
  resp['menu_proyects_create'] = true
  res.render('./admin/projects/create', resp)

});

module.exports = router
