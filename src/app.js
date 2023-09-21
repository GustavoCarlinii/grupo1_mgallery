const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/detalleProducto', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/detalleProducto.html'));
});

app.get('/carritoCompras', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/carritoCompras.html'));
});

app.get('/formRegistro', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/formRegistro.html'));
});

app.get('/formIngreso', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/formIngreso.html'));
});

app.listen(port, () =>{
    console.log(`Servidor activo en http://localhost:${port}`);
});
