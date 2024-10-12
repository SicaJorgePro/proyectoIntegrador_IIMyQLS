const actoresReparto = require("../modulos/actoresRepar");
const catalogo = require("../modulos/catalogo");



const PelicuActoresRepartos = async (req, res) => {
  try {
    const { idpeli } = req.params;
    // const Reparto_Actores = await actoresReparto.findAll({
    //   where: { id_pelicula: idpeli },
    // });
     const Reparto_Actores = await actoresReparto.findByPk(idpeli);
   
    Reparto_Actores.length !== 0
      ? res.status(200).json(Reparto_Actores)
      : res.status(200).json({ ERROR: "NO HAY REGISTROS DE LOS ACTORES " });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};

const registrosActores = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(422).json("Error no hay registros");
      return;
    }
    const { codigo_Pelicula, Codigo_Actor } = req.body;
    const buscRegistro = await catalogo.findByPk(codigo_Pelicula);
    if (buscRegistro === null) {
      return res
        .status(404)
        .json(
          "PARA INGRESAR EL ACTORES DE REPARTO, PRIMERO DEBE REALIZAR UN ALTA DE LA PELICULA"
        );
    }  
    const existingRelation = await actoresReparto.findOne({
      where: {
        id_pelicula: codigo_Pelicula,
        id_genero: Codigo_Actor,
      }
    })
    if (existingRelation) {
      return res
        .status(422)
        .json("El REGISTRO YA FUE INGRESADO, LA PELICULA YA TIENE ESE ACTOR DE REPARTO");
    }
   const regisActores = await actoresReparto.create({
     codigo_Pelicula,
     Codigo_Actor,
   });
   res.status(201).json(regisActores);
 } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};
 

module.exports = {
    PelicuActoresRepartos,
  registrosActores
};
