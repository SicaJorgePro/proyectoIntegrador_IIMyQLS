const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");


const categpeli = sequelize.define(
  "categoria",
  {
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "categoria",
    timestamps: false,
  }
);



module.exports = categpeli;




