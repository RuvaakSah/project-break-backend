const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a MongoDB Atlas (Tienda de Ropa)');
    } catch (error) {
        console.error('❌ Error en la conexión:', error);
        process.exit(1);
    }
};

module.exports = { dbConnection };