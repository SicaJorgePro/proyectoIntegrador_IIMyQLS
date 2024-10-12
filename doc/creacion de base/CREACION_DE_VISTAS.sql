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


-- VISTA MOSTRANDO LAS PELICULAS CON SU GENEROS 

CREATE
ALGORITHM = UNDEFINED
DEFINER = `root `@`localhost`
SQL SECURITY DEFINER
VIEW `contenido_generos_view` AS
SELECT 
	 con.id_pelicula,
	 con.titulo, 
	 ca.nombre_categoria,
	 con.temporada, 
	 gen.nombre_genero
FROM contenido con
RIGHT JOIN categoria ca ON ca.id_categoria = con.id_categ_peli
RIGHT JOIN contenido_genero cont on cont.id_pelicula =  con.id_pelicula
RIGHT JOIN genero gen on gen.id_genero =  cont.id_genero;