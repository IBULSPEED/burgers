const PORT = 8080
const express  = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
//const { json } = require('stream/consumers')
//const {response, json} = require('express')
const {response} = require('dotenv').config()

// definition de l'utilisation des paquetages
const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//Récupération des données de la bd
app.get('/burgers', (req,res) =>{
    morgan('tiny');

    const url ='https://5cec0e11-0a16-49c7-869f-2616571689a9-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/burgers/collections/burgers_infos'
    const options = {
        method: 'GET',
        headers: {
            Accept: 'Application/json',
            'X-Cassandra-Token':'AstraCS:RZSavCtNOmazukPBjbxZlZiy:5c5a32d56692904fabb96e9efcb2ca76a326b9ca189c41acc51b34cfec3b82e4'
    },
    }
    fetch(url,options)
        .then(response=>response.json())
        .then(json=>res.json(json))
        .catch(error=>console.log('error:'+error))

})
// Verification du demarrage du backend
app.listen(PORT, () => 
    console.log('server a demarré sur le port ' + PORT)
)