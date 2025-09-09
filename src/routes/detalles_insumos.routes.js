import { Router } from 'express';

import  {obtenerDetalles_Insumos, obtenerDetalle_Insumo, registrarDetalle_Insumo}  from '../controllers/Detalles_insumos.controller.js';
const router = Router();

// Ruta para obtener todas las categorías
router.get('/Detalle_Insumo', obtenerDetalles_Insumos);

//ruta para obtener detalles insumos por id
router.get('/Detalle_Insumo/:id_detalle_insumo', obtenerDetalle_Insumo);

//ruta para crear detalles insumos
router.post('/registrardetalle_Insumo', registrarDetalle_Insumo);

export default router; // Exportar el router para usarlo en app.js