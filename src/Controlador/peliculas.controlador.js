const sequelize = require("../conexion/database");
const { validarCampos } = require("../utils/validadcion");
const { obtenerCatalogoPeli } = require("../utils/catalogoconsulta");
const { buscarPeliculaPorID } = require("../utils/buscarconsulta");
const { buscarPeliculaPorCAT } = require("../utils/buscarcategoria");
const { buscarPeliculaPorTIT } = require("../utils/buscartitulo");

const categpeli = require("../modulos/categoriaPeli");
const actorpeli = require("../modulos/actores");
const actoresReparto = require("../modulos/actoresRepar");
const catalogo = require("../modulos/catalogo");
const generogeneral = require("../modulos/genero");
const GeneroPeli = require("../modulos/contenidogenero");



const catalogoPelicula = async (req, res) => {
  try {

     const allcatalogoPeli = await obtenerCatalogoPeli();
    
    const result = allcatalogoPeli.map(pelicula => {
       const actorRepart = pelicula.actPelicula
         .map((actor) => actor.nombre_actores)
         .join(", ")
       const generoPelicula = pelicula.generoPeli
         .map((genero) => genero.nombre_genero)
          .join(", ")
     return {
       Codigo_Pelicula: pelicula.id_pelicula,
       Poster: pelicula.poster,
       Titulo: pelicula.titulo,
       Categoria: pelicula.catPelicula
         ? pelicula.catPelicula.nombre_categoria
         : null,
       Genero: generoPelicula,
       Temporada: pelicula.temporada,
       Resumen: pelicula.resumen,
       Trailer: pelicula.trailer,
       Actores: actorRepart,
     };
    })
    res.status(200).json({
      mensaje: "!!! CATALOGO DE PELICULAS !!!",
      catalogo: result,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,

    });
  } finally {
    // sequelize.close();
  }
}
const buscarID = async (req, res) => {
  try {
    const { idpelicula } = req.params;
    if (!idpelicula) {
      return res
        .status(400)
        .json({
          mensaje: "Se requiere un identificador de película en la Url",
        });
    }
    const catalogoPeli = await buscarPeliculaPorID(idpelicula);
  
    if (catalogoPeli.length !== 0) {
      const result = catalogoPeli.map((pelicula) => {
        const actorRepart = pelicula.actPelicula
          .map((actor) => actor.nombre_actores)
          .join(", ");
        const generoPelicula = pelicula.generoPeli
          .map((genero) => genero.nombre_genero)
          .join(", ");
        return {
          Codigo_Pelicula: pelicula.id_pelicula,
          Poster: pelicula.poster,
          Titulo: pelicula.titulo,
          Categoria: pelicula.catPelicula
            ? pelicula.catPelicula.nombre_categoria
            : null,
          Genero: generoPelicula,
          Temporada: pelicula.temporada,
          Resumen: pelicula.resumen,
          Trailer: pelicula.trailer,
          Actores: actorRepart,
        };
      });
      res.status(200).json({
        mensaje: "!!! PELICULA SOLICITADA !!!",
        catalogo: result,
      });
      return;
    }
    res.status(404).json({ ERROR: "Pelicula no encontrada.." });
    
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};

const buscarCateg = async (req, res) => {
  try {
    const { idcategoria } = req.params;
    if (!idcategoria) {
                       return res
                         .status(400)
                         .json({
                           mensaje:
                             "Se requiere un identificador de código de categoría en la Url.",
                         });
     }
    const catalogoPeli = await buscarPeliculaPorCAT(idcategoria);
     
    if (catalogoPeli.length !== 0) {
              const result = catalogoPeli.map((pelicula) => {
                const actorRepart = pelicula.actPelicula
                  .map((actor) => actor.nombre_actores)
                  .join(", ");
                const generoPelicula = pelicula.generoPeli
                  .map((genero) => genero.nombre_genero)
                  .join(", ");
                return {
                  Codigo_Pelicula: pelicula.id_pelicula,
                  Poster: pelicula.poster,
                  Titulo: pelicula.titulo,
                  Categoria: pelicula.catPelicula
                    ? pelicula.catPelicula.nombre_categoria
                    : null,
                  Genero: generoPelicula,
                  Temporada: pelicula.temporada,
                  Resumen: pelicula.resumen,
                  Trailer: pelicula.trailer,
                  Actores: actorRepart,
                };
              });
          res.status(200).json({
            mensaje: "!!! PELICULAS POR CATEGORIA !!!",
            catalogo: result,
          });
           return;
    }
     res.status(404).json({ ERROR: "NO HAY PELICULA CON ESA CATEGORIA" });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};

const buscarTitulo = async (req, res) => {
  try {
    const { query } = req.params;
    if (!query) {
      return res.status(400).json({
        mensaje: "Se requiere un identificador de título(palabra o letra) en la Url",
      });
    }
  
    const catalogoPeli = await buscarPeliculaPorTIT(query);     
  
    if (catalogoPeli.length !== 0) {
      const result = catalogoPeli.map((pelicula) => {
        const actorRepart = pelicula.actPelicula
          .map((actor) => actor.nombre_actores)
          .join(", ");
          const generoPelicula = pelicula.generoPeli
          .map((genero) => genero.nombre_genero)
          .join(", ");
        return {
          Codigo_Pelicula: pelicula.id_pelicula,
          Poster: pelicula.poster,
          Titulo: pelicula.titulo,
          Categoria: pelicula.catPelicula
            ? pelicula.catPelicula.nombre_categoria
            : null,
          Genero: generoPelicula,
          Temporada: pelicula.temporada,
          Resumen: pelicula.resumen,
          Trailer: pelicula.trailer,
          Actores: actorRepart,
        };
      });
      res.status(200).json({
        mensaje: "!!! PELICULAS POR TITULO !!!",
        catalogo: result,
      });
      return;
    }
      res.status(404).json({ ERROR: "No se encontraron películas con el título especificado."});
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};

// post
const crearregistro = async (req, res) => {
  const {
    id_pelicula,
    titulo,
    poster,
    temporada,
    resumen,
    nombre_genero,
    trailer,
    id_categ_peli,
    nombre_actores,
  } = req.body; 

   // Validar campos 
  const error = validarCampos(req.body);
              if (error) return res.status(400).json(error);

  try {
    // Verificar película 
    const peliculaExistente = await catalogo.findOne({
      where: { id_pelicula },
    });
    if (peliculaExistente) {
      return res.status(409).json({ message: "La película ya existe." });
    }
    // Verificar categoría 
    const categoriaExistente = await categpeli.findOne({
      where: { id_categoria: id_categ_peli },
    });
    if (!categoriaExistente) {
      return res.status(404).json({ message: "La categoría no existe." });
    }

    // Crear el nuevo contenido (película)
    const contenidoCreado = await catalogo.create({
      id_pelicula,
      titulo,
      poster,
      temporada,
      resumen,
      trailer,
      id_categ_peli, 
    });

    // actores al nuevo contenido
    for (const nombre_actor of nombre_actores) {
      // Buscar o crear el actor
      const [actorCreado] = await actorpeli.findOrCreate({
        where: { nombre_actores: nombre_actor }, // Buscar por nombre
        defaults: { nombre_actores: nombre_actor }, // Si no existe, crearlo
      });

      // tabla intermedia
      await actoresReparto.create({
        id_pelicula: contenidoCreado.id_pelicula, // FK hacia catalogo
        id_actores: actorCreado.id_actores, // FK hacia actorpeli
      });
    }
    // géneros
    for (const nom_genero of nombre_genero) {
      const [generoCreado] = await generogeneral.findOrCreate({
        where: { nombre_genero: nom_genero },
        defaults: { nombre_genero: nom_genero },
      });

      await GeneroPeli.create({
        id_pelicula: contenidoCreado.id_pelicula,
        id_genero: generoCreado.id_genero,
      });
    }
    res.status(201).json({
      message: "REGISTRO SE ACREGO EXITOSAMENTE",
      Pelicula: {
        id_pelicula: contenidoCreado.id_pelicula,
        titulo: contenidoCreado.titulo,
        poster: contenidoCreado.poster,
        temporada: contenidoCreado.temporada,
        categoria: contenidoCreado.id_categ_peli,
        resumen: contenidoCreado.resumen,
        trailer: contenidoCreado.trailer,
        Generos: nombre_genero,
        Actores_Reparto: nombre_actores,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el contenido",
      description: error.message,
    });
  }
};
// put
const modificarRegistro = async (req, res) => {
  const { id_pelicula } = req.params; 
   req.body.id_pelicula = id_pelicula;
  const {
    titulo,
    poster,
    temporada,
    resumen,
    nombre_genero,
    trailer,
    id_categ_peli,
    nombre_actores,
  } = req.body;
 
  // Validar campos 
  const error = validarCampos(req.body);
  if (error) return res.status(400).json(error);

  try {
    
    // Verificar pelicula
    const peliculaExistente = await catalogo.findOne({
      where: { id_pelicula },
    });
    if (!peliculaExistente) {
      return res.status(404).json({ message: "La película no existe." });
    }

    // Verificar categoría 
    const categoriaExistente = await categpeli.findOne({
      where: { id_categoria: id_categ_peli },
    });
    if (!categoriaExistente) {
      return res.status(404).json({ message: "La categoría no existe." });
    }

    // Actualizar el contenido (película)
    await catalogo.update(
      {
        titulo,
        poster,
        temporada,
        resumen,
        trailer,
        id_categ_peli,
      },
      {
        where: { id_pelicula },
      }
    );

    // Actualizar actores
    await actoresReparto.destroy({ where: { id_pelicula } }); // Eliminar actores 
    for (const nombre_actor of nombre_actores) {
      const [actorCreado] = await actorpeli.findOrCreate({
        where: { nombre_actores: nombre_actor },
        defaults: { nombre_actores: nombre_actor },
      });

      await actoresReparto.create({
        id_pelicula,
        id_actores: actorCreado.id_actores,
      });
    }

    // Actualizar géneros
    await GeneroPeli.destroy({ where: { id_pelicula } }); // Eliminar géneros 
    for (const nom_genero of nombre_genero) {
      const [generoCreado] = await generogeneral.findOrCreate({
        where: { nombre_genero: nom_genero },
        defaults: { nombre_genero: nom_genero },
      });

      await GeneroPeli.create({
        id_pelicula,
        id_genero: generoCreado.id_genero,
      });
    }

    res.status(200).json({
      message: "REGISTRO SE ACTUALIZO EXITOSAMENTE",
      Pelicula: {
        id_pelicula: id_pelicula,
        titulo: titulo,
        poster: poster,
        temporada: temporada,
        categoria: id_categ_peli,
        resumen: resumen,
        trailer: trailer,
        Generos: nombre_genero,
        Actores_Reparto: nombre_actores,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el contenido",
      description: error.message,
    });
  }
};
// delete
const eliminarRegistros = async (req, res) => {
  const { id_pelicula } = req.params; 

  try {
   
    const peliculaExistente = await catalogo.findOne({
      where: { id_pelicula },
    });
    if (!peliculaExistente) {
      return res
        .status(404)
        .json({ message: "La película no fue encontrada." });
    }
    // Eliminar relacion de actores
    await actoresReparto.destroy({
      where: { id_pelicula },
    });

    // Eliminar relacion géneros
    await GeneroPeli.destroy({
      where: { id_pelicula },
    });

    // Eliminar la película
    await catalogo.destroy({
      where: { id_pelicula },
    });

    res.status(200).json({ message: "----PELICULA ELIMINADA---" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la película",
      description: error.message,
    });
  }
};

module.exports = {
  catalogoPelicula,
  buscarID,
  buscarCateg,
  buscarTitulo,
  crearregistro,
  modificarRegistro,
  eliminarRegistros,
};
