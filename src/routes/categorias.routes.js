import { Router } from 'express';

import {obtenerCategorias,obtenerCategoria, registrarCategoria, eliminarCategoria, actualizarCategoria} from '../controllers/categorias.controller.js';

const router = Router();

// Obtener todas los clientes
router.get('/Categorias', obtenerCategorias);

// Obtener una categoría por su ID
router.get('/Categoria/:id_categoria', obtenerCategoria);

// Registrar una nueva Categoría
router.post('/resgistrarcategoria', registrarCategoria);

// Ruta para eliminar una Categoria
router.delete('/eliminarCategoria/:idCategoria', eliminarCategoria);

// Ruta para actualizar una Categoria
router.patch('/actualizarCategoria/:idCategoria', actualizarCategoria);

export default router;