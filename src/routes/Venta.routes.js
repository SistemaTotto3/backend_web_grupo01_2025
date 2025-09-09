import { Router } from 'express';

import {obtenerVentas, obtenerVenta, registrarVenta} from '../controllers/Venta.controller.js';

const router = Router();

// Obtener todas las ventas
router.get('/venta', obtenerVentas);

//Ruta para obtener un insumo por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Ruta para crear un nuevo insumo
router.post('/registrarVenta', registrarVenta);

export default router;