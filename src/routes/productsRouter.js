const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/carrito-compras', productsController.carritoCompras);
router.get('/detalle-producto', productsController.detalleProducto);
router.get('/productos', productsController.productsAddEdit);

module.exports = router;