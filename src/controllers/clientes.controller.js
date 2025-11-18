import { pool } from "../../db_connection.js";
// Obtener todas los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Cliente");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Clientes.",
      error: error,
    });
  }
};

// Obtener una cliente por su ID
export const obtenerCliente = async (req, res) => {
  try {
    const idCliente = req.params.idCliente;
    const [result] = await pool.query("SELECT * FROM Cliente WHERE idCliente= ?",[idCliente]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${idCliente} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los clientes.",
    });
  }
};

//Registrar un nuevo cliente
export const registrarCliente = async (req, res) => {
  try {
    const {nombre_1, apellido_1,direccion_cliente,telefono_cliente} = req.body;
    const [result] = await pool.query(
      "INSERT INTO Cliente (nombre_1, apellido_1,direccion_cliente,telefono_cliente) VALUES (?, ?,?,?)",
      [nombre_1, apellido_1,direccion_cliente,telefono_cliente]);
    res.json({
      idCliente: result.insertId,
    nombre_1, apellido_1,direccion_cliente,telefono_cliente
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear la Cliente.",
      error: error,
    });
  }
};

// Eliminar un Cliente
export const eliminarCliente = async (req, res) => {
  try {
    const idCliente = req.params.idCliente;
    const [result] = await pool.query(
      'DELETE FROM Cliente WHERE idCliente = ?',
      [idCliente]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la Cliente. El ID ${idCliente} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la Cliente.',
      error: error
    });
  }
};

// Actualizar un Cliente
export const actualizarCliente = async (req, res) => {
  try {
    const { idCliente } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      "UPDATE Cliente SET ? WHERE idCliente = ?",
      [datos, idCliente]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `cliente con ID ${idCliente} no encontrada.`,
      });
    }

    res.status(200).json({
      mensaje: `cliente con ID ${idCliente} actualizada.`,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar la cliente.",
      error,
    });
  }
};

