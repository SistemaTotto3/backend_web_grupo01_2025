import { Router } from 'express';

import  {obtenerInsumos}  from '../controllers/insumo.controller.js';
const router = Router();

// Ruta para obtener todos los insumos
router.get('/insumo', obtenerInsumos);

export default router; // Exportar el router para usarlo en app.js