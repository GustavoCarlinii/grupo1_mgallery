const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/ingreso', userController.formIngreso);
router.get('/registro', userController.formRegistro);

module.exports=router;