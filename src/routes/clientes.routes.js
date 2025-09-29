import { Router } from 'express';
import {eliminarCliente, obtenerCliente, registrarCliente} from '../controllers/clientes.controller.js';

const router = Router();

// Obtener todas los clientes
router.get('/Clientes', obtenerCliente);

// Obtener un Cliente por su ID
router.get('/Cliente/:id_cliente', obtenerCliente);

// Registrar un nuevo Cliente
router.post('/registrarCliente', registrarCliente);

// Ruta para eliminar una cliente
router.delete('/eliminarCliente/:idCliente', eliminarCliente);


export default router;