import { Router } from 'express';


import {obtenerDetallesOrden} from '../controllers/detalles_orden.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/DetallesOrden', obtenerDetallesOrden);

export default router;