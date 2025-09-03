import { pool } from "../../db_connection.js";
// Obtener todas los clientes
export const obtenerCliente = async (req, res) => {
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
