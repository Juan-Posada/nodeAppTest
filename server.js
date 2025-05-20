const bodyParser = require('body-parser')
const express    = require('express') // Se llama la dependencia del Framework
const morgan     = require('morgan')
const app        = express()

if (process.env.NODE_ENV !== 'production') {
    // Cargamos las variables de entorno
    require('dotenv').config()
}

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false})) // Permite recibir datos del formulario
app.use(bodyParser.json()) //Permite recibir solicitudes en json


// Rutas del API

// Rutas de usuarios para la V1 del API
app.use('/api/v1/users', require('./api/v1/user.routes'))
// Rutas de articulos para la V1 del API
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes'));

// app.get('/', (req, resp) => {
//     // req  = request  => Es la petición del usuario
//     // resp = response => Es la respuesta del servidor al usuario
//     resp.send({
//         'status' : 200, 
//         'message' : 'Prueba de API exitosa'
//     })
// })

// app.get('/saludos', (req, resp) => {
//     // req  = request  => Es la petición del usuario
//     // resp = response => Es la respuesta del servidor al usuario
    
//     resp.send({
//         'status' : 200, 
//         'message' : 'Hello ADSO 2873711'
//     })
// })

// app.post('/newUserTest', (req, resp) => {
//     console.log(req.body)

//     // const name = req.body.name
//     // const email = req.body.email
//     // const empresa = req.body.empresa
//     // const direccion = req.body.direccion
//     // const telefono = req.body.telefono
//     const{name, email, empresa, direccion, telefono} = req.body

//     console.log(`Nombre: ${name}`)
//     console.log(`Email: ${email}`)
//     console.log(`Télefono: ${telefono}`)
//     console.log(`Dirección: ${direccion}`)
//     console.log(`Empresa: ${empresa}`)

//     resp.send({
//         "status" : 201,
//         "message" : "Usuario creado con éxito"
//     })
// })

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})