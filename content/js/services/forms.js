export default{
  contactForm(data){
    return fetch('/api/forms/contact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(
      response => response.ok ? response.json() : response.json().then(
        err => {
          return {'error': err}
        })
    )
  }
}
