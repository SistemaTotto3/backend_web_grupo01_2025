import { Router } from 'express';

import {obtenerUsuarios, obtenerUsuario, registrarUsuario} from '../controllers/usuario.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/usuario', obtenerUsuarios);

//Ruta para obtener un usuario por su ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// Ruta para crear un nuevo insumo
router.post('/registrarUsuario', registrarUsuario);

export default router;