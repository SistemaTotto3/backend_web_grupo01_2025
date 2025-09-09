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
// Obtener una insumo por ID
export const obtenerDetalle_Insumo = async (req, res) => {
  try {
    const { id_detalle_insumo } = req.params ;
    const [result] = await pool.query(
      "SELECT * FROM Detalle_insumo WHERE id_detalle_insumo = ?",
      [id_detalle_insumo]
    );
    if (result.length === 0) {
      return res.status(404).json({
        mensaje: "No se encontró el insumo con el ID proporcionado.",
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};
// Crear una nueva insumo
export const registrarDetalle_Insumo = async (req, res) => {
  try {
    const { id_insumo, id_producto,nombre_insumo, cantidad_insumo, precio_insumo } = req.body;
    const [result] = await pool.query(
      "INSERT INTO Detalle_insumo (id_insumo, id_producto,nombre_insumo, cantidad_insumo, precio_insumo) VALUES (?, ?, ?, ?, ?)",
      [id_insumo, id_producto, nombre_insumo,cantidad_insumo, precio_insumo]
    );
    res.status(201).json({ 
      id_detalle_insumo: result.insertId,
      id_insumo, 
      id_producto,
      nombre_insumo,
      cantidad_insumo, 
      precio_insumo 
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el insumo.",
      error: error,
    });
  }
};