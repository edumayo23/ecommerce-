// 1. Importar la librería para crear aplicaciones Web
const express = require('express');

// 2. Crear una instacia de express (aplicación principal)
const app = express();

// 3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000;

// --- CONFIGURACIÓN ---
// Establecer EJS como motor de vistas
app.set('view engine', 'ejs');

// Establecer la carpeta publica con elementos estáticos
app.use(express.static('public'));

// Simular una lista de productos
const listaProductos = [
    {
    nombre: "Laptop Gamer",
    precio: 850,
    categoria: "computadores",
    imagen: "https://storage.googleapis.com/msgsndr/oCcg1sOwQXrVS07bljCL/media/696c5fab4e42b9af64a2c54a.png"
},
{
    nombre: "PC Desktop Gamer",
    precio: 1200,
    categoria: "computadores",
    imagen: "https://storage.googleapis.com/msgsndr/oCcg1sOwQXrVS07bljCL/media/696c5fc9e125ef311bfb9330.png"
},
{
    nombre: "Audifonos Sony",
    precio: 125,
    categoria: "perifericos",
    imagen: "https://storage.googleapis.com/msgsndr/oCcg1sOwQXrVS07bljCL/media/696c5fcab34b645d2879cffd.png"
},
{
    nombre: "Mouse ergonómico",
    precio: 50,
    categoria: "perifericos",
    imagen: "https://storage.googleapis.com/msgsndr/oCcg1sOwQXrVS07bljCL/media/696c5fcb4e42b93b5ea2c77c.png"
},
{
    nombre: "Teclado Mecánico",
    precio: 80,
    categoria: "perifericos",
    imagen: "https://storage.googleapis.com/msgsndr/oCcg1sOwQXrVS07bljCL/media/696c5fccb34b64146179d26d.png"
}
];


// -- RUTAS --
app.get('/', (req, res) => {
    // Renderizar la plantilla con los datos proporcionados
    res.render('index', { 
        productos: listaProductos, 
        titulo: "Todos los Productos" 
    }); 
});

// Ruta dinámica para categorías
app.get('/categoria/:nombreCategoria', (req, res) => {
    const cat = req.params.nombreCategoria;
    
    // Filtramos el arreglo según la categoría de la URL
    const productosFiltrados = listaProductos.filter(
        p => p.categoria === cat);
    
    res.render('index', { 
        productos: productosFiltrados, 
        titulo: cat.charAt(0).toUpperCase() + cat.slice(1) // Para poner la primera letra en mayúscula
    });
});

// 5. Encender el servidor
app.listen(PORT, () =>{
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});