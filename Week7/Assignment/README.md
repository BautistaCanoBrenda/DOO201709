# Asignación de la semana 7

## Agregar capacidades al login

**Objetivo**: Al finalizar la actividad deberás ser capaz de comprender el manejo de sesiones y cookies.

## Preparación
La descripción de esta asignación parte del supuesto que ya se cuenta con la versión de NetBeans (EE) y que incluye un contenedor Web GlassFish o Apache Tomcat atendiendo un puerto de escucha 8080.

## Actividades

En esta asignación se realizará lo siguiente:

Crear una mini-aplicación web que funcione con el patrón MVC:
- Crear tres páginas JSP: login.jsp, register.jsp y profile.jsp
- Crear cuatro servlets que funcionarán como controladores
- Crear una clase de Java que funcionará como modelo
- Crear dos clases de servicio para orquestar llamadas a BD y validaciones
- Crear archivo en formato `JSON` que funcionará como base de datos.

## Actividad 1: Preparación de proyecto

1.- Crear un proyecto de tipo `Java Web` en NetBeans.
2.- Elimina el archivo `index.html` que crea por defecto NetBeans.

## Actividad 2: Agregar dependencias

Para el trabajo de datos utilizaremos la libreria [json-simple](https://github.com/fangyidong/json-simple) el cual nos otorgará la capacidad de leer y almacenar objetos en formato JSON.

1.- Descargar la librearía [json-simple]() (Ubicada en este repositorio).
2.- Agregar la dependencia dentro de `Libraries`:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/01.png" width="300" />

Se deberá ubicar la ruta donde se encuentra el archivo:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/02.png" width="300" />

## Actividad 3: Construcción de modelo

1.- Agregar una nueva clase de nombre `User` dentro del paquete `week7.models` y construirla en base al siguiente diagrama:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/03.png" width="300" />


## Actividad 5: Construcción de archivo json

1.- Agregar una nueva carpeta dentro de `Source Packages` de nombre `database`.
2.- Dentro de la carpeta anterior, agregar un archivo `JSON` y eliminar el contenido default de este archivo:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/06.png" width="300" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/07.png" width="300" />


## Actividad 4: Construcción de servicios

2.- Agregar una nueva clase de nombre `Database` con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/04.png" width="300" />

La lógica de cada método se describe a continuación:

- `getPathDatabase():String`: Devuelve la ruta donde se encontrar

2.- Agregar una nueva clase de nombre `Authenticate` con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/05.png" width="300" />





## Referencias
