const productsController = {

    carritoCompras(req, res){
        res.render('carritoCompras.ejs')
    },
    detalleProducto(req, res){
        res.render('detalleProducto.ejs')
    },
    productsAddEdit(req, res){
        res.render('productsAddEdit.ejs')
    }
};

module.exports = productsController;