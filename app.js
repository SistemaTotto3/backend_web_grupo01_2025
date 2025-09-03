//Importar las dependencias necesarias
import express from 'express';
import cors from 'cors';

//Importar las rutas
import rutasInsumo from './src/routes/insumo.routes.js';
import rutasProducto from './src/routes/productos.routes.js';
import rutasCliente from './src/routes/clientes.routes.js';
import rutasDetallesInsumos from './src/routes/detalles_insumos.routes.js';
import rutasOrden from './src/routes/orden.routes.js';
import rutasDetallesOrden from './src/routes/detalles_orden.routes.js';
import rutasUsuarios from './src/routes/usuarios.routes.js';
import rutasCategorias from './src/routes/categorias.routes.js';
import rutasVentas from './src/routes/ventas.routes.js';


// Crear la aplicación de Express
const app = express();

// Habilitar CORS para cualquier origen
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json({ limit: '10mb' })); //10 MB
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Rutas
app.use('/api', rutasInsumo);
app.use('/api', rutasProducto);
app.use('/api', rutasCliente);
app.use('/api', rutasDetallesInsumos);
app.use('/api', rutasOrden);
app.use('/api', rutasDetallesOrden);
app.use('/api', rutasUsuarios);
app.use('/api', rutasCategorias);
app.use('/api', rutasVentas);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    message: 'La ruta que ha especificado no se encuentra registrada.'
  });
});

// Exportar la aplicación
export default app;