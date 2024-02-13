const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('El nombre de la obra es requerido'),
    body('prices')
        .notEmpty().withMessage('El precio de la obra es requerido').bail()
        .isNumeric().withMessage('El precio debe ser un valor numérico'),
    body('description').notEmpty().withMessage('La descripción de la obra es requerida')
];

module.exports = { validations };