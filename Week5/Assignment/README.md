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

4.- La página `login.jsp` deberá contener lo siguiente:

 - Un título `h1` con un mensaje de bienvenida.
 - Un formulario. 
 - El formulario deberá ejecutar una accion `LoginController` el cuál será un servlet que se desarrollará en la siguiente actividad. 
 - El formulario deberá enviar los datos mediante el método de transferencia `POST`. 
 - El formulario deberá contener tres `input`: uno de tipo `text`, el segundo de tipo `password` y el tercero de tipo `submit` con el valor `Iniciar sesión`.
 
 Deberá ser muy similar al formulario de la siguiente imagen:
 
<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/03.png" width="300" />

5.- La página `error.jsp` deberá contener un título `h1` con el contenido `Usuario o contraseña incorrectos`. Además un enlace `a` con el atributo `href` para reedireccionar hacia `login.jsp`.

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/03_1.png" width="300" />

6.- La página `success.jsp` se modificará en las actividades posteriores.

### Actividad 2

1.- Crear un servlet de nombre `LoginController`. Durante la creación del servlet deberá especificarse que sea creado dentro del paquete `week5.controllers`.

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/04.png" width="300" />

2.- Para inciar el trabajo con el código del servlet eliminaremos el contenido del método `processRequest`. De tal forma que quede como la siguiente imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/05.png" width="300" />

3.- Dentro del servlet se deberá obtener los parámetros enviados por el cliente (usuario y contraseña) haciendo uso del método `request.getParameter`. El resto del código del servlet, se definirá en las siguientes actividades.

### Actividad 3

1.- Crear una clase de Java de nombre `User` que funcionará como modelo. La clase deberá estar dentro de un nuevo paquete de nombre `week5.models`, como aparece en la siguiente imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/06.png" width="300" />
<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week5-img/07.png" width="300" />

2.- La clase `User` deberá contener lo siguiente:
- Dos propiedades privadas de tipo `String`: `username` y `password`.
- Un constructor que reciba como parámetro de entrada dos `String`. El primero representará el usuario y el segundo la contraseña. En el cuerpo del constructor deberá establecer el valor de los parámetros de entrada hacia las propiedades privadas `username` y `password`.
- Un método de nombre `getUsername` que devolverá un `String`, es decir, el valor del username.
- El código siguiente muestra el ejemplo:

```java
package week5.models;

public class User {
   
    private String username;
    private String password;
    
    public User(String username, String password) { 
        this.username = username;
        this.password = password;
    }
    
    public String getUsername() { 
        return this.username;
    }
}
```

3.- Crear una segunda clase `Authentication` la cual deberá contener lo siguiente:
- Un método estático de nombre `authenticate` que devuelva un tipo `boolean` el cual nos indicará si el usuario debió o no autenticarse.
- En el método `authenticate` definiremos dos variables de tipo `String`: `userDataBase` y `passwordDataBase` que actuarán como información dummy
