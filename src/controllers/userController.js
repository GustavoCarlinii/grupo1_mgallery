const db = require('../database/models');

const userController = {
    formIngreso(req, res){
        res.render("formIngreso.ejs")
    },
    formRegistro(req, res){
        res.render("formRegistro.ejs")
    },
    async store(req, res){
        try {
            const user = {
                ...req.body         
           };
            console.log(user);
            await db.User.create(user);
            return res.redirect('/user/ingreso')
        } catch (error) {
            return res.status(500).send(error);
        }

    },
    async edit(req, res){
        try{
            const userEdit = db.User.findByPk(req.params.id);
            //const userEdit = db.User.findOne({where: {id: req.params.id}});
            //const userEdit = db.User.findOne({where: {first_name: "Lautaro"}});
            console.log(userEdit);
            return res.render('formRegistroEdit.ejs', {User: userEdit});
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await db.User.update({ ...req.body }, { where: { id: req.params.id } });
            return res.redirect('/registro');
        } catch (error) {
            return res.status(500).send(error);
        }
    },
}

module.exports = userController;