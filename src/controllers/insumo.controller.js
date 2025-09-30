import { pool } from "../../db_connection.js";

// Obtener todas las insumos
export const obtenerInsumos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM insumo");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",   
      error: error,
    });
  }
};
// Obtener un insumo por su ID
export const obtenerInsumo = async (req, res) => {
   try {
    const id_insumo = req.params.id_insumo;
    const [result] = await pool.query("SELECT * FROM insumo WHERE id_insumo= ?",[id_insumo]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_insumo} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de las categorias.",
    });
  }
};
 
//Crear un nuevo insumo
export const registrarInsumo = async (req, res) => {
  try {
    const { fecha_insumo, total_insumo,  } = req.body;
    const [result] = await pool.query(
      "INSERT INTO insumo (fecha_insumo, total_insumo) VALUES (?, ?)",
      [fecha_insumo, total_insumo]);
    res.json({
      id_insumo: result.insertId,
    fecha_insumo,
    total_insumo
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el insumo.",
      error: error,
    });
  }
};

////Controlador de eliminación de datos de insumo
export const eliminarInsumo = async (req, res) => {
  try {
    const { id_insumo } = req.params;
    const [result] = await pool.query("DELETE FROM insumo WHERE id_insumo = ?", [id_insumo,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar los datos. ID ${id_insumo} no encontrado.`,
      });
    }
    //repuesta sin contenido para indicar que la eliminación fue exitosa
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al eliminar el insumo.",
      error: error,
    });
  }
};

// Actualizar un Insumo
export const actualizarInsumo = async (req, res) => {
  try {
    const id_insumo = req.params.id_insumo;
    const { fecha_insumo, total_insumo } = req.body;

    const [result] = await pool.query(
      'UPDATE insumo SET fecha_insumo =?, total_insumo =? WHERE id_insumo = ?',
      [ fecha_insumo, total_insumo,id_insumo ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:' Error al actualizar. ID ${id_insumo} no encontrado.'
      });
    }

    res.json({
      mensaje: 'Insumo con ID ${id_insumo} actualizado correctamente.'
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar la Insumo.',
      error: error
    });
  }
};