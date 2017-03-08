# Laboratorio 6

## Manejo de cookies

**Objetivo**: Al finalizar las actividades de este laboratorio, deberás ser capaz de comprender los aspectos básicos del trabajo de cookies en Java EE.

## Preparación
La descripción de este laboratorio parte del supuesto que ya se cuenta con la versión de NetBeans (EE) y que incluye un contenedor Web GlassFish o Apache Tomcat atendiendo un puerto de escucha 8080.

## Actividades

En este laboratorio se realizará una mini-aplicación web que funcione con el patrón MVC y haga uso de sesiones. El objetivo es construir un login sencillo y almacenar la información del usuario en variables de sesión y un color de fondo del perfil de usuario en una cookie.

## Actividad 1 - Ajuste de proyecto de Laboratorio 5

1.- Crear un proyecto de tipo Java Web en NetBeans de nombre `Laboratorio6`.

2.- Elimina el archivo `index.html` que crea por defecto NetBeans y que se encuentra dentro de la carpeta Web Pages.

3.- Utiliza los archivos del `Laboratorio4`.

## Actividad 2 - Cierre de sesión

Para completar el flujo del `Laboratorio4` deberemos construir un mecanismo para cerrar la sesión del usuario.

1.- Crea un nuevo servlet de nombre `LogoutController`
2.- Agrega un enlace al final del archivo `profile.jsp` con la propiedad `href` apuntando hacia `LogoutController` y el texto `Cerrar sesión`.
3.- El controlador `LogoutController` deberá invalidar la sesión como sigue:

```java
HttpSession session = request.getSession();

session.invalidate();

response.sendRedirect("login.jsp");
```

## Actividad 3 - Personalización de color de perfil

EL objetivo de esta actividad es proveerle al usuario un mecanismo para "recordar" su color favorito como color de fondo de su perfil.

1.- Dentro del archivo `profile.jsp`
