import { Router } from 'express';
import {obtenerProductos, obtenerProducto, registrarProducto} from '../controllers/producto.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/Productos', obtenerProductos);

// Obtener una categoría por su ID
router.get('/Producto/:id_producto', obtenerProducto);

// Registrar una nueva Categoría
router.post('/registrarProducto', registrarProducto);

export default router;