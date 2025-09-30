import { Router } from 'express';

import  {obtenerDetalles_Insumos, obtenerDetalle_Insumo, registrarDetalle_Insumo, eliminarDetalle_Insumo, actualizarDetalle_Insumo}  from '../controllers/Detalles_insumos.controller.js';
const router = Router();

// Ruta para obtener todas las categorías
router.get('/Detalle_Insumo', obtenerDetalles_Insumos);

//ruta para obtener detalles insumos por id
router.get('/Detalle_Insumo/:id_detalle_insumo', obtenerDetalle_Insumo);

//ruta para crear detalles insumos
router.post('/registrardetalle_Insumo', registrarDetalle_Insumo);

//ruta para eliminar un detalle insumo por su ID
router.delete('/eliminardetalleinsumo/:id_detalle_insumo', eliminarDetalle_Insumo);

//Ruta para actualizar el detalle_insumo
router.patch('/actualizardetalle_insumo/:id_detalle_insumo',actualizarDetalle_Insumo)

export default router; // Exportar el router para usarlo en app.js