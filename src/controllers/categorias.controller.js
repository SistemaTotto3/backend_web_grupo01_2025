import { pool } from "../../db_connection.js";
// Obtener todas los clientes
export const obtenerCategorias = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM categoria");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer las categorias.",
      error: error,
    });
  }
};


// Obtener una categoría por su ID
export const obtenerCategoria = async (req, res) => {
  try {
    const id_categoria = req.params.id_categoria;
    const [result] = await pool.query("SELECT * FROM categoria WHERE id_categoria= ?",[id_categoria]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_categoria} no encontrado.`,
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
export const registrarCategoria = async (req, res) => {
  try {
    const { nombre_categoria } = req.body;
    const [result] = await pool.query(
      "INSERT INTO categoria (nombre_categoria) VALUES (?)",
      [ nombre_categoria]
    );
    res.status(201).json({ id_categoria: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al registrar la categoría.",
      error: error,
    });
  }
};

// Eliminar un Categoria
export const eliminarCategoria = async (req, res) => {
  try {
    const idCategoria = req.params.idCategoria;
    const [result] = await pool.query(
      'DELETE FROM Categoria WHERE idCategoria = ?',
      [idCategoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la Categoria. El ID ${idCategoria} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la Categoria.',
      error: error
    });
  }
};

// Actualizar un Categoria
export const actualizarCategoria = async (req, res) => {
  try {
    const { idCategoria } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      "UPDATE Categoria SET ? WHERE idCategoria = ?",
      [datos, idCategoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `categoria con ID ${idCategoria} no encontrada.`,
      });
    }

    res.status(200).json({
      mensaje: `categoria con ID ${idCategoria} actualizada.`,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar la categoria.",
      error,
    });
  }
};

