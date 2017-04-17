import profile from '../../models/profile'
const _profile = new profile()

export default{
  get(req, res){
    let resp = {}
    _profile.getByUsername('jonthdiaz',(error, response)=>{
      if(error) return res.status(500).send(response)
      res.json(response)
    })
  }
}
