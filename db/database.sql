CREATE DATABASE SistemaTotto;
USE SistemaTotto;

CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) UNIQUE,
    contraseña_hash VARCHAR(255),
    rol ENUM('Administrador','Cliente') NOT NULL
);

CREATE TABLE Insumo (
id_insumo INT AUTO_INCREMENT PRIMARY KEY,
fecha_insumo DATETIME,
total_insumo FLOAT
);


CREATE TABLE Detalle_Insumo (
id_detalle_insumo INT AUTO_INCREMENT PRIMARY KEY,
id_insumo INT,
id_producto INT,
nombre_insumo VARCHAR(50),
cantidad_insumo float, 
precio_insumo Float
);

CREATE TABLE Cliente (
idCliente INT AUTO_INCREMENT PRIMARY KEY,
nombre_1 VARCHAR(50),
apellido_1 VARCHAR(50),
direccion_cliente VARCHAR(50),
telefono_cliente VARCHAR(15)
);

CREATE TABLE Categoria (
id_categoria INT AUTO_INCREMENT PRIMARY KEY,
nombre_categoria VARCHAR(50)
);

CREATE TABLE Producto (
id_producto INT AUTO_INCREMENT PRIMARY KEY,
id_categoria INT,
nombre_producto VARCHAR(50),
precio_costo FLOAT,
precio_venta FLOAT,
existencia INT
);


CREATE TABLE Orden (
idOrden INT AUTO_INCREMENT PRIMARY KEY,
id_venta INT,
fecha_orden DATETIME
);

CREATE TABLE Detalle_Orden (
id_detalle_orden INT AUTO_INCREMENT PRIMARY KEY,
idOrden INT,
id_producto INT,
estado_orden VARCHAR(50),
cantidad INT
);

CREATE TABLE Venta (
id_venta INT AUTO_INCREMENT PRIMARY KEY,
idCliente INT,
fecha_venta DATETIME,
total_venta FLOAT,
estado_venta VARCHAR (15)
);

ALTER TABLE Detalle_Insumo ADD CONSTRAINT FK_detalle_insumo_Insumo FOREIGN KEY (id_insumo) REFERENCES Insumo (id_insumo);
ALTER TABLE Detalle_Insumo ADD CONSTRAINT FK_detalle_insumo_Producto FOREIGN KEY (id_producto) REFERENCES Producto (id_producto);
ALTER TABLE Detalle_orden ADD CONSTRAINT FK_detalle_orden_Producto FOREIGN KEY (id_producto) REFERENCES Producto (id_producto);
ALTER TABLE Detalle_orden ADD CONSTRAINT FK_detalle_orden_Orden FOREIGN KEY (idOrden) REFERENCES Orden (idOrden);
ALTER TABLE Venta ADD CONSTRAINT FK_venta_Cliente FOREIGN KEY (idCliente) REFERENCES Cliente (idCliente);
ALTER TABLE Orden ADD CONSTRAINT FK_orden_venta  FOREIGN KEY (id_venta) REFERENCES venta (id_venta);
ALTER TABLE Producto ADD CONSTRAINT FK_producto_categoria FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria);


INSERT INTO Usuario (nombre_usuario, contraseña_hash, rol) VALUES
('admin1', 'admin23', 'Administrador'),
('cliente1', 'clien23', 'Cliente');


INSERT INTO Insumo (fecha_insumo, total_insumo) VALUES
('2025-04-01 12:00:00', 0.60), ('2025-04-05 12:10:00', 0.65), ('2025-04-10 12:20:00', 0.70),
('2025-04-15 12:20:00', 1.50), ('2025-04-20 12:25:00', 1.30), ('2025-04-30 12:30:00', 1.70),
('2025-04-08 12:00:00', 0.40), ('2025-04-12 12:10:00', 0.45), ('2025-04-14 12:00:00', 0.50),
('2025-04-07 12:00:00', 0.25), ('2025-04-03 12:05:00', 0.20), ('2025-04-22 12:00:00', 0.30),
('2025-04-11 12:00:00', 0.60), ('2025-04-16 12:00:00', 0.35), ('2025-04-17 12:00:00', 0.50),
('2025-04-21 12:00:00', 0.10), ('2025-04-23 12:00:00', 0.10), ('2025-04-27 12:00:00', 0.10),
('2025-04-26 12:00:00', 0.15), ('2025-04-13 12:00:00', 0.20);



INSERT INTO Cliente (nombre_1, apellido_1, direccion_cliente, telefono_cliente) VALUES
('Juan', 'Gómez', 'Calle 1 #2-3', '3100000001'),
('María', 'Pérez', 'Calle 2 #3-4', '3100000002'),
('Carlos', 'López', 'Calle 3 #4-5', '3100000003'),
('Ana', 'Ramírez', 'Calle 4 #5-6', '3100000004'),
('Pedro', 'Torres', 'Calle 5 #6-7', '3100000005'),
('Luisa', 'Martínez', 'Calle 6 #7-8', '3100000006'),
('Sofía', 'Jiménez', 'Calle 7 #8-9', '3100000007'),
('José', 'Morales', 'Calle 8 #9-10', '3100000008'),
('Laura', 'Castro', 'Calle 9 #10-11', '3100000009'),
('Andrés', 'Vargas', 'Calle 10 #11-12', '3100000010'),
('Natalia', 'Ríos', 'Calle 11 #12-13', '3100000011'),
('Miguel', 'Silva', 'Calle 12 #13-14', '3100000012'),
('Daniela', 'Herrera', 'Calle 13 #14-15', '3100000013'),
('Kevin', 'Ortega', 'Calle 14 #15-16', '3100000014'),
('Juliana', 'Suárez', 'Calle 15 #16-17', '3100000015'),
('Camilo', 'Cruz', 'Calle 16 #17-18', '3100000016'),
('Valentina', 'Mendoza', 'Calle 17 #18-19', '3100000017'),
('Sebastián', 'Lara', 'Calle 18 #19-20', '3100000018'),
('Lucía', 'Fajardo', 'Calle 19 #20-21', '3100000019'),
('Esteban', 'Reyes', 'Calle 20 #21-22', '3100000020');


INSERT INTO Categoria (nombre_categoria) VALUES
('Hamburguesas Clásicas'), ('Hamburguesas Especiales'), ('Vegetarianas'),
('Bebidas'), ('Acompañamientos'), ('Postres'), ('Combos'), 
('Picantes'),  ('Premium'), ('Baratas'), ('Doble carne'),
('Ensaladas'), ('Mexicanas'), ('Sin pan'), ('Fitness'), ('Gourmet'),
('Mini'), ('Grandes'),  ('Económicas'), ('Veganas');

INSERT INTO Producto (id_categoria, nombre_producto, precio_costo, precio_venta, existencia) VALUES
(1, 'Hamburguesa Clásica', 2.50, 5.00, 3),
(2, 'Hamburguesa BBQ', 3.00, 6.00, 5),
(3, 'Hamburguesa Veggie', 2.20, 5.50, 8),
(4, 'Coca-Cola 350ml', 0.60, 1.50, 10),
(5, 'Papas Fritas Pequeñas', 0.80, 2.00, 6),
(6, 'Brownie', 0.90, 2.50, 3),
(7, 'Combo Clásico', 3.50, 7.50, 7),
(8, 'Hamburguesa Infantil', 2.00, 4.00, 2),
(9, 'Hamburguesa Picante', 3.20, 6.50, 15),
(10, 'Hamburguesa del Chef', 4.00, 8.00, 18),
(11, 'Hamburguesa Premium', 4.50, 9.00, 20),
(12, 'Mini Hamburguesa', 1.80, 3.50, 22),
(13, 'Hamburguesa Doble Carne', 4.00, 8.00, 13),
(14, 'Hamburguesa con Huevo', 2.70, 5.50, 16),
(15, 'Wrap de Pollo', 2.30, 5.00, 12),
(16, 'Ensalada César', 2.00, 4.50, 4),
(17, 'Burrito', 3.00, 6.00, 23),
(18, 'Taco Mexicano', 2.50, 5.00, 2),
(19, 'Hamburguesa Italiana', 3.50, 7.00, 9),
(20, 'Hamburguesa con Queso Azul', 3.20, 6.50, 5);



INSERT INTO Venta (idCliente, fecha_venta, total_venta, estado_venta) VALUES
(1,'2025-01-01 11:10:00',200,'Pagada'),
(2,'2025-01-02 12:00:00',300,'Pagada'),
(3,'2025-01-03 13:30:00',150,'Pendiente'),
(4,'2025-01-04 09:45:00',400,'Pagada'),
(5,'2025-01-05 10:15:00',250,'Anulada'),
(6,'2025-01-06 15:00:00',180,'Pagada'),
(7,'2025-01-07 16:20:00',500,'Pendiente'),
(8,'2025-01-08 14:05:00',350,'Pagada'),
(9,'2025-01-09 19:15:00',220,'Pagada'),
(10,'2025-01-10 20:00:00',600,'Pagada'),
(11,'2025-01-11 09:40:00',120,'Pendiente'),
(12,'2025-01-12 13:20:00',320,'Pagada'),
(13,'2025-01-13 12:10:00',280,'Pagada'),
(14,'2025-01-14 18:30:00',450,'Anulada'),
(15,'2025-01-15 11:55:00',370,'Pagada'),
(16,'2025-01-16 10:35:00',200,'Pagada'),
(17,'2025-01-17 09:25:00',340,'Pendiente'),
(18,'2025-01-18 15:40:00',410,'Pagada'),
(19,'2025-01-19 13:15:00',150,'Pagada'),
(20,'2025-01-20 17:50:00',500,'Pagada');



INSERT INTO Orden (id_venta, fecha_orden) VALUES
(1,  '2025-01-01 10:45:00'),
(2,  '2025-01-02 11:45:00'),
(3,  '2025-01-03 13:05:00'),
(4,  '2025-01-04 09:30:00'),
(5,  '2025-01-05 09:50:00'),
(6,  '2025-01-06 14:45:00'),
(7,  '2025-01-07 15:55:00'),
(8,  '2025-01-08 13:50:00'),
(9,  '2025-01-09 18:50:00'),
(10, '2025-01-10 19:45:00'),
(11, '2025-01-11 09:15:00'),
(12, '2025-01-12 13:05:00'),
(13, '2025-01-13 11:45:00'),
(14, '2025-01-14 18:15:00'),
(15, '2025-01-15 11:30:00'),
(16, '2025-01-16 10:20:00'),
(17, '2025-01-17 09:00:00'),
(18, '2025-01-18 15:25:00'),
(19, '2025-01-19 12:50:00'),
(20, '2025-01-20 17:35:00');


INSERT INTO Detalle_Orden (idOrden, id_producto, estado_orden, cantidad) VALUES
(1, 1, 'Entregado', 2),
(2, 2, 'Entregado', 1),
(3, 3, 'Pendiente', 3),
(4, 4, 'Entregado', 1),
(5, 5, 'Entregado', 2),
(6, 6, 'Pendiente', 1),
(7, 7, 'Entregado', 2),
(8, 8, 'Entregado', 1),
(9, 9, 'Pendiente', 3),
(10, 10, 'Entregado', 1),
(11, 11, 'Entregado', 2),
(12, 12, 'Pendiente', 1),
(13, 13, 'Entregado', 2),
(14, 14, 'Entregado', 1),
(15, 15, 'Pendiente', 1),
(16, 16, 'Entregado', 3),
(17, 17, 'Entregado', 2),
(18, 18, 'Entregado', 1),
(19, 19, 'Pendiente', 1),
(20, 20, 'Entregado', 2);


INSERT INTO Detalle_Insumo (id_insumo, id_producto, nombre_insumo, cantidad_insumo, precio_insumo) VALUES
(1, 1, 'Pan brioche', 10.5, 1.30),
(2, 1, 'Pan integral', 10.8, 1.30),
(3, 1, 'Pan con ajonjolí', 10.30, 1.30),
(4, 1, 'Carne de res 150g', 5.8, 1.30),
(5, 2, 'Carne de pollo 150g', 5.3, 1.30),
(6, 2, 'Carne vegetariana', 5.50, 1.30),
(7, 2, 'Queso cheddar', 8.50, 1.30),
(8, 2, 'Queso mozzarella', 8.50, 1.30),
(9, 3, 'Lechuga', 15.50, 1.30),
(10, 3, 'Tomate', 10.50, 1.30),
(11, 4, 'Cebolla caramelizada', 5.50, 1.30),
(12, 4, 'Pepinillos', 5.50, 1.30),
(13, 5, 'Huevo frito', 5.50, 1.30),
(14, 6, 'Mayonesa', 10.50, 1.30),
(15, 7, 'Kétchup', 10.50, 1.30),
(16, 8, 'Mostaza', 10.50, 1.30),
(17, 9, 'Salsa BBQ', 10.40, 1.30),
(18, 10, 'Salsa picante', 10.30, 1.30),
(19, 11, 'Aros de cebolla', 5.10, 1.30),
(20, 11, 'Guacamole', 5.15, 1.30);

USE SistemaTotto;

-- VISTAS (CREATE REPLACE)

CREATE OR REPLACE VIEW Reporte_ventas_diarias AS
SELECT 
    v.id_venta,
    v.idCliente,
    v.fecha_venta,
    v.total_venta,
    v.estado_venta
FROM Venta v
WHERE v.estado_venta = 'Pagada'
ORDER BY v.fecha_venta ASC;


CREATE OR REPLACE VIEW Reporte_ventas_totales_cada_mes AS
SELECT 
    DATE_FORMAT(fecha_venta, '%Y-%m') AS mes_anio,
    COUNT(id_venta) AS total_ventas,
    IFNULL(SUM(total_venta),0) AS total_ingresos
FROM Venta
WHERE estado_venta = 'Pagada'
GROUP BY mes_anio
ORDER BY mes_anio DESC;


CREATE OR REPLACE VIEW Todos_los_productos_con_categorias AS
SELECT p.id_producto, p.nombre_producto, c.nombre_categoria, p.precio_venta
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria;


CREATE OR REPLACE VIEW Ordenes_entregadas_a_diario AS
SELECT 
    do.id_detalle_orden,
    do.idOrden,
    do.id_producto,
    p.nombre_producto,
    o.fecha_orden,
    do.estado_orden,
    do.cantidad
FROM Detalle_Orden do
JOIN Producto p ON do.id_producto = p.id_producto
JOIN Orden o ON do.idOrden = o.idOrden
WHERE do.estado_orden = 'Entregado';


CREATE OR REPLACE VIEW Vista_clientes_abril AS
SELECT DISTINCT
    c.idCliente,
    c.nombre_1,
    c.apellido_1,
    c.direccion_cliente,
    c.telefono_cliente,
    v.fecha_venta,
    v.total_venta,
    v.estado_venta
FROM Cliente c
JOIN Venta v ON c.idCliente = v.idCliente
WHERE MONTH(v.fecha_venta) = 4;


CREATE OR REPLACE VIEW Vista_clientes_mes_pendientes AS
SELECT 
    c.idCliente,
    c.nombre_1,
    c.apellido_1,
    v.fecha_venta,
    v.total_venta,
    v.estado_venta
FROM Cliente c
JOIN Venta v ON c.idCliente = v.idCliente
WHERE 
    MONTH(v.fecha_venta) = 4
    AND v.estado_venta = 'Pendiente';


CREATE OR REPLACE VIEW Productos_Bajo_Inventario AS
SELECT 
    p.id_producto,
    p.nombre_producto,
    c.nombre_categoria,
    p.existencia,
    p.precio_venta
FROM Producto p
JOIN Categoria c ON p.id_categoria = c.id_categoria
WHERE p.existencia < 5
ORDER BY p.existencia ASC;


CREATE OR REPLACE VIEW Insumos_Mas_Utilizados AS
SELECT 
    di.id_insumo,
    di.nombre_insumo,
    COUNT(di.id_detalle_insumo) AS veces_usado,
    SUM(di.cantidad_insumo) AS total_cantidad
FROM Detalle_Insumo di
GROUP BY di.id_insumo, di.nombre_insumo
ORDER BY veces_usado DESC;


CREATE OR REPLACE VIEW Productos_Mas_Vendidos AS
SELECT 
    p.id_producto,
    p.nombre_producto,
    c.nombre_categoria,
    COUNT(do.id_detalle_orden) AS veces_vendido,
    IFNULL(SUM(p.precio_venta * do.cantidad),0) AS ingreso_total
FROM Producto p
LEFT JOIN Detalle_Orden do ON p.id_producto = do.id_producto
LEFT JOIN Categoria c ON p.id_categoria = c.id_categoria
WHERE do.estado_orden = 'Entregado'
GROUP BY p.id_producto, p.nombre_producto, c.nombre_categoria
ORDER BY veces_vendido DESC;


CREATE OR REPLACE VIEW Ordenes_Por_Categoria AS
SELECT 
    c.nombre_categoria,
    COUNT(do.id_detalle_orden) AS total_ordenes,
    IFNULL(SUM(p.precio_venta * do.cantidad),0) AS ingreso_total,
    AVG(p.precio_venta) AS precio_promedio
FROM Categoria c
JOIN Producto p ON c.id_categoria = p.id_categoria
JOIN Detalle_Orden do ON p.id_producto = do.id_producto
WHERE do.estado_orden = 'Entregado'
GROUP BY c.nombre_categoria
ORDER BY total_ordenes DESC;

-- -----------------------------------------------------
-- PROCEDIMIENTOS ALMACENADOS (DROP IF EXISTS -> CREATE)
-- -----------------------------------------------------

-- 1) CLIENTE
DELIMITER //
CREATE PROCEDURE sp_obtener_cliente (IN p_idCliente INT)
BEGIN
    SELECT * FROM Cliente WHERE idCliente = p_idCliente;
END //
DELIMITER ;
CALL sp_obtener_cliente(1);

-- Agregar Cliente
DELIMITER //
CREATE PROCEDURE sp_AgregarCliente(
    IN p_nombre_1 VARCHAR(50),
    IN p_apellido_1 VARCHAR(50),
    IN p_direccion_cliente VARCHAR(100),
    IN p_telefono_cliente VARCHAR(15)
)
BEGIN
    INSERT INTO Cliente (nombre_1, apellido_1, direccion_cliente, telefono_cliente)
    VALUES (p_nombre_1, p_apellido_1, p_direccion_cliente, p_telefono_cliente);
END //
DELIMITER ;
CALL sp_AgregarCliente('anner', 'Monge', 'Managua', '8888-8888');

DELIMITER //
CREATE PROCEDURE sp_ListarClientes()
BEGIN
    SELECT * FROM Cliente;
END //
DELIMITER ;
CALL sp_ListarClientes();

DELIMITER //
CREATE PROCEDURE sp_ActualizarCliente(
    IN p_idCliente INT,
    IN p_nombre_1 VARCHAR(50),
    IN p_apellido_1 VARCHAR(50),
    IN p_direccion_cliente VARCHAR(100),
    IN p_telefono_cliente VARCHAR(15)
)
BEGIN
    UPDATE Cliente
    SET nombre_1 = p_nombre_1,
        apellido_1 = p_apellido_1,
        direccion_cliente = p_direccion_cliente,
        telefono_cliente = p_telefono_cliente
    WHERE idCliente = p_idCliente;
END //
DELIMITER ;
CALL sp_ActualizarCliente(1,'Juan','Pérez','León','9999-9999');

DELIMITER //
CREATE PROCEDURE sp_EliminarCliente(
    IN p_idCliente INT
)
BEGIN
    DELETE FROM Cliente WHERE idCliente = p_idCliente;
END //
DELIMITER ;
CALL sp_EliminarCliente(1);

-- 2) PRODUCTO
DELIMITER //
CREATE PROCEDURE sp_agregar_producto(
 IN p_id_categoria INT,
 IN p_nombre_producto VARCHAR (50),
 IN p_precio_costo FLOAT,
 IN p_precio_venta FLOAT,
 IN p_existencia INT
)
BEGIN
    INSERT INTO Producto (id_categoria, nombre_producto, precio_costo, precio_venta, existencia)
    VALUES (p_id_categoria, p_nombre_producto, p_precio_costo, p_precio_venta, p_existencia);
END //
DELIMITER ;
CALL sp_agregar_producto(1,'Hamburguesa',50,75,10);

DELIMITER //
CREATE PROCEDURE LeerProductos()
BEGIN
    SELECT * FROM Producto;
END //
DELIMITER ;
CALL LeerProductos();

DELIMITER //
CREATE PROCEDURE LeerProductoPorID (IN p_id_producto INT)
BEGIN
    SELECT * FROM Producto WHERE id_producto = p_id_producto;
END //
DELIMITER ;
CALL LeerProductoPorID(1);

DELIMITER //
CREATE PROCEDURE sp_ActualizarProducto (
    IN p_id_producto INT,
    IN p_id_categoria INT,
    IN p_nombre_producto VARCHAR (50),
    IN p_precio_costo FLOAT,
    IN p_precio_venta FLOAT,
    IN p_existencia INT
)
BEGIN
    UPDATE Producto
    SET id_categoria = p_id_categoria,
        nombre_producto = p_nombre_producto,
        precio_costo = p_precio_costo,
        precio_venta = p_precio_venta,
        existencia = p_existencia
    WHERE id_producto = p_id_producto;
END //
DELIMITER ;
CALL sp_ActualizarProducto(1,1,'Hamburguesa Especial',60,90,20);

DELIMITER //
CREATE PROCEDURE EliminarProducto (IN p_id_producto INT)
BEGIN
    DELETE FROM Producto WHERE id_producto = p_id_producto;
END //
DELIMITER ;
CALL EliminarProducto(1);

-- 3) INSUMOS
DELIMITER //
CREATE PROCEDURE sp_AgregarInsumo (
    IN p_id_producto INT,
    IN p_nombre_insumo VARCHAR(100),
    IN p_cantidad_insumo FLOAT,
    IN p_precio_insumo FLOAT
)
BEGIN
    DECLARE v_id_insumo INT;
    DECLARE v_total FLOAT;

    SET v_total = p_cantidad_insumo * p_precio_insumo;

    INSERT INTO Insumo (fecha_insumo, total_insumo)
    VALUES (NOW(), v_total);

    SET v_id_insumo = LAST_INSERT_ID();

    INSERT INTO Detalle_Insumo (
        id_insumo, id_producto, nombre_insumo, cantidad_insumo, precio_insumo
    ) VALUES (
        v_id_insumo, p_id_producto, p_nombre_insumo, p_cantidad_insumo, p_precio_insumo
    );
END //
DELIMITER ;
CALL sp_AgregarInsumo(1,'Pan de hamburguesa',50,3);

DELIMITER //
CREATE PROCEDURE sp_ListarInsumos()
BEGIN
    SELECT i.*, di.id_detalle_insumo, di.id_producto, di.nombre_insumo, di.cantidad_insumo, di.precio_insumo
    FROM Insumo i
    LEFT JOIN Detalle_Insumo di ON i.id_insumo = di.id_insumo
    ORDER BY i.fecha_insumo DESC;
END //
DELIMITER ;
CALL sp_ListarInsumos();

DELIMITER //
CREATE PROCEDURE sp_ActualizarInsumo (
    IN p_id_detalle_insumo INT,
    IN p_nombre_insumo VARCHAR(100),
    IN p_cantidad_insumo FLOAT,
    IN p_precio_insumo FLOAT
)
BEGIN
    DECLARE v_id_insumo INT;

    UPDATE Detalle_Insumo
    SET nombre_insumo = p_nombre_insumo,
        cantidad_insumo = p_cantidad_insumo,
        precio_insumo = p_precio_insumo
    WHERE id_detalle_insumo = p_id_detalle_insumo;

    SELECT id_insumo INTO v_id_insumo FROM Detalle_Insumo WHERE id_detalle_insumo = p_id_detalle_insumo LIMIT 1;

    IF v_id_insumo IS NOT NULL THEN
        UPDATE Insumo
        SET total_insumo = (
            SELECT IFNULL(SUM(cantidad_insumo * precio_insumo),0)
            FROM Detalle_Insumo
            WHERE id_insumo = v_id_insumo
        )
        WHERE id_insumo = v_id_insumo;
    END IF;
END //
DELIMITER ;
CALL sp_ActualizarInsumo(1,'Pan integral',60,3.5);

DELIMITER //
CREATE PROCEDURE sp_EliminarInsumo (
    IN p_id_insumo INT
)
BEGIN
    DELETE FROM Detalle_Insumo WHERE id_insumo = p_id_insumo;
    DELETE FROM Insumo WHERE id_insumo = p_id_insumo;
END //
DELIMITER ;
CALL sp_EliminarInsumo(1);

-- 4) ORDEN
DELIMITER //
CREATE PROCEDURE sp_AgregarOrden (
    IN p_id_venta INT,
    IN p_fecha_orden DATETIME
)
BEGIN
    INSERT INTO Orden (id_venta, fecha_orden)
    VALUES (p_id_venta, p_fecha_orden);
END //
DELIMITER ;
CALL sp_AgregarOrden(NULL,NOW());

DELIMITER //
CREATE PROCEDURE sp_ObtenerOrdenes()
BEGIN
    SELECT * FROM Orden;
END //
DELIMITER ;
CALL sp_ObtenerOrdenes();

DELIMITER //
CREATE PROCEDURE sp_ActualizarOrden (
    IN p_idOrden INT,
    IN p_id_venta INT,
    IN p_fecha_orden DATETIME
)
BEGIN
    UPDATE Orden
    SET id_venta = p_id_venta,
        fecha_orden = p_fecha_orden
    WHERE idOrden = p_idOrden;
END //
DELIMITER ;
CALL sp_ActualizarOrden(1,NULL,NOW());

DELIMITER //
CREATE PROCEDURE sp_EliminarOrden (
    IN p_idOrden INT
)
BEGIN
    DELETE FROM Detalle_Orden WHERE idOrden = p_idOrden;
    DELETE FROM Orden WHERE idOrden = p_idOrden;
END //
DELIMITER ;
CALL sp_EliminarOrden(1);

-- 5) VENTA
DELIMITER //
CREATE PROCEDURE sp_AgregarVenta (
    IN p_idOrden INT,
    IN p_idCliente INT,
    IN p_fecha_venta DATETIME,
    IN p_total_venta FLOAT,
    IN p_estado_venta VARCHAR (15)
)
BEGIN
    DECLARE v_id_venta INT;
    INSERT INTO Venta (idCliente, fecha_venta, total_venta, estado_venta)
    VALUES (p_idCliente, p_fecha_venta, p_total_venta, p_estado_venta);

    SET v_id_venta = LAST_INSERT_ID();

    IF p_idOrden IS NOT NULL AND p_idOrden > 0 THEN
        UPDATE Orden SET id_venta = v_id_venta WHERE idOrden = p_idOrden;
    END IF;
END //
DELIMITER ;
CALL sp_AgregarVenta(NULL,1,NOW(),200,'Pendiente');

DELIMITER //
CREATE PROCEDURE sp_ListarVenta()
BEGIN
    SELECT * FROM Venta;
END //
DELIMITER ;
CALL sp_ListarVenta();

DELIMITER //
CREATE PROCEDURE sp_ActualizarVenta (
    IN p_id_venta INT,
    IN p_idOrden INT,
    IN p_idCliente INT,
    IN p_total_venta FLOAT,
    IN p_estado_venta VARCHAR (15)
)
BEGIN
    UPDATE Venta
    SET idCliente = p_idCliente,
        total_venta = p_total_venta,
        estado_venta = p_estado_venta
    WHERE id_venta = p_id_venta;

    IF p_idOrden IS NOT NULL AND p_idOrden > 0 THEN
        UPDATE Orden SET id_venta = p_id_venta WHERE idOrden = p_idOrden;
    END IF;
END //
DELIMITER ;
CALL sp_ActualizarVenta(1,NULL,1,250,'Pagado');

DELIMITER //
CREATE PROCEDURE sp_EliminarVenta (
    IN p_id_venta INT
)
BEGIN
    UPDATE Orden SET id_venta = NULL WHERE id_venta = p_id_venta;
    DELETE FROM Venta WHERE id_venta = p_id_venta;
END //
DELIMITER ;
CALL sp_EliminarVenta(1);

-- 6) REPORTES / UTILS
DELIMITER //
CREATE PROCEDURE sp_ReporteProductosBajoStock (
    IN p_stock_minimo INT
)
BEGIN
    SELECT 
        p.id_producto,
        p.nombre_producto,
        c.nombre_categoria,
        p.existencia,
        p.precio_venta
    FROM Producto p
    JOIN Categoria c ON p.id_categoria = c.id_categoria
    WHERE p.existencia <= p_stock_minimo
    ORDER BY p.existencia ASC;
END //
DELIMITER ;
CALL sp_ReporteProductosBajoStock(5);

DELIMITER //
CREATE PROCEDURE sp_ObtenerInsumosPorProducto (
    IN p_id_producto INT
)
BEGIN
    SELECT 
        di.id_insumo,
        di.id_detalle_insumo,
        di.nombre_insumo,
        di.cantidad_insumo,
        di.precio_insumo,
        (di.cantidad_insumo * di.precio_insumo) AS costo_total,
        i.fecha_insumo
    FROM Detalle_Insumo di
    LEFT JOIN Insumo i ON di.id_insumo = i.id_insumo
    WHERE di.id_producto = p_id_producto
    ORDER BY di.nombre_insumo;
END //
DELIMITER ;
CALL sp_ObtenerInsumosPorProducto(1);

DELIMITER //
CREATE PROCEDURE sp_Encontrar_precio_producto (IN p_id_producto INT) 
BEGIN 
    SELECT p.id_producto, p.nombre_producto, p.precio_venta 
    FROM Producto p
    WHERE p.id_producto = p_id_producto
    LIMIT 1;
END //
DELIMITER ;
CALL sp_Encontrar_precio_producto(1);

DELIMITER //
CREATE PROCEDURE sp_ListarCategorias()
BEGIN
    SELECT id_categoria, nombre_categoria
    FROM Categoria
    ORDER BY nombre_categoria ASC;
END //
DELIMITER ;
CALL sp_ListarCategorias();

DELIMITER //
CREATE PROCEDURE sp_ObtenerProductoMasCaro()
BEGIN
    SELECT id_producto, nombre_producto, precio_venta
    FROM Producto
    WHERE precio_venta = (SELECT MAX(precio_venta) FROM Producto)
    LIMIT 1;
END //
DELIMITER ;
CALL sp_ObtenerProductoMasCaro();

-- FUNCIONES (SELECT para probarlas)
DELIMITER //
CREATE FUNCTION encontrar_cliente(p_idCliente INT) 
RETURNS VARCHAR(150)
READS SQL DATA
BEGIN
    DECLARE nombre VARCHAR(50) DEFAULT '';
    DECLARE apellido VARCHAR(50) DEFAULT '';

    SELECT nombre_1, apellido_1
    INTO nombre, apellido
    FROM Cliente
    WHERE idCliente = p_idCliente
    LIMIT 1;

    RETURN CONCAT(IFNULL(nombre,''), ' ', IFNULL(apellido,''));
END //
DELIMITER ;
SELECT encontrar_cliente(1);

DELIMITER //
CREATE FUNCTION obtener_nombre_producto(p_id_producto INT)
RETURNS VARCHAR(100)
READS SQL DATA
BEGIN
    DECLARE v_nombre VARCHAR(100) DEFAULT '';
    SELECT nombre_producto INTO v_nombre
    FROM Producto
    WHERE id_producto = p_id_producto
    LIMIT 1;
    RETURN v_nombre;
END //
DELIMITER ;
SELECT obtener_nombre_producto(1);

DELIMITER //
CREATE FUNCTION obtener_precio_producto(p_id_producto INT) 
RETURNS DECIMAL(10,2)
READS SQL DATA
BEGIN
    DECLARE precio_venta DECIMAL(10,2) DEFAULT 0.00;
    SELECT p.precio_venta INTO precio_venta
    FROM Producto p
    WHERE p.id_producto = p_id_producto
    LIMIT 1;
    RETURN IFNULL(precio_venta, 0.00);
END //
DELIMITER ;
SELECT obtener_precio_producto(1);

DELIMITER //
CREATE FUNCTION contar_productos_orden(p_idOrden INT)
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE total_productos INT;
    SELECT COUNT(*) INTO total_productos
    FROM Detalle_Orden do
    WHERE do.idOrden = p_idOrden;
    RETURN IFNULL(total_productos, 0);
END //
DELIMITER ;
SELECT contar_productos_orden(1);

DELIMITER //
CREATE FUNCTION obtener_estado_cuenta(p_id_venta INT)
RETURNS VARCHAR(15)
READS SQL DATA
BEGIN
    DECLARE estado VARCHAR(15);
    SELECT estado_venta INTO estado
    FROM Venta
    WHERE id_venta = p_id_venta
    LIMIT 1;
    RETURN estado;
END //
DELIMITER ;
SELECT obtener_estado_cuenta(1);

DELIMITER //
CREATE FUNCTION buscar_cliente(id_cliente INT)
RETURNS VARCHAR(250)
READS SQL DATA
BEGIN
    DECLARE nombre VARCHAR(50) DEFAULT '';
    DECLARE apellido VARCHAR(50) DEFAULT '';
    DECLARE direccion VARCHAR(100) DEFAULT '';
    DECLARE telefono VARCHAR(15) DEFAULT '';

    SELECT nombre_1, apellido_1, direccion_cliente, telefono_cliente
    INTO nombre, apellido, direccion, telefono
    FROM Cliente
    WHERE idCliente = id_cliente
    LIMIT 1;

    RETURN CONCAT('Nombre: ', IFNULL(nombre,''), ' ', IFNULL(apellido,''), 
                  ', Dirección: ', IFNULL(direccion,''), 
                  ', Teléfono: ', IFNULL(telefono,''));
END //
DELIMITER ;
SELECT buscar_cliente(1);