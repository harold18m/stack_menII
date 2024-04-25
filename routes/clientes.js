const express = require('express')
const router = express.Router()

const clienteController = require('../controller/clienteController')

// Ruta para mostrar los clientes | usando metodo GET
router.get('/', clienteController.mostrar)

// Ruta para registrar nuevo cliente | usando metodo POST
router.post('/add', clienteController.crear)

// Ruta para actualizar un cliente  existente
router.post('/edit', clienteController.editar)

// Ruta para eliminar un cliente del registro
router.get('/delete/:id', clienteController.eliminar)

module.exports = router