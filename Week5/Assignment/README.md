# Asignación de la semana 5

## Crear un login simple con MVC

Objetivo: Al finalizar la actividad deberás ser capaz de construir un sistema de autenticacin simple basado en el patrón de diseño `MVC` (Model-View-Controler).

## Preparación
La descripción de esta asignación parte del supuesto que ya cuentas con la versión de NetBeans (EE) y que incluye un contenedor Web GlassFish o Apache Tomcat atendiendo un puerto de escucha 8080.

## Actividades

En esta asignación se realizará lo siguiente:

Crear una mini-aplicación web que funcione con el patrón MVC:
- Crear tres páginas JSP para que funcionen como `View`.
- Crear un servlet que funcionará como `Controller`.
- Crear dos clases de Java que funcionarán como `Model`.

### Actividad 1

1.- Crear un proyecto de tipo `Java Web` en NetBeans.
2.- Elimina el archivo `index.html` que crea por defecto dentro de la carpeta `Web Pages`.
3.- Agrega tres archivos de tipo JSP: `login.jsp`, `success.jsp` y `error.jsp`.


<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/01.png" width="300" />
<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/02.png" width="300" />

4.- La página `login.jsp` deberá contener un formulario como el que aparece en la imagen la imagen inferior. El formulario deberá ejecutar una accion `LoginController` el cuál será un servlet que se desarrollará en la siguiente actividad. Además, el formulario deberá enviar los datos mediante el método de transferencia `POST`.

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/03.png" width="300" />

5.- La página `error.jsp` y `success.jsp` se modificará en las actividades posteriores.

### Actividad 2

1.- Crear un servlet de nombre `LoginController`. Durante la creación del servlet deberá especificarse que sea creado dentro del paquete `week5.controllers`.

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/04.png" width="300" />

2.- Para inciar el trabajo con el código del servlet eliminaremos el contenido del método `processRequest`. De tal forma que quede como la siguiente imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/05.png" width="300" />



# Desc. en proceso
