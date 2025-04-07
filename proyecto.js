const productos = [
    {
        "nombre": "Mancuernas 10kg",
        "categoria": "Pesas",
        "precio": 30,
        "stock": 15
    },
    {
        "nombre": "Colchoneta Yoga",
        "categoria": "Accesorios",
        "precio": 20,
        "stock": 40
    },
    {
        "nombre": "Banda Elástica",
        "categoria": "Accesorios",
        "precio": 10,
        "stock": 25
    },
    {
        "nombre": "Bicicleta Estática",
        "categoria": "Cardio",
        "precio": 250,
        "stock": 5
    }
];

// Selecciona el cuerpo de la tabla
const tablaBody = document.querySelector('#tabla-productos tbody');
const barraBusqueda = document.querySelector('#barra-busqueda');

// Función para mostrar los productos en la tabla
function mostrarProductos(filtro = '') {
    tablaBody.innerHTML = ''; // Limpia la tabla
    productos
        .filter(producto => producto.nombre.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.categoria}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
            `;
            tablaBody.appendChild(fila);
        });
}

// Evento para filtrar productos al escribir en la barra de búsqueda
barraBusqueda.addEventListener('input', (e) => {
    mostrarProductos(e.target.value);
});

// Muestra todos los productos al cargar la página
mostrarProductos();
