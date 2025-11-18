import { Router } from 'express';

import {obtenerVentas, obtenerVenta, registrarVenta, eliminarVenta, actualizarVenta} from '../controllers/Venta.controller.js';

const router = Router();

// Obtener todas las ventas
router.get('/ventas', obtenerVentas);

//Ruta para obtener una venta por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Ruta para crear una nueva venta
router.post('/registrarVenta', registrarVenta);

//ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

router.patch("/actualizarVenta/:id_venta", actualizarVenta);

export default router;