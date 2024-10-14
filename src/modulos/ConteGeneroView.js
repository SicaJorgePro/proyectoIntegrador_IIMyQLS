const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const moduloViewGenero = sequelize.define(
  "contenido_generos_view",
  {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombre_categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temporada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actores: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "contenido_generos_view",
    timestamps: false,
  }
);

module.exports = moduloViewGenero;
