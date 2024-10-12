const categpeli = require("../modulos/categoriaPeli");
const actorpeli = require("../modulos/actores");
const catalogo = require("../modulos/catalogo");
const generogeneral = require("../modulos/genero");

const buscarPeliculaPorID = async (idpelicula) => {
  return await catalogo.findAll({
    where: {
      id_pelicula: idpelicula,
    },
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
    attributes: [
      "id_pelicula",
      "poster",
      "titulo",
      "temporada",
      "resumen",
      "trailer",
    ],
  });
};

module.exports = { buscarPeliculaPorID };
