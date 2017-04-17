import projects from '../../models/projects'
const _projects = new projects()

export default{
  get(req, res){
    let resp = {}
    _projects.getAllProjects((error, response)=>{
      if(error) return res.status(500).send(response)
      res.json(response)
    })
  }
}
