const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // URL de la foto
    category: { 
        type: String, 
        required: true,
        enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] 
    },
    size: { 
        type: String, 
        required: true,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);