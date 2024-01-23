const Artworks = require('../database/models');

const productsController = {
    /*index(req, res){
        res.render("home", {products: getProducts()}); //se renderiza la vista home.ejs con el listado de obras. Modificar
    },*/
    formNuevoProd(req, res){
        console.log(1);
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
            return res.redirect('/');
        } catch (error) {
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