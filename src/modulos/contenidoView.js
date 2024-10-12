const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const moduloView = sequelize.define(
  "contenido_view",
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
   },
  {
    tableName: "contenido_view",
    timestamps: false,
  }
);

module.exports = moduloView;
