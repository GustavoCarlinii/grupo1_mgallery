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

router.get('/register', productsController.formNuevoProd);
router.post('/create', upload.single('img'), productsController.store);
router.get('/edit/:id', productsController.edit);
router.put('/update/:id', upload.single('img'), productsController.update);
router.get('/delete/:id', productsController.destroy);
router.get('/', productsController.index);
router.get('/:id', productsController.detalleProducto);
module.exports = router;