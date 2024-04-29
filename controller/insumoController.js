Insumo = require("../model/Insumo")

// Para mostrar datos de insumos
module.exports.mostrar = (req, res) => {
    Insumo.find({}, (error, insumos ) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los insumos'
            })
        }
        return res.render('insumos', { insumos: insumos })
    })
}

// Para crear nuevo insumo
module.exports.crear = (req, res) => {
    const insumo = new Insumo({
        nominsumo: req.body.nominsumo,
        idProveedor: req.body.idProveedor,
        preUni: req.body.preUni,
        stock: req.body.stock
    })
    insumo.save(function (error, insumo) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el insumo'
            })
        }

        res.redirect('/insumo')
    })
}

// Para actualizar un insumo existente
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nominsumo = req.body.nominsumo_editar.trim();
    const idProveedor = req.body.idProveedor_editar.trim();
    const preUni = req.body.preUni_editar.trim();
    const stock = req.body.stock_editar.trim();

    Insumo.findByIdAndUpdate(id, {nominsumo, idProveedor, preUni, stock}, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al actualizar el insumo',
            });
        }
        res.redirect('/insumo')
    })
}

// Para eliminar un insumo de nuestro registro
module.exports.eliminar = (req, res) => {
    const id = req.params.id
    Insumo.findByIdAndRemove(id, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminado el insumo'
            })
        }
        res.redirect('/insumo')
    })
}