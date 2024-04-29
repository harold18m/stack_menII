const express = require('express')
const app = express()

// Requerir base de datos mongoDB
const db = require('./db')

// Importamos rutas de cliente
const cliente = require('./routes/clientes')

app.set('view engine', 'ejs')

app.use(express.urlencoded( { extended: true }))
app.use(express.json())

app.use(express.static('public'))

// Usamos las rutas de cliente
app.use('/', cliente);

// Iniciamos el servidor
app.listen(5000, () => {
    console.log('!Server UP! en http://localhost:5000')
})