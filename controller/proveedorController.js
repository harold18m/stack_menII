const Proveedor = require("../model/Proveedor")

// Para mostrar datos de proveedores
module.exports.mostrar = (req, res) => {
    Proveedor.find({}, (error, proveedores ) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los proveedores'
            })
        }
        return res.render('proveedores', { proveedores: proveedores })
    })
}

// Para obtener todos los proveedores en formato JSON
module.exports.listar = (req, res) => {
    Proveedor.find({}, (error, proveedores) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al obtener los proveedores'
            });
        }
        return res.json(proveedores);
    });
};

// Para crear nuevo proveedor
module.exports.crear = (req, res) => {
    const proveedor = new Proveedor({
        nombrecia: req.body.nombre,
        // Agrega aquí otros campos según tu modelo
    })
    proveedor.save(function (error, proveedor) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el proveedor'
            })
        }

        res.redirect('/proveedor')
    })
}

// Para actualizar un proveedor existente
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar.trim();
    // Agrega aquí otros campos según tu modelo

    Proveedor.findByIdAndUpdate(id, {nombre}, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al actualizar el proveedor',
            });
        }
        res.redirect('/proveedor')
    })
}

// Para eliminar un proveedor de nuestro registro
module.exports.eliminar = (req, res) => {
    const id = req.params.id
    Proveedor.findByIdAndRemove(id, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminado el proveedor'
            })
        }
        res.redirect('/proveedor')
    })
}