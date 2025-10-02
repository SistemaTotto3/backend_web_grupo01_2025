import { pool } from "../../db_connection.js";
// Obtener todas las categorías
export const obtenerDetallesOrdenes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalle_orden");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Detalles Ordenes.",
      error: error,
    });
  }
};


// Obtener una orden por su ID
export const obtenerDetalleOrden = async (req, res) => {
   try {
    const id_detalle_orden = req.params.id_detalle_orden;
    const [result] = await pool.query("SELECT * FROM Orden WHERE id_detalle_orden= ?",[id_detalle_orden]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_orden} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de Detalle Orden.",
    });
  }
};
 
//Crear una nuevo Detalle Orden 
export const registrarDetalleOrden = async (req, res) => {
  try {
    const {idOrden, id_producto, estado_orden, cantidad} = req.body;
    const [result] = await pool.query(
      "INSERT INTO Detalle_Orden (idOrden, id_producto, estado_orden, cantidad) VALUES (?, ?, ?, ?)",
      [idOrden, id_producto, estado_orden, cantidad]);
    res.json({
    idOrden,
    id_producto,
    estado_orden,
    cantidad
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el Detalle Orden.",
      error: error,
    });
  }
};

// ELIMINAR UN DETALLE ORDEN 
export const eliminarDetalleOrden = async (req, res) => {
  try {
    const id_detalle_orden = req.params.id_detalle_orden;
    const [result] = await pool.query(
      'DELETE FROM Detalle_Orden WHERE id_detalle_orden = ?',
      [id_detalle_orden]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar el Detalle_Orden. El ID ${id_detalle_orden} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el Detalle_Orden.',
      error: error
    });
  }
};

 // ACTUALIZAR UN DETALLE ORDEN 
export const actualizarDetalleOrden = async (req, res) => {
  try {
    const { id_detalle_orden } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      "UPDATE Detalle_Orden SET ? WHERE id_detalle_orden = ?",
      [datos, id_detalle_orden]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Detalle Orden con ID ${id_detalle_orden} no encontrada.`,
      });
    }

    res.status(200).json({
      mensaje: `Detalle Orden con ID ${id_detalle_orden} actualizada.`,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar la orden.",
      error,
    });
  }
};