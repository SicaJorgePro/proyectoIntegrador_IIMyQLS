
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
En la carpeta **doc** se encuentra los archivos:

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

Se utilizaran <u>Node.js</u> para la creacion de este proyectos y se incorporan las siguiente librerías para el funcionamiento.

 > Se intalo paquetes en forma dependencia (requeridas por nuestra aplicación en tiempo de ejecución)

  :+1: dotev

  :+1: express

  :+1: mysql2

  :+1: sequelize

> Se instalo paquete en forma devDependencies (necesarias para desarrollar o compilar su aplicación.)

:+1:nodemon

## Características.

-	El sistema utiliza la librería de  **express**  para crear las rutas y el servidor.

-	Trabaja con la librería < **dontev** >, es para utilizar variables de entorno.

-	La utilización de **sequelize** , es una biblioteca de mapeo relacional de objetos (ORM) para Node.js, que facilita la interacción con bases de datos mediante objetos JavaScript en lugar de consultas SQL sin formato.

- Utiliza <u>**Ruters, Controladores**</u> que permite organizar las rutas de nuestra aplicación de manera modular y fácil de mantener.

-	La creacion de Modelos: Permiten representar tablas de la base de datos como objetos en tu código, facilitando la interacción con los datos sin tener que escribir SQL directamente.

-	 Utilización de vista de Myqls (es una tabla, de un resultado de consulta de varias tablas relacionadas)ra simplificando algunas lectura.

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
⚠ Advertencia: Antes de ejecutar el proyecto acuerde que necesita la base de datos ya creada y con registros  si es posible. en el punto **CREACION Y RELACION DE BASE DE DATOS** se nombre los archivos que necesita para la creacion si o si los dos archivos se utiliza en este proyecto. 

### Para realizar las peticiones de rutas:
***
Realizaremos las peticiones de GET, utilizando el navegador o ***Thunder-Cliente***. Como desee.

Esta peticiones se realizaran sobre la tabla CONTENIDO de la base de dato trailerflix; Las formas de visualizar los registros son en formato json.

> [!IMPORTANT]
 Todas las peticiones se realizaran con la relaciones de tablas. Los ingresos de peliculas se actualizaran las tablas que tenga relacion, tambien cuando se modifica e elimina registro.
***
<h1 align="center"> Endpoints </h1>

:computer: http://localhost:3000 (indica la raíz del inicio del proyecto)

> http://localhost:3000/

:computer: http://localhost:3000/peliculas/catalogo (muestra todo los registro que tiene la tabla de contenido, sobre de películas en formato JSON.)

> http://localhost:3000/peliculas/catalogo

:computer: http://localhost:3000/peliculas/catalogo/:idpelicula (búsqueda por indentificador **:idpelicula**,de codigo de pelicula, devolvería información sobre esa película específica en formato JSON).

> http://localhost:3000/peliculas/catalogo/16

:computer: http://localhost:3000/peliculas/catalogo/categoria/:idcategoria (búsqueda, por indentificador **:idcategoria**, por categoria, siendo 1 o 2, seria serie o pelicula) 

> http://localhost:3000/peliculas/catalogo/categoria/2    

:computer: http://localhost:3000/peliculas/catalogo/titulo/:query (búsqueda, por indentificador, la busqueda es por medio de un titulo o letra, donde busca referente al los titulo de lo registros).

> http://localhost:3000/peliculas/catalogo/titulo/FA


#### UTILIZACION DE TABLAS CREADAS POR CONSULTAS DONDE PERMITE SOLAMENTE DE LECTURA, ESTAS TABLAS TIENE DATOS DE VARIAS TABLAS.

:computer: http://localhost:3000/peliculas/catalogo/lista/view (Esta mostrando el contenido total). 

> http://localhost:3000/peliculas/catalogo/lista

:computer: http://localhost:3000/peliculas/catalogo/lista/view/:idpeli (En ete caso es otra vista de la cual al ingresar un indentificador **:idpeli** es codigo de la pelicula, se mustra en detalle  la pelicula con sus generos)

> http://localhost:3000/peliculas/catalogo/lista/view/6

***
## PETICIONES DE POST, PUT Y DELETE

#### ESTAS PETICIONES SE TRABAJAN con THUNDER CLIENTE O POSMAN

> [!NOTE]
En la carpeta **doc** dentro de **Endpoints** se encuntra imagenes de distintas operaciones  de cada cada peticiones


**POST:**
http://localhost:3000/peliculas/registros (Esta es una peticion donde el curpo body se ingresa en formato JSON. El registro debe ser completo con todos los campos, en la carpeta **doc** se encuentra un archivo RegistrosNuevos.Al registrarse una pelicula nueva se registan datos en  las distintas tablas relacionadas.)
- El archivo **RegistroNuevos**. es un json, copie solamnete la parte de las llave y pegarlo en la peticion solicitada sin corchetes.

> http://localhost:3000/peliculas/registros

**PUT:**
http://localhost:3000/peliculas/registros/5 (Es una peticion de modificar registros, donde se ingresa un indentificador que es codigo de la pelcuala y el campo del body en formato JSON esta todos los demas campos faltantes, validaciones de errores, y se modificaran las tablas relacionadas tambien.)
-El archivo RegistroNuevos. es un json, copie solamnete la parte de las llave y pegarlo en la peticion solicitada sin corchetes y ademas elimine el campo id_pelicula,porque ya es ingresado.

http://localhost:3000/peliculas/registros/5

**DELETE:**
http://localhost:3000/peliculas/registros/5 (En esta peticion se ingresa el codigo de la pelicula y se elimna en todas la informacion.)

>http://localhost:3000/peliculas/registros/5

## AUTOR:
### :+1: **SICA, JORGE** :+1:
#### END
****


