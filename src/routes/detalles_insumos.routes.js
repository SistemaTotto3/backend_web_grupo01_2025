import { Router } from 'express';

import  {obtenerDetalles_Insumos}  from '../controllers/Detalles_insumos.controller.js';
const router = Router();

// Ruta para obtener todas las categorías
router.get('/Detalle_Insumo', obtenerDetalles_Insumos);

export default router; // Exportar el router para usarlo en app.js