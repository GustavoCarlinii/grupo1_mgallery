const express = require('express');

const userController = require('../controllers/userController');
const {userRegisterValidator} = require('../middlewares/userValidator');

const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');
const router = express.Router();

router.get('/ingreso', userController.formIngreso);
router.get('/registro', userController.formRegistro);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/profile', isLoggedMiddleware, userController.profile);
router.post('/create', userRegisterValidator, userController.store);
router.get('/edit/:id', userController.edit);
router.put('/update/:id', userController.update);

module.exports=router;