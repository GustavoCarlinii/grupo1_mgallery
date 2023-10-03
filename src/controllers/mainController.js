const controller = {
    home(req, res){
        res.render("home")
    },
    carritoCompras(req, res){
        res.render("carritoCompras.ejs")
    },
    detalleProducto(req, res){
        res.render("detalleProducto.ejs")
    },
    formIngreso(req, res){
        res.render("formIngreso.ejs")
    },
    formRegistro(req, res){
        res.render("formRegistro.ejs")
    }
}

module.exports = controller;