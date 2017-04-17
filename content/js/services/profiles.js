export default{
  get(){
    return fetch('/api/profiles').then(
      response => response.ok ? response.json() : response.json().then(
        err => Promise.reject(err))
    )
  }
}
