const db = require('../database/models');

const productsController = {
    async index (req, res){
        let products = await db.ArtWorks.findAll();
        res.render('productos', {products});
        },
    formNuevoProd(req, res){
        res.render('formNuevoProducto')
    },
    async detalleProducto(req, res){
        try {
            const artworkDetail = await db.Artworks.findByPk(req.params.id);
            if (!artworkDetail) {
                return res.status(404).json({ message: 'Pelicula no encontrada' });
            }
            res.render('detalleProducto', { artworkDetail });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async store(req, res){
        try {
            const artworkNew = {
                ...req.body         
            };
            console.log(artworkNew);
            await db.Artworks.create(artworkNew);
            return res.redirect('/products/register');
        } catch (error) {
            console.error(error);
            return res.status(500).send(error);
        }
    },
    async edit(req, res){
        try {
            const artworkEdit = await db.Artworks.findByPk(req.params.id);
            return res.render('formNuevoProducto', { Artworks: artworkEdit });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await db.Artworks.update({ ...req.body }, { where: { id: req.params.id } });
            return res.redirect('/');
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async destroy(req, res){
        try {
            await db.Artworks.destroy({ where: { id: req.params.id } });
            return res.redirect('/');
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = productsController;