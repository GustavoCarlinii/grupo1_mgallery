const db = require('../database/models');
const { validationResult } = require('express-validator');

const productsController = {
    async index (req, res){
        let products = await db.ArtWorks.findAll();
        res.render('productos', {ArtWorks: products});
    },
    formNuevoProd(req, res){
        res.render('formNuevoProducto')
    },
    async detalleProducto(req, res){
        try {
            const artworkDetail = await db.ArtWorks.findByPk(req.params.id);
            if (!artworkDetail) {
                return res.status(404).json({ message: 'Obra no encontrada' });
            }
            res.render('detalleProducto', { ArtWorks: artworkDetail });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async store(req, res){
        try {
            const resultadoValidacion = validationResult(req);
            if (resultadoValidacion.errors.length > 0){
                return res.render('formNuevoProducto', {
                    errors: resultadoValidacion.mapped(),
                    oldData: req.body
                })
            }

            const artworkNew = {
                ...req.body,
                img: req.file?.filename || 'default.png',
            };
            await db.ArtWorks.create(artworkNew);
            return res.redirect('/products');
        } catch (error) {
            console.error(error);
            return res.status(500).send(error);
        }
    },
    async edit(req, res){
        try {
            const artworkEdit = await db.ArtWorks.findByPk(req.params.id);
            return res.render('formProductoEdit', { productEdit: artworkEdit, id: artworkEdit.id });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            const artworkId = req.body.id
            const resultadoValidacion = validationResult(req);
            if (resultadoValidacion.errors.length > 0){
                return res.render('formProductoEdit', {
                    errors: resultadoValidacion.mapped(),
                    productEdit: {...req.body, id: artworkId }
                })
            }

            await db.ArtWorks.update({ ...req.body, img: req.file?.filename || db.ArtWorks.img},{ where: { id: req.params.id } });
            return res.redirect('/products');
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    destroy(req, res){
        try {
            db.ArtWorks.destroy({ where: { id: req.params.id } });
            return res.redirect('/products');
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = productsController;