const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const actorpeli = require("../modulos/actores");
const actoresReparto = require("../modulos/actoresRepar");
const categpeli = require("../modulos/categoriaPeli");
const generogeneral = require("../modulos/genero");
const GeneroPeli = require("../modulos/contenidogenero");

const catalogo = sequelize.define(
  "contenido",
  {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    poster: {
      type: DataTypes.STRING,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    id_categ_peli: {
      type: DataTypes.INTEGER,
    },
    temporada: {
      type: DataTypes.INTEGER,
    },
    resumen: {
      type: DataTypes.INTEGER,
    },
    trailer: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "contenido",
    timestamps: false,
  }
);
// relaciones de tablas 

catalogo.belongsTo(categpeli, {
  foreignKey: "id_categ_peli",
  as: "catPelicula",
});

catalogo.belongsToMany(actorpeli, {
  through: actoresReparto,
  foreignKey: "id_pelicula", // FK hace refe. a catalogo
  otherKey: "id_actores", // FK hace refe. a actores
  as: "actPelicula",
});

// Relación de muchos a muchos con genero
catalogo.belongsToMany(generogeneral, {
  through: GeneroPeli, // Nombre de la tabla intermedia
  foreignKey: "id_pelicula", // FK hacia catalogo
  otherKey: "id_genero", // FK hacia genero
  as: "generoPeli",
});

module.exports = catalogo;
