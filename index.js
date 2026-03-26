const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { dbConnection } = require('./config/db');
require('dotenv').config();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', require('./routes/productRoutes'));

app.get('/', (req, res) => {
    res.redirect('/products');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}/products`));
