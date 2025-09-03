import { Router } from 'express';

import {obtenerVenta} from '../controllers/Venta.controller.js';

const router = Router();

// Obtener todas las ventas
router.get('/venta', obtenerVenta);

export default router;