const express = require('express');
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

const router = express.Router();

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
});
const upload = multer({ storage });

router.get('/carrito-compras', productsController.carritoCompras);
router.get('/:id', productsController.detalleProducto);
//router.get('/productos', productsController.productsAddEdit);
router.get('/', productsController.index)
router.post('/create', productsController.store);
router.put('/:id/edit', productsController.edit);
router.delete('/:id', productsController.destroy);

module.exports = router;