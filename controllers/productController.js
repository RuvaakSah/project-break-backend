const Product = require('../models/Product');
const baseHtml = require('../helpers/baseHtml');

const productController = {
    // Ver catálogo público
    async showProducts(req, res) {
        const products = await Product.find();
        let cards = products.map(p => `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.price}€</p>
                <a href="/products/${p._id}">Ver detalle</a>
            </div>
        `).join('');
        res.send(baseHtml(`<h1>Catálogo</h1><div class="container">${cards}</div>`));
    },

    // Ver Dashboard (Admin)
    async showDashboard(req, res) {
        const products = await Product.find();
        let rows = products.map(p => `
            <div class="product-card">
                <img src="${p.image}" width="100">
                <h4>${p.name}</h4>
                <a href="/dashboard/${p._id}/edit">✏️ Editar</a>
                <form action="/dashboard/${p._id}/delete?_method=DELETE" method="POST" style="display:inline;">
                    <button class="btn-delete">🗑️ Borrar</button>
                </form>
            </div>
        `).join('');
        res.send(baseHtml(`<h1>Dashboard de Administración</h1><div class="container">${rows}</div>`));
    },

    // Formulario Nuevo Producto
    showNewProduct(req, res) {
        res.send(baseHtml(`
            <h1>Añadir Producto</h1>
            <form action="/dashboard" method="POST">
                <input name="name" placeholder="Nombre" required>
                <textarea name="description" placeholder="Descripción" required></textarea>
                <input name="image" placeholder="URL de la imagen (Cloudinary)" required>
                <select name="category">
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Zapatos">Zapatos</option>
                    <option value="Accesorios">Accesorios</option>
                </select>
                <select name="size">
                    <option value="XS">XS</option><option value="S">S</option><option value="M">M</option>
                    <option value="L">L</option><option value="XL">XL</option>
                </select>
                <input type="number" name="price" placeholder="Precio" required>
                <button type="submit">Guardar Producto</button>
            </form>
        `));
    },

    
    // Crear en BD
    async createProduct(req, res) {
        await Product.create(req.body);
        res.redirect('/dashboard');
    },

    // Borrar de BD
    async deleteProduct(req, res) {
        await Product.findByIdAndDelete(req.params.productId);
        res.redirect('/dashboard');
    },

    // La función dentro del objeto productController
async showEditProduct(req, res) {
    try {
        // Buscamos el producto por el ID que viene en la URL
        const product = await Product.findById(req.params.productId);
        
        if (!product) {
            return res.status(404).send(baseHtml('<h1>Producto no encontrado</h1>'));
        }

        // Pintamos el formulario con los datos cargados
        res.send(baseHtml(`
            <h1>Editar: ${product.name}</h1>
            <form action="/dashboard/${product._id}?_method=PUT" method="POST">
                <label>Nombre:</label>
                <input name="name" value="${product.name}" required>
                
                <label>Precio:</label>
                <input type="number" name="price" value="${product.price}" required>
                
                <label>Imagen (URL):</label>
                <input name="image" value="${product.image}" required>
                
                <label>Descripción:</label>
                <textarea name="description" required>${product.description}</textarea>
                
                <button type="submit">Actualizar Producto</button>
            </form>
            <br>
            <a href="/dashboard">Volver al Dashboard</a>
        `));
    } catch (error) {
        res.status(500).send(baseHtml('<h1>Error al cargar el formulario</h1>'));
    }
},


async updateProduct(req, res) {
    await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.redirect('/dashboard');
}

};

module.exports = productController;