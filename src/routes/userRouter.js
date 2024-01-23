const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/ingreso', userController.formIngreso);
router.get('/registro', userController.formRegistro);

router.post('/create', userController.store);
router.get('/edit/:id', userController.edit);
router.put('/update/:id', userController.update);

module.exports=router;