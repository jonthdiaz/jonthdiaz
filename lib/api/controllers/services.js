import services from '../../models/services'
const _services = new services()

export default{
  get(req, res){
    let resp = {}
    _services.getAll((error, response)=>{
      if(error) return res.status(500).send(response)
      res.json(response)
    })
  }
}
