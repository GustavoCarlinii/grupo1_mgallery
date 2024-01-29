const db = require('../database/models');

const userController = {
    formIngreso(req, res){
        res.render('formIngreso')
    },
    formRegistro(req, res){
        res.render('formRegistro')
    },
    async store(req, res){
        try {
            const user = {
                ...req.body         
           };
            await db.User.create(user);
            return res.redirect('/user/ingreso')
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async edit(req, res){
        try{
            const userEdit = await db.User.findByPk(req.params.id);
            return res.render('formRegistroEdit', {User: userEdit});
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await db.User.update({ ...req.body }, { where: { id: req.params.id } });
            return res.redirect('/user/registro');
        } catch (error) {
            return res.status(500).send(error);
        }
    },
}

module.exports = userController;