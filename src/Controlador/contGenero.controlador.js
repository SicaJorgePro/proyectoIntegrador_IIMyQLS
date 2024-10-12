const contenido_genero = require("../modulos/contenidogenero");
const catalogo = require("../modulos/catalogo");

const GeneroPeliculas= async (req, res) => {
  try {
    const { idpeli } = req.params;

    const generoPelicula = await contenido_genero.findAll({
      where: { id_pelicula: idpeli },
    });;
    generoPelicula.length !== 0
      ? res.status(200).json(generoPelicula)
      : res.status(404).json({ ERROR: "PELICULA NO TIENE GENERO, REALIZAR ALTAS " });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    // sequelize.close();
  }
};

const registrosConteGenero = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(404).json("Error no hay registros");
      return;
    }
    const { Codigo_Pelicula, Codigo_Genero } = req.body;
    const buscRegistro = await catalogo.findByPk(Codigo_Pelicula);
    if (buscRegistro === null) {
         return res.status(404).json(
                              "PARA INGRESAR EL GENERO DE LA PELICULA, PRIMERO DEBE REALIZAR UN ALTA DE LA PELICULA"
                            );
     }  
      const existingRelation = await contenido_genero.findOne({
            where: {
              id_pelicula: Codigo_Pelicula,
              id_genero: Codigo_Genero,
            }
      })
       if (existingRelation) {
              return res.status(422).json(
                              "El REGISTRO YA FUE INGRESADO, LA PELICULA YA TIENE ESE GENERO"
                            );
    }
    const regisConteGenero = await contenido_genero.create({
      Codigo_Pelicula,
      Codigo_Genero,
    });
    res.status(201).json(regisConteGenero);
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
  GeneroPeliculas,
  registrosConteGenero,
};
