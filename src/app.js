require('dotenv').config();
const express = require('express');
const path = require('path');
const expresSession = require('express-session');
const cookieParser = require ('cookie-parser');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expresSession({
    secret: process.env.SECRET,
}));
app.use(cookieParser());
app.use(methodOverride('_method'));

const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/productsRouter');
const userRoutes = require('./routes/userRouter')

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/products', productsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Servidor activo en http://localhost:${port}`);
});
