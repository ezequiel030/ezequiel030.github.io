<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla Productos Gimnasio</title>
    <link rel="stylesheet" href="proyecto.css">
</head>
<body>

    <h1>Tabla de Productos de Gimnasio</h1>

    <div class="search-container">
        <input type="text" id="search" placeholder="Buscar producto...">
        <input type="button" id="search-button" value="Buscar" onkeyup="searchSkills()">
    </div>

    <table id="tabla-productos"></table>

    <script>
        const productos = [
            { nombre: "Mancuernas 10kg", categoria: "Pesas", precio: 30, stock: 15 },
            { nombre: "Colchoneta Yoga", categoria: "Accesorios", precio: 20, stock: 40 },
            { nombre: "Banda Elástica", categoria: "Accesorios", precio: 10, stock: 25 },
            { nombre: "Bicicleta Estática", categoria: "Cardio", precio: 250, stock: 5 }
        ];

        const tabla = document.getElementById("tabla-productos");

        // Agrupar por categoría
        const categorias = [...new Set(productos.map(p => p.categoria))];

        categorias.forEach(categoria => {
            tabla.innerHTML += `
                <tr class="categoria-row">
                    <th colspan="4">${categoria}</th>
                </tr>
                <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Precio ($)</th>
                    <th>Stock</th>
                </tr>
            `;

            productos.filter(p => p.categoria === categoria).forEach(producto => {
                tabla.innerHTML += `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.categoria}</td>
                        <td>$${producto.precio}</td>
                        <td>${producto.stock}</td>
                    </tr>
                `;
            });
        });
    </script>

<ul class="pagination">
    <li><a href="#">&laquo;</a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">&raquo;</a></li>
</ul>

</body>
</html>

