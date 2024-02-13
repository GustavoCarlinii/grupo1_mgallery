const { check, body } = require('express-validator');

const userRegisterValidator = [
    check('first_name').notEmpty().withMessage('El nombre es requerido!'),
    body('last_name').notEmpty().withMessage('El apellido es requerido!'),
    body('email')
        .notEmpty().withMessage('Debe ingresar una dirección de correo electrónico').bail()
        .isEmail().withMessage('Formato no válido'),
    body('password')
        .not().isEmpty().withMessage('El password es requerido!').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
];


module.exports = {
    userRegisterValidator
};