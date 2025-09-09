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