const express = require('express');
const multer = require('multer');

const userController = require('../controllers/userController');
const {userRegisterValidator} = require('../middlewares/userValidator');

const path = require('path');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/user'))
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
});
const upload = multer({ storage });

router.get('/ingreso', guestMiddleware, userController.formIngreso);
router.get('/registro', guestMiddleware, userController.formRegistro);
router.post('/ingreso', userController.loginProcess);
router.get('/logout', userController.logout);
router.get('/profile', authMiddleware, userController.profile);
router.post('/create',upload.single('img') , userRegisterValidator, userController.store);
router.get('/edit/:id', userController.edit);
router.put('/update/:id', userController.update);

module.exports=router;