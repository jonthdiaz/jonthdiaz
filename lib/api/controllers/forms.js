import contact from '../../models/contact'
import sendinblue from 'sendinblue-api'
import config from '../../config'

let sendinObj = new sendinblue({
  'apiKey': config.keySendinblue,
  'timeout': 5000
})
const _contact = new contact()

export default{
  post(req, res){
    let resp = {}

    try {

      _contact.create(req.body,(error, response)=>{
        if(error) return res.status(400).json({'error': response})

        let message = {
            "to" : {"jonthdiaz@gmail.com":"to whom!"},
        		"from" : [config.email, "from email!"],
        		"subject" : `Nuevo contacto ${req.body.name} ${req.body.lastname}`,
        		"html" : "This is the <h1>HTML</h1>"
        	}
      	sendinObj.send_email(message, function(error, response){
          })

        res.status(200).json({})
      })
    } catch (e) {
      res.status(400).json({
        'error': `${e.message}`,
      })
    }
  }
}
