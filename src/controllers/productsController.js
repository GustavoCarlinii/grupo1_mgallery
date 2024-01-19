//const productsFilePath = path.join (__dirname, '') // entre '' se coloca la ruta del json en la ejercitación, pero para la base de datos??

const Artworks = require("../database/models/Artworks");

async function getProducts() {
    const arworks = await Artworks.findAll();
    return artworks;
}

const productsController = {
    index(req, res){
        res.render("home", {products: getProducts()}); //se renderiza la vista home.ejs con el listado de obras
    },
    carritoCompras(req, res){
        res.render('carritoCompras.ejs')
    },
    detalleProducto(req, res){
        const products = getProducts();
        const product = product.find(product => product.id == req.params.id);
        res.render('detalleProducto.ejs', {product});
    },
    productsAddEdit(req, res){
        res.render('productsAddEdit.ejs')
    },
    async store(req, res){
        const artworks = new Artworks ({
            name: req.body.name,
            price: req.body.price,
            user_id: req.user.id,
        });
        await artwork.save();
        res.redirect('/');
    },    
    async edit(req, res){
        const artwork = await Artworks.findByPk(req.params.id);

        artwork.name = req.body.name;
        artwork.price = req.body.price;

        await artwork.save();

        res.redirect('/');
    },
    async destroy(req, res){
        await Artworks.destroy({
            id: req.params.id,
          });
        
          res.redirect('/');
        }
    }

module.exports = productsController;