const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/userRouter');
const productsRoutes = require('./routes/productsRouter');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/product', productsRoutes);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/home.ejs'));
// });

// app.get('/detalleProducto', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/detalleProducto.ejs'));
// });

// app.get('/carritoCompras', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/carritoCompras.ejs'));
// });

// app.get('/formRegistro', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/formRegistro.ejs'));
// });

// app.get('/formIngreso', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/formIngreso.ejs'));
// });
// app.get('/productsAddEdit', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'views/productsAddEdit'))
// })

const port = 3000;
app.listen(port, () =>{
    console.log(`Servidor activo en http://localhost:${port}`);
});
