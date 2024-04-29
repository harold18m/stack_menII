const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/negocio2024'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

// "mongoose": "^8.2.3",

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log('!Conectado a MongoDB!')
})

module.exports = db