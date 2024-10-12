const express = require("express");
const router = express.Router();

const sequelize = require("../conexion/database");
// const catalogo = require("../modulos/catalogo");
// const actoresReparto = require("../modulos/actoresRepar");

const controlador_catalogo = require("../Controlador/peliculas.controlador")
const controlador_catalView = require("../Controlador/vista.controlador")

router.get("/catalogo", controlador_catalogo.catalogoPelicula);
router.get("/catalogo/:idpelicula", controlador_catalogo.buscarID);
router.get("/catalogo/categoria/:idcategoria", controlador_catalogo.buscarCateg);
router.get("/catalogo/titulo/:query", controlador_catalogo.buscarTitulo);
  
// mostar catalogos de pelicuals en vistas 
//  lista completa
router.get("/catalogo/lista/view", controlador_catalView.vistaCatalogo);
// lista por genero
router.get(
  "/catalogo/lista/view/:idpeli",controlador_catalView.vistaCatalogoGenero);

// Ingresar Registros
router.post("/registros", controlador_catalogo.crearregistro);
// Modificar Registros 
router.put("/registros/:id_pelicula", controlador_catalogo.modificarRegistro);
// Eliminar Registros 
router.delete("/registros/:id_pelicula",
  controlador_catalogo.eliminarRegistros
);


module.exports = router;