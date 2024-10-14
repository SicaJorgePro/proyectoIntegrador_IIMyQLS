-- VISTA MOSTRANDO TABLAS DE CONTENIDOS CON RELACION CON CATEGORIA
-- CREACION DE VISTA 
USE trailerflix;

-- SIMPLES 
CREATE
ALGORITHM = UNDEFINED
DEFINER = `root `@`localhost`
SQL SECURITY DEFINER
VIEW `contenido_view` AS
SELECT 
	 con.id_pelicula,
	 con.titulo, 
	 ca.nombre_categoria,
	 con.temporada 
     FROM contenido con
RIGHT JOIN categoria ca ON ca.id_categoria = con.id_categ_peli;


-- VISTA MOSTRANDO TABLAS DE CONTENIDOS , CON RELACION CON CATEGORIA, GENEROS y ACTORES 

CREATE
ALGORITHM = UNDEFINED
DEFINER = `root `@`localhost`
SQL SECURITY DEFINER
VIEW `contenido_generos_view` AS
SELECT 
    con.id_pelicula ,
    con.poster,
    con.titulo, 
    ca.nombre_categoria,
    GROUP_CONCAT(DISTINCT gen.nombre_genero SEPARATOR ', ') AS generos,
    con.temporada, 
    con.resumen,
    con.trailer,
    GROUP_CONCAT(DISTINCT ac.nombre_actores SEPARATOR ', ') AS actores
FROM contenido con
RIGHT JOIN categoria ca ON ca.id_categoria = con.id_categ_peli
LEFT JOIN contenido_genero cont ON cont.id_pelicula = con.id_pelicula
LEFT JOIN genero gen ON gen.id_genero = cont.id_genero
LEFT JOIN contenido_actores contac ON contac.id_pelicula = con.id_pelicula
LEFT JOIN actores ac ON ac.id_actores = contac.id_actores
GROUP BY 
    con.id_pelicula, con.titulo, ca.nombre_categoria, con.temporada;