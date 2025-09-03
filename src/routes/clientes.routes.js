import { Router } from 'express';
import {obtenerCliente} from '../controllers/clientes.controller.js';

const router = Router();

// Obtener todas los clientes
router.get('/Clientes', obtenerCliente);

export default router;