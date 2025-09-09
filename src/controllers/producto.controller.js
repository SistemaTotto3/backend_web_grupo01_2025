import { pool } from "../../db_connection.js";
// Obtener todas las categorías
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Producto");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Categorias.",
      error: error,
    });
  }
};

// Obtener una categoría por su ID
export const obtenerProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query("SELECT * FROM producto WHERE id_producto= ?",[id_producto]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de las categorias.",
    });
  }
};

// Registrar una nueva Categoría
export const registrarProducto = async (req, res) => {
  try {
    const { id_categoria, nombre_producto,precio_costo,precio_venta,existencia } = req.body;
    const [result] = await pool.query(
      "INSERT INTO producto (id_categoria, nombre_producto,precio_costo,precio_venta,existencia) VALUES (?,?,?,?,?)",
      [ id_categoria, nombre_producto,precio_costo,precio_venta,existencia]
    );
    res.status(201).json({ id_producto: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al registrar la categoría.",
      error: error,
    });
  }
};
