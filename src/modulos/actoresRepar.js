const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");


const actoresReparto = sequelize.define(
  "contenido_actores",
  {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
      id_actores: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      
    },
  },
  {
    tableName: "contenido_actores",
    timestamps: false,
  }
);



module.exports = actoresReparto;
