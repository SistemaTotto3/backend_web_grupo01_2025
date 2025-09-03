import { Router } from 'express';

import {obtenerVentas} from '../controllers/ventas.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/Venta', obtenerVentas);

export default router;