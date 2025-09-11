import { Router } from 'express';
import {obtenerOrdenes, obtenerOrden, registrarOrden} from '../controllers/orden.controller.js';

const router = Router();

// Obtener todas las ordenes
router.get('/Orden', obtenerOrdenes);

//Ruta para obtener una Orden por su ID
router.get('/Orden/:idOrden', obtenerOrden);

// Ruta para crear una nueva Orden
router.post('/registrarOrden', registrarOrden);


export default router;