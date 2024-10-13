
# Proyecto Integrador: GRUD con Node.js y Sequelize con MySQL 
✒  Este Proyecto es para realizar operaciones CRUD (crear, leer, actualizar y Eliminar) sobre una Base de Datos Myqls. Se trata de un catálogo de película, para la elaboración de la creación  de la base de datos se utilizara un archivo trailerflix.json para diseñar el modelo de datos.

## Creación de Base de datos
Anterior mente mencionamos que un archivo json llamado trailerflix.json es el que utilizaremos como referencia para el diseño del modelo de las tablas.
 
#### 🗃 ARCHIVO JSON 		
``` JSON
[
  {
"id": 3,
"poster": "/posters/3.jpg",
"titulo": "The Mandalorian",
"categoria": "Serie",
"genero": "Ciencia Ficción, Fantasía",
"resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
"temporadas": 2,
"reparto": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
"trailer": "https://www.youtube.com/embed/aOC8E8z_ifw"
  },
....
```
 
## CREACION Y RELACION DE BASE DE DATOS.

Se utilizó el programa **Myqls workbench**, para la elaboracion de diagrmas y base de datos.
En la carpeta **doc\creacion de base**  se encuentra los archivos:

  :+1: Archivo de creacion de base de datos con sus tablas y registros.

```
base_de_dato(trailerflik).sql
```

  :+1: archivos de creacion de vistas.
```
   CREACION_DE_VISTAS.sql
``` 
   :+1: archivos de diagrma de la base.
```
   DIAGRAMA.pdf
``` 

### Utilización y Liberia para el Proyecto

Se utilizaron <u>Node.js</u> para la creacion de este proyectos y se incorporan las siguiente librerías para el funcionamiento.

 > Se intalo paquetes en forma dependencia (requeridas por nuestra aplicación en tiempo de ejecución)

  :+1: dotev

  :+1: express

  :+1: mysql2

  :+1: sequelize

> Se instalo paquete en forma devDependencies (necesarias para desarrollar o compilar su aplicación.)

:+1:nodemon

## Características.

-	El sistema utiliza la librería de  **express**  para crear las rutas y el servidor.

-	Trabaja con la librería  **dontev** , es para utilizar variables de entorno.

-	La utilización de **sequelize** , es una biblioteca de mapeo relacional de objetos (ORM) para Node.js, que facilita la interacción con bases de datos mediante objetos JavaScript en lugar de consultas SQL sin formato.

- Utiliza **Ruters, Controladores** que permite organizar las rutas de nuestra aplicación de manera modular y fácil de mantener.

-	La creacion de Modelos: Permiten representar tablas de la base de datos como objetos en tu código, facilitando la interacción con los datos sin tener que escribir SQL directamente.

-	 Utilización de vista de Myqls (es una tabla, de un resultado de consulta de varias tablas relacionadas) simplificando algunas lectura.

-	El sistema realiza todas las operaciones de un CRUD mediante las peticiones GET- POST - PUT y DELETE. Utilizando el servicio ***Thunder-Cliente***.

##  Datos necesarios que se requieren:

:point_right: El archivo **env-example** esta vacío, remplazarlo por el archivo **env**

-	PORT ( el Puerto)
-	DATABASE ( nombre de la base de dato)
-	DBUSER ( usuario)
-	PASSWORD ( contraseña)
-	HOST ( refiere al servidor local)

> [!NOTE]
⚠ Necesitan estos datos para el funcionamiento del proyecto ya que trabaja con variables de entorno.
 
 ## EJECUCION Y INSTALACION.

>Cargar los node_modules para poder ejecutar el servidor

**`npm install`**

> Para ejecutar el servidor poner

**`node run dev`**

> [!IMPORTANT]
⚠ Advertencia: Antes de ejecutar el proyecto acuerde que necesita la base de datos ya creada y con registros  si es posible. en el punto **CREACION Y RELACION DE BASE DE DATOS** se nombre los archivos que necesita para la creacion. Donde se utilizaran esn este Proyecto

### Para realizar las peticiones de rutas:
***
Realizaremos las peticiones de GET, utilizando el navegador o ***Thunder-Cliente***. Como desee.

Esta peticiones se realizaran sobre la tabla CONTENIDO de la base de dato trailerflix; Las formas de visualizar los registros son en formato json.

> [!IMPORTANT]
 Todas las peticiones se realizaran con la tabla principal **contenido** la cual esta relacionadas con otros. Al ingresar un nuevo registro (tras realizar algunas validaciones), es crucial mantener las relaciones con otras tablas para asegurar la integridad de la base de dato. 
***
<h1 align="center"> Endpoints </h1>

:computer: http://localhost:3000 (indica la raíz del inicio del proyecto)

> http://localhost:3000/

:computer: http://localhost:3000/peliculas/catalogo (muestra todo los registro que tiene la tabla de contenido, catalogo de pelicula en formato JSON.)

> http://localhost:3000/peliculas/catalogo

:computer: http://localhost:3000/peliculas/catalogo/:idpelicula (búsqueda por indentificador **:idpelicula**,de codigo de pelicula, devolvería información sobre esa película específica en formato JSON).

> http://localhost:3000/peliculas/catalogo/16

:computer: http://localhost:3000/peliculas/catalogo/categoria/(búsqueda, por indentificador **:idcategoria**, por categoría. Indentificador númerico que es 1 o 2 , que se refiere a serie o pelicula, depende de la tabla **categoria** ) 

> http://localhost:3000/peliculas/catalogo/categoria/2    

:computer: http://localhost:3000/peliculas/catalogo/titulo/:query (búsqueda, por indentificador, la busqueda la pelicula que coinciden con el título proporcionado y devuelve la informacion).

> http://localhost:3000/peliculas/catalogo/titulo/FA


#### Utilizacion de Tablas, por vistas

> [!NOTE]
Crear vistas, implica definir una consulta que combine los datos de ambas tablas(ya sea 2 0 más) y guardarla como una vista.Una vez creada, puedes consultar la vista como si fuera una tabla. **Las siguientes rutas se realizan sobre la tablas vistas**  

:computer: http://localhost:3000/peliculas/catalogo/lista/view (esta mostrando los datos predefinidos y organizados de una o más tablas, sin necesidad de especificar las relaciones cada vez, facilitando el acceso a información combinada.). 

> http://localhost:3000/peliculas/catalogo/lista

:computer: http://localhost:3000/peliculas/catalogo/lista/view/:idpeli (consulta que recupera datos específicos de una vista, utilizando el **:idpeli** para filtrar resultados, lo que permite acceder fácilmente a información combinada y organizada de dicha vista. La informacion que presentara sera con respecto a la relacion de la tabla, en este caso por **genero**, es una relacion de mucho a mucho. Para poder visualizar un informacion acorde tendria realizar algun proceso. Para la proxima... )

> http://localhost:3000/peliculas/catalogo/lista/view/6

***
## PETICIONES DE POST, PUT Y DELETE

#### ESTAS PETICIONES SE TRABAJAN con THUNDER CLIENTE O POSMAN

> [!NOTE]
- El campo principal de todas las tablas es idPelicula, este campo es un campo de ingreso, no lo considere automatico.

- Las relaciones que tiene las tablas con configuraciones de opcion **cascada**. esto quiere decir que Eliminación del Registro Principal se borraran también toda la información relacionada en otras tablas.

- En la carpeta **doc\Endpoints** , se encuentra las distintas peticiones, imagenes de distintas operaciones. 


**POST:**
http://localhost:3000/peliculas/registros (Esta es una peticion donde el curpo body se ingresa en formato JSON. El registro debe ser completo con todos los campos(validacion en algunos campos). Al registrarse una pelicula nueva se registan datos en  las distintas tablas relacionadas.)

- Puede sacar registros nuevo busque la carperta **doc\RegistrosNuevos**. y en ella hay un archivo json, copie solamente los datos entre parentesis. 

> http://localhost:3000/peliculas/registros

---

**PUT:**
http://localhost:3000/peliculas/registros/::id_pelicula (Es una peticion de modificar registros, donde se ingresa un indentificador **:id_pelicula** que es codigo de la pelicula, y en el campo del body en formato JSON esta todos los demas campos faltantes (no es necesio colocar el idPelicula,), validaciones de errores, y se modificaran las tablas relacionadas tambien.)

- Puede sacar registros nuevo busque la carperta **doc\RegistrosNuevos**. y en ella hay un archivo json, copie solamente los datos entre parentesis. 

http://localhost:3000/peliculas/registros/5

---

**DELETE:**
http://localhost:3000/peliculas/registros/:id_pelicula (En esta peticion se ingresa un identificador **:id_pelicula** el codigo de la pelicula y se elimna en registros en todas las tablas que tenga informacion sobre el indetificador.)

>http://localhost:3000/peliculas/registros/5

## AUTOR:
### :+1: **SICA, JORGE** :+1:
#### END
****


