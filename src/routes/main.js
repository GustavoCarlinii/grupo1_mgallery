const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);
router.get('/carrito-compras', mainController.carritoCompras);
router.get('/detalle-producto', mainController.detalleProducto);
router.get('/ingreso', mainController.formIngreso);
router.get('/registro', mainController.formRegistro);
router.get('/productos', mainController.productsAddEdit);

module.exports = router;