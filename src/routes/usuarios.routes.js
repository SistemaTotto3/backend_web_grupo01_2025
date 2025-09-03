import { Router } from 'express';

import {obtenerUsuarios} from '../controllers/usuario.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/usuario', obtenerUsuarios);

export default router;