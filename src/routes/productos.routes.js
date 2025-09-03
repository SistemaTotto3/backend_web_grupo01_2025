import { Router } from 'express';
import {obtenerProducto} from '../controllers/producto.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/Productos', obtenerProducto);

export default router;