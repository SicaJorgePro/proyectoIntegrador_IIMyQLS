const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");


const actorpeli = sequelize.define(
  "actores",
  {
    id_actores: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_actores: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "actores",
    timestamps: false,
  }
);


// actorpeli.belongsToMany(catalogo, {
//   through: actoresReparto,
//   foreignKey: "id_actores", // FK hace refe. a actor
//   otherKey: "id_pelicula", // FK hace refe. a catalogo
//   })


module.exports = actorpeli;
