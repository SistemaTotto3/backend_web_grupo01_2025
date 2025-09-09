import { Router } from 'express';

import  {obtenerInsumos, obtenerInsumo, registrarInsumo}  from '../controllers/insumo.controller.js';
const router = Router();

// Ruta para obtener todos los insumos
router.get('/insumo', obtenerInsumos);

//Ruta para obtener un insumo por su ID
router.get('/insumo/:id_insumo', obtenerInsumo);

// Ruta para crear un nuevo insumo
router.post('/registrarinsumo', registrarInsumo);



export default router; // Exportar el router para usarlo en app.js