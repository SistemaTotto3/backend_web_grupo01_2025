import { Router } from 'express';


import {obtenerDetallesOrdenes,obtenerDetalleOrden, registrarDetalleOrden} from '../controllers/detalles_orden.controller.js';

const router = Router();

// Obtener todos los Detalle Orden
router.get('/DetallesOrdenes', obtenerDetallesOrdenes);

//Ruta para obtener un Detalle Orden por su ID
router.get('/DetalleOrden/:id_detalle_orden', obtenerDetalleOrden);

// Ruta para crear un nuevo Detalle Orden
router.post('/registrarDetalleOrden', registrarDetalleOrden);

export default router;