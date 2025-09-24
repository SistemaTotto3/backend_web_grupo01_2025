import { Router } from 'express';
import {obtenerProductos, obtenerProducto, registrarProducto, eliminarproducto} from '../controllers/producto.controller.js';

const router = Router();

// Obtener todas los Productos
router.get('/Productos', obtenerProductos);

// Obtener un Producto por su ID
router.get('/Producto/:id_producto', obtenerProducto);

// Registrar un nuevo Producto
router.post('/registrarProducto', registrarProducto);

router.delete('/eliminarProducto/:id_producto', eliminarproducto);

export default router;