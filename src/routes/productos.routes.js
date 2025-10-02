import { Router } from 'express';
import {obtenerProductos, obtenerProducto, registrarProducto, eliminarProducto, actualizarProducto} from '../controllers/producto.controller.js';

const router = Router();

// Obtener todas los Productos
router.get('/Productos', obtenerProductos);

// Obtener un Producto por su ID
router.get('/Producto/:id_producto', obtenerProducto);

// Registrar un nuevo Producto
router.post('/registrarProducto', registrarProducto);

// Eliminar un Producto por su ID
router.delete('/eliminarProducto/:id_producto', eliminarProducto);

// Actualizar un Producto por su ID
router.patch('/actualizarProducto/:id_producto', actualizarProducto);

export default router;