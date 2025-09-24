import { Router } from 'express';

import  {obtenerInsumos, obtenerInsumo, registrarInsumo, eliminarInsumo}  from '../controllers/insumo.controller.js';
const router = Router();

// Ruta para obtener todos los insumos
router.get('/insumo', obtenerInsumos);

//Ruta para obtener un insumo por su ID
router.get('/insumo/:id_insumo', obtenerInsumo);

// Ruta para crear un nuevo insumo
router.post('/registrarinsumo', registrarInsumo);

//ruta para eliminar un insumo por su ID
router.delete('/eliminarinsumo/:id_insumo', eliminarInsumo);


export default router; // Exportar el router para usarlo en app.js