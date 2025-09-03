import { Router } from 'express';
import {obtenerOrden} from '../controllers/orden.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/Orden', obtenerOrden);

export default router;