const controller = {
    home(req, res){
        res.render("home")
    },
    carritoCompras(req, res){
        res.render("carritoCompras")
    },
    detalleProducto(req, res){
        res.render("detalleProducto")
    },
    formIngreso(req, res){
        res.render("formIngreso")
    },
    formRegistro(req, res){
        res.render("formRegistro")
    }
}

module.exports = controller;