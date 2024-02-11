const { validationResult } = require('express-validator');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { log } = require('console');

const userController = {
    formIngreso(req, res){
        res.render('formIngreso')
    },
    formRegistro(req, res){
        return res.render('formRegistro')
    },
    profile (req, res){
        console.log(req.cookies.emailUsuario);
        res.render('profile', {
            user: req.session.userLogged
        });
    },
    async loginProcess (req, res){
        let userLogin = await db.User.findOne({ where: { email: req.body.email } });
            if (userLogin) {
                let verifPassword = bcryptjs.compareSync(req.body.password, userLogin.password)
                if (verifPassword) {
                    delete userLogin.password;
                    req.session.userLogged = userLogin;
                    if (req.body.recordarUsuario) {
                        res.cookie('emailUsuario', req.body.email, {maxAge: (1000 * 60) * 2})
                    }
                    return res.redirect('/user/profile')
                }
            }
        return res.render('formIngreso', {
            errors: {
                email: {
                    msg: 'Datos ingresados inválidos'
                }
            }
        });
        
    },
    logout (req, res){
        res.clearCookie('emailUsuario')
        req.session.destroy();
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
                const user = { ...req.body, img: req.file?.filename || 'default.png'};
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
            await db.User.update({ ...req.body, img: req.file?.filename || db.User.img }, { where: { id: req.params.id } });
            return res.redirect('/user/profile');
        } catch (error) {
            return res.status(500).send(error);
        }
    },
}

module.exports = userController;