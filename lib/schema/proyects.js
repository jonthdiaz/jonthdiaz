export default class mproyects {
  constructor(data){
    this.name = data.name || '';
    this.description = data.description || '';
    this.order = data.order || 0;
    this.active = data.active || 'off';
    this.image = data.image || "";
  }
  valid(){
    let errors = []
    if(!this.name) errors.push({'field':'name'})
    if(!this.description) errors.push({'field':'description'})
    if(errors.length > 0) return {'success':false, "errors":errors}
    else return {'success':true, 'errors':errors}
  }
}
