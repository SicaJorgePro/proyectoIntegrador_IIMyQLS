const categpeli = require("../modulos/categoriaPeli");
const actorpeli = require("../modulos/actores");
const catalogo = require("../modulos/catalogo");
const generogeneral = require("../modulos/genero");


const obtenerCatalogoPeli = async () => {
  return await catalogo.findAll({
    attributes: [
      "id_pelicula",
      "poster",
      "titulo",
      "temporada",
      "resumen",
      "trailer",
    ],
    include: [
      {
        model: categpeli,
        attributes: ["nombre_categoria"],
        as: "catPelicula",
      },
      {
        model: generogeneral,
        attributes: ["nombre_genero"],
        through: {
          attributes: [],
        },
        as: "generoPeli",
      },
      {
        model: actorpeli,
        attributes: ["nombre_actores"],
        through: {
          attributes: [],
        },
        as: "actPelicula",
      },
    ],
  });
};

module.exports = { obtenerCatalogoPeli };
