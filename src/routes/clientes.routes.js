import { Router } from 'express';
import {actualizarCliente, eliminarCliente, obtenerClientes,obtenerCliente, registrarCliente} from '../controllers/clientes.controller.js';

const router = Router();

// Obtener todas los clientes
router.get('/Clientes', obtenerClientes);

// Obtener un Cliente por su ID
router.get('/Cliente/:idCliente', obtenerCliente);

// Registrar un nuevo Cliente
router.post('/registrarCliente', registrarCliente);

// Ruta para eliminar una cliente
router.delete('/eliminarCliente/:idCliente', eliminarCliente);

// Ruta para actualizar una Cliente
router.patch('/actualizarCliente/:idCliente', actualizarCliente);

export default router;