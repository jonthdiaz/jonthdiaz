export default{
  getAll(){
    return fetch('/api/services').then(
      response => response.ok ? response.json() : response.json().then(
        err => Promise.reject(err))
    )
  }
}
