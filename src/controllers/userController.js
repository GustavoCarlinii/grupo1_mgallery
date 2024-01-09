const userController = {
    formIngreso(req, res){
        res.render("formIngreso.ejs")
    },
    formRegistro(req, res){
        res.render("formRegistro.ejs")
    }
}

module.exports = userController;