const express = require('express')
const router = express.Router()

const clienteController = require('../controller/clienteController')
const insumoController = require('../controller/insumoController');
const proveedorController = require('../controller/proveedorController');

// Ruta para mostrar los clientes | usando metodo GET
router.get('/', clienteController.mostrar)

// Ruta para registrar nuevo cliente | usando metodo POST
router.post('/add', clienteController.crear)

// Ruta para actualizar un cliente  existente
router.post('/edit', clienteController.editar)

// Ruta para eliminar un cliente del registro
router.get('/delete/:id', clienteController.eliminar)


// Rutas para Insumo
router.get('/insumo', insumoController.mostrar);
router.post('/insumo/add', insumoController.crear);
router.post('/insumo/edit', insumoController.editar);
router.get('/insumo/delete/:id', insumoController.eliminar);

// Rutas para Proveedor
router.get('/proveedor', proveedorController.mostrar);
router.get('/proveedor/listar', proveedorController.listar);
router.post('/proveedor/add', proveedorController.crear);
router.post('/proveedor/edit', proveedorController.editar);
router.get('/proveedor/delete/:id', proveedorController.eliminar);


module.exports = router