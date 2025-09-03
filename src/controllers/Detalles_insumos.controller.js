import { pool } from "../../db_connection.js";

// Obtener todas las insumos
export const obtenerDetalles_Insumos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalle_insumo");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",   
      error: error,
    });
  }
};