const baseHtml = (content) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tienda de Ropa - Project Break</title>
    <style>
        body { font-family: sans-serif; margin: 0; padding: 20px; background: #f4f4f4; }
        nav { background: #333; padding: 10px; color: white; margin-bottom: 20px; }
        nav a { color: white; margin-right: 15px; text-decoration: none; }
        .container { display: flex; flex-wrap: wrap; gap: 20px; }
        .product-card { background: white; padding: 15px; border-radius: 8px; width: 200px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .product-card img { width: 100%; border-radius: 4px; }
        form { background: white; padding: 20px; border-radius: 8px; max-width: 400px; }
        input, select, textarea { width: 100%; margin-bottom: 10px; padding: 8px; }
        button { cursor: pointer; background: #28a745; color: white; border: none; padding: 10px; border-radius: 4px; }
        .btn-delete { background: #dc3545; }
    </style>
</head>
<body>
    <nav>
        <a href="/products">🏠 Catálogo</a>
        <a href="/dashboard">⚙️ Dashboard (Admin)</a>
        <a href="/dashboard/new">➕ Nuevo Producto</a>
    </nav>
    ${content}
</body>
</html>
`;

module.exports = baseHtml;