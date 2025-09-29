import { Router } from 'express';

import {obtenerUsuarios, obtenerUsuario, registrarUsuario, eliminarUsuario, actualizarUsuario} from '../controllers/usuario.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/usuario', obtenerUsuarios);

//Ruta para obtener un usuario por su ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// Ruta para crear un nuevo usuario
router.post('/registrarUsuario', registrarUsuario);

//ruta para eliminar un usuario por su ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);

router.patch("/actualizarUsuario/:id_usuario", actualizarUsuario);

export default router;