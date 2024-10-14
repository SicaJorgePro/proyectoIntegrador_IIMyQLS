const moduloView = require("../modulos/contenidoView");
const moduloViewGenero = require("../modulos/ConteGeneroView");
const sequelize = require("../conexion/database");


const vistaCatalogo = async (req, res) => {

  try {
    const catalogoPeli = await moduloView.findAll();

    const response = {
      results: [...catalogoPeli],
      info: {
        dateOfQuery: new Date(),
        totalRecords: catalogoPeli.length || 0,
        DataBase: sequelize.getDatabaseName(),
      },
    };
    catalogoPeli.length !== 0
      ? res.status(200).json(response)
      : res.status(404).json({ ERROR: "NO HAY CATALOGOS DE PELICULAS" });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};
// vista de peliculas mostrando informacion de diferentes tablas 
const vistaCatalogoGenero = async (req, res) => {
  try {
    const { idpeli } = req.params;
    const catalogoPeli = await moduloViewGenero.findAll({
      where: { id_pelicula: idpeli },
    });
    const registro = catalogoPeli.map((pelicula) => { 
          
      return {
        Codigo_Pelicula: pelicula.id_pelicula,
        Poster: pelicula.poster,
        Titulo: pelicula.titulo,
        Categoria: pelicula.nombre_categoria,
        Temporada: pelicula.temporada,
        Genero: pelicula.generos,
        Resumen: pelicula.resumen,
        Trailer: pelicula.trailer,
        Actores: pelicula.actores,
      };
    })
    catalogoPeli.length !== 0
      ? res.status(200).json({
          mensaje: "!!! PELICULA SOLICITADA !!!",
          catalogo: registro,
        })
      : res.status(404).json({ ERROR: "NO HAY CATALOGOS DE PELICULAS" });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};



module.exports = {
  vistaCatalogo,
  vistaCatalogoGenero,
};
