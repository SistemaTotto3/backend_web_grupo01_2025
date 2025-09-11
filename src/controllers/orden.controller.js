import { pool } from "../../db_connection.js";
// Obtener todas las categorías
export const obtenerOrdenes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Orden");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Categorias.",
      error: error,
    });
  }
};


// Obtener una orden por su ID
export const obtenerOrden = async (req, res) => {
   try {
    const idOrden = req.params.idOrden;
    const [result] = await pool.query("SELECT * FROM Orden WHERE idOrden= ?",[idOrden]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${idOrden} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de las Ordenes.",
    });
  }
};
 
//Crear una nueva orden
export const registrarOrden = async (req, res) => {
  try {
    const {id_venta, fecha_orden} = req.body;
    const [result] = await pool.query(
      "INSERT INTO Orden (id_venta, fecha_orden) VALUES (?, ?)",
      [id_venta, fecha_orden]);
    res.json({
      idOrden: result.insertId,
    id_venta,
    fecha_orden
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear la Orden.",
      error: error,
    });
  }
};