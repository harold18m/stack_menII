const Cliente = require("../model/Cliente")


// Para mostrar datos de clientes
module.exports.mostrar = (req, res) => {
    Cliente.find({}, (error, clientes ) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los clientes'
            })
        }
        return res.render('index', { clientes: clientes })
    })
}

// Para crear nuevo cliente
module.exports.crear = (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion
    })
    cliente.save(function (error, cliente) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear al cliente'
            })
        }

        res.redirect('/')
    })
}

// Para actualizar un cliente existe sus datos
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar.trim();
    const apellidos = req.body.apellidos_editar.trim();
    const direccion = req.body.direccion_editar.trim();

    Cliente.findByIdAndUpdate(id, {nombre, apellidos, direccion}, (error, cliente) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al actualizar el cliente',
            });
        }
        res.redirect('/')
    })
}

// Para eliminar un cliente de nuestro registro
module.exports.eliminar = (req, res) => {
    const id = req.params.id
    Cliente.findByIdAndRemove(id, (error, cliente) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminado al cliente'
            })
        }
        res.redirect('/')
    })
}