import { pool } from "../../db_connection.js";

// Obtener todas las insumos
export const obtenerVentas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Venta");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",   
      error: error,
    });
  }
};

// Obtener un venta por su ID
export const obtenerVenta = async (req, res) => {
  try {
    const id_venta = req.params.id_venta;
    const [result] = await pool.query("SELECT * FROM venta WHERE id_venta= ?",[id_venta]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_venta} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de las ventas.",
    });
  }
};

//Crear una nueva venta
export const registrarVenta = async (req, res) => {
  try {
    const { idCliente, fecha_venta, total_venta, estado_venta  } = req.body;
    const [result] = await pool.query(
      "INSERT INTO venta (idCliente, fecha_venta, total_venta, estado_venta) VALUES (?, ?, ?, ?)",
      [idCliente, fecha_venta, total_venta, estado_venta]);
    res.json({
      id_venta: result.insertId,
    idCliente, fecha_venta, total_venta, estado_venta
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear la venta.",
      error: error,
    });
  }
};

//Controlador de eliminación de datos de insumo
export const eliminarVenta = async (req, res) => {
  try {
    const { id_venta } = req.params;
    const [result] = await pool.query("DELETE FROM venta WHERE id_venta = ?", [id_venta,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar los datos. ID ${id_venta} no encontrado.`,
      });
    }
    //repuesta sin contenido para indicar que la eliminación fue exitosa
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al eliminar la venta.",
      error: error,
    });
  }
};