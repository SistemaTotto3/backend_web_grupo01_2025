import { Router } from 'express';


import {obtenerDetallesOrdenes, registrarDetalleOrden, eliminarDetalleOrden, actualizarDetalleOrden, obtenerDetallesPorOrden} from '../controllers/detalles_orden.controller.js';

const router = Router();

// Obtener todos los Detalle Orden
router.get('/DetallesOrdenes', obtenerDetallesOrdenes);

//Ruta para obtener un Detalle Orden por su ID
router.get('/detalleorden/pororden/:idOrden', obtenerDetallesPorOrden);

// Ruta para crear un nuevo Detalle Orden
router.post('/registrarDetalleOrden', registrarDetalleOrden);

// Ruta para eliminar un detalle orden 
router.delete('/eliminarDetalleOrden/:id_detalle_orden', eliminarDetalleOrden);

// Ruta para actualizar un detalle orden 
router.patch('/actualizarDetalleOrden/:id_detalle_orden', actualizarDetalleOrden);

export default router;