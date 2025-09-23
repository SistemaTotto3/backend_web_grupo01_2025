import { Router } from 'express';
import {obtenerCliente, registrarCliente} from '../controllers/clientes.controller.js';

const router = Router();

// Obtener todas los clientes
router.get('/Clientes', obtenerCliente);

// Obtener un Cliente por su ID
router.get('/Cliente/:id_cliente', obtenerCliente);

// Registrar un nuevo Cliente
router.post('/registrarCliente', registrarCliente);


export default router;