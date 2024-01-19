const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/ingreso', userController.formIngreso);
router.get('/registro', userController.formRegistro);

//router.get('/', userController.index)
router.post('/create', userController.store);
router.put('/:id/edit', userController.edit);

module.exports=router;