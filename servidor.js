const express = require("express");

const sequelize = require("./src/conexion/database");
const mainrouters = require("./src/Router/main.routers");
const routersCatalogPeli = require("./src/Router/CatalogoPeliculas.routers");

const catalogo = require("./src/modulos/catalogo");
const categpeli = require("./src/modulos/categoriaPeli");
const actorpeli = require("./src/modulos/actores");
const actoresReparto = require("./src/modulos/actoresRepar");
const generogeneral = require("./src/modulos/genero");
const contenido_genero = require("./src/modulos/contenidogenero");
const moduloView = require("./src/modulos/contenidoView");
const moduloViewGenero = require("./src/modulos/ConteGeneroView");

const app = express();


app.use(express.json());

// Verificar la conexión a la base de datos al iniciar la aplicación
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida con éxito.");
    await actorpeli.sync();
    await actoresReparto.sync();
    await catalogo.sync();
    await categpeli.sync();
    await generogeneral.sync();
    await contenido_genero.sync();
    await moduloView.sync();
    await moduloViewGenero.sync();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error de Servidor", description: error.message });
  }
  finally {
    // sequelize.close();
};

});

//  ruter 
app.use("/",mainrouters);
app.use("/peliculas", routersCatalogPeli);


// ? cuando no existe la ruta
app.use((req, res) => {
  res.status(404).send("PAGINA NO ENCONTRADA!!");
});

process.on("SIGINT", async () => {
  console.log("Cerrando el servidor y la conexión a la base de datos...");
  await sequelize.close();
    console.log("Servidor cerrado.");
    process.exit(0);
  
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});





