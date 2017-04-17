export default class mprofile{
  constructor(data){
    this.name = data.name || ''
    this.lastname = data.lastname || ''
    this.fullname = data.fullname || ''
    this.username = data.username || ''
    this.description = data.description || ''
    this.about_me = data.about_me || ''
    this.picture = data.picture || ''
    this.active = data.active || 'off'
    this.phone = data.phone || ''
    this.email = data.email || ''
    this.facebook = data.facebook || ''
    this.histagram = data.histagram || ''
    this.twitter = data.twitter || ''
    this.linkedin = data.linkedin || ''
  }
  valid(){
    let errors = []
    if(!this.name) errors.push({'field': 'name'})
    if(!this.lastname) errors.push({'field': 'lastname'})
    if(!this.username) errors.push({'field': 'username'})
    if(!this.description) errors.push({'field': 'description'})
    if(!this.about_me) errors.push({'field': 'about_me'})
    if(!this.picture) errors.push({'field': 'picture'})
    if(!this.phone) errors.push({'field': 'phone'})
    if(!this.email) errors.push({'field': 'email'})
    if(errors.length > 0) return {'success':false, "errors":errors}
    else return {'success':true, 'errors':errors}
  }
  getfullname(){
    return `${this.name} ${this.lastname}`
  }
}
