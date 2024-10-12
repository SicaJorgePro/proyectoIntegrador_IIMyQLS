const validarCampos = (body) => {
  const camposRequeridos = [
    "id_pelicula",
    "titulo",
    "poster",
    "temporada",
    "resumen",
    "nombre_genero",
    "trailer",
    "id_categ_peli",
    "nombre_actores",
  ];
  if (!body || Object.keys(body).length === 0 || Object.keys(body).length <= 1) {
    return { message: "El cuerpo de la solicitud no puede estar vacío." };
  }
  
  for (const campo of camposRequeridos) {
    if (!body[campo]) {
      return { message: `Falta el campo... requerido: ${campo}` };
    }
  }

  if (!Array.isArray(body.nombre_actores) || body.nombre_actores.length === 0) {
    return {
      message: "El campo nombre_actores debe ser un array y no estar vacío.",
    };
  }

  return null; 
};

module.exports = { validarCampos };
