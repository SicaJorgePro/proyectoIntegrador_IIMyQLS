const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");


const generogeneral = sequelize.define(
  "genero",
  {
    id_genero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_genero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "genero",
    timestamps: false,
  }
);


module.exports = generogeneral;
