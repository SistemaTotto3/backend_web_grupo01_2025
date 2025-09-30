import { pool } from "../../db_connection.js";
// Obtener todas los Productos
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Producto");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Productos.",
      error: error,
    });
  }
};

// Obtener un Producto por su ID
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
      mensaje: "Ha ocurrido un error al leer los datos de los Productos.",
    });
  }
};

// Registrar un nuevo Producto
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
      mensaje: "Ha ocurrido un error al registrar el Producto.",
      error: error,
    });
  }
};


export const eliminarProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query(
      'DELETE FROM producto WHERE id_producto = ?',
      [id_producto]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la categoría. El ID ${id_producto} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la categoría.',
      error: error
    });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id_producto } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      "UPDATE producto SET ? WHERE id_producto = ?",
      [datos, id_producto]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Categoría con ID ${id_producto} no encontrada.`,
      });
    }

    res.status(200).json({
      mensaje: `Categoría con ID ${id_producto} actualizada.`,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar la categoría.",
      error,
    });
  }
};