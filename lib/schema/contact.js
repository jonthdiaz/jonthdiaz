export default class contact{
  constructor(data){
    this.name = data.name || ''
    this.email = data.email || ''
    this.comment = data.comment || ''
    this.phone = data.phone || ''
  }
  valid(){
    let errors = []
    if(!this.name) errors.push({'field': 'name'})
    if(!this.email) errors.push({'field': 'email'})
    if(!this.comment) errors.push({'field': 'comment'})
    if(!this.phone) errors.push({'field': 'phone'})
    if(errors.length > 0) return {'success':false, "errors":errors}
    else return {'success':true, 'errors':errors}

  }
}
