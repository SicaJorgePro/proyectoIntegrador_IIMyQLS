const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const GeneroPeli = sequelize.define(
  "GeneroPeli",
  {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_genero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    tableName: "contenido_genero",
    timestamps: false,
  }
);


module.exports = GeneroPeli;
