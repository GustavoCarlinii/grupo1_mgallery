const { validationResult } = require('express-validator');
const db = require('../database/models');

const userController = {
    formIngreso(req, res){
        res.render('formIngreso')
    },
    formRegistro(req, res){
        res.render('formRegistro')
    },
    profile (req, res){
        const user = req.session.user;
        return res.render('profile', {user});
    },
    login (req, res){
        req.session.user = {
            timestamp: Date.now(),
            ...req.body,    //VER SI ESTO ES POSIBLE O SI SE DEBE DETALLAR UNO X UNo. EJ: name: req.body.name
        }
        res.cookie('email', req.body.email, {maxAge: 120000}); //Si falla el maxAge sacarlo, no es obligatorio
        return res.redirect('/profile');
    },
    logout (req, res){
        req.session.user = undefined;
        res.clearCookie('email');
        return res.redirect('/');
    },
    async store(req, res){
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                const existingUser = await db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                });
        if (existingUser) {
                    return res.render('formRegistro', {
                        errors: {
                            email: {
                                msg: "El email ya se encuentra registrado"
                            }
                        },
                        oldData: req.body
                    });
        } else {
                const user = { ...req.body };
                console.log(user);
                await db.User.create(user);
                return res.redirect('/user/ingreso');
                }
            } catch (error) {
                res.render('formRegistro', {
                    errors: {
                        global: {
                            msg: "Hubo un error al crear el usuario"
                        }
                    },
                    oldData: req.body
                });
            }
        } else {
            console.log("errores del formulario", errors.mapped());
            return res.render('formRegistro', {
                errors: errors.mapped(),
                oldData: req.body,
            });
        }
        console.log('Errores del formulario:', req.locals.errors); 
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