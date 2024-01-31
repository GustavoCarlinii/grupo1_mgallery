const {  body } = require('express-validator');


const userRegisterValidator = [
    body("first_name").notEmpty().withMessage('El nombre es requerido!'),
    body("last_name").notEmpty().withMessage('El apellido es requerido!'),
    body('email')
        .notEmpty().withMessage('Ingrese una dirección de correo electrónico válida'), 
    body('password')
        .notEmpty()
        .withMessage('Ingresa una contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un caracter especial y una longitud minima de 8 caracteres').bail()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
];



module.exports = {
    userRegisterValidator
};