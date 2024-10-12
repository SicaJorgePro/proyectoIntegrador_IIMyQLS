const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const moduloViewGenero = sequelize.define(
  "contenido_generos_view",
  {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
    nombre_genero: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre_genero",
    },
  },
  {
    tableName: "contenido_generos_view",
    timestamps: false,
  }
);

module.exports = moduloViewGenero;
