const { check, body } = require('express-validator');

const userRegisterValidator = [
    check("first_name").notEmpty().withMessage('El nombre es requerido!'),
    body('email')
        .isEmail().withMessage('Formato no válido')
        .not().isEmpty().withMessage('Ingrese una dirección de correo electrónico válida'), 
    body('password')
        .not().isEmpty().withMessage('El password es requerido!')
        .isLength({ min: 8 }).withMessage('La contraseña es requerida y debe tener al menos 8 caracteres')
];


module.exports = {
    userRegisterValidator
};