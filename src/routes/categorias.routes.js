import { Router } from 'express';

import {obtenerCategoria} from '../controllers/categorias.controller.js';

const router = Router();

// Obtener todas los clientes
router.get('/Categorias', obtenerCategoria);

export default router;