const { validationResult } = require('express-validator');
const db = require('../database/models');


const userController = {
    formIngreso(req, res) {
        res.render('formIngreso');
    },
    formRegistro(req, res) {
        res.render('formRegistro');
    },
    async store(req, res) {
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
    async edit(req, res) {
        try {
            const userEdit = await db.User.findByPk(req.params.id);
            console.log(userEdit);
            return res.render('formRegistroEdit', { User: userEdit });
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
    }
};

module.exports = userController;