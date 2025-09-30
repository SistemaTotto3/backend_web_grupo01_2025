import { pool } from "../../db_connection.js";

// Obtener todas las insumos
export const obtenerUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM usuario");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",   
      error: error,
    });
  }
};

// Obtener un usuario por su ID
export const obtenerUsuario = async (req, res) => {
  try {
    const id_usuario = req.params.id_usuario;
    const [result] = await pool.query("SELECT * FROM usuario WHERE id_usuario= ?",[id_usuario]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los usuarios.",
    });
  }
};

//Crear un nuevo usuarios
export const registrarUsuario = async (req, res) => {
  try {
    const { nombre_usuario, contraseña_hash, rol  } = req.body;
    const [result] = await pool.query(
      "INSERT INTO usuario (nombre_usuario, contraseña_hash, rol) VALUES (?, ?, ?)",
      [nombre_usuario, contraseña_hash, rol]);
    res.json({
      id_usuario: result.insertId,
    nombre_usuario, contraseña_hash, rol
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el usuario.",
      error: error,
    });
  }
};

//Controlador de eliminación de datos de insumo
export const eliminarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const [result] = await pool.query("DELETE FROM usuario WHERE id_usuario = ?", [id_usuario,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar los datos. ID ${id_usuario} no encontrado.`,
      });
    }
    //repuesta sin contenido para indicar que la eliminación fue exitosa
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al eliminar el usuario.",
      error: error,
    });
  }
};

// Actualizar un Usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const {id_usuario} = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE usuario SET  ? WHERE id_usuario = ?',
      [ datos, id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:' Error al actualizar. ID ${id_usuario} no encontrado.'
      });
    }

    res.status(200).json({
      mensaje: 'Usuario con ID ${id_usuario} actualizado correctamente.'
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar el usuario.',
      error: error
    });
  }
};