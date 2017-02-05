# Asignación de la semana 3

Construir un servlet simple con JEE y una página en HTML5

## Objetivo

La página de HTML deberá visualizarse de la siguiente manera:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/01.png" width="400" />


Al presionar el botón `Guardar` el servlet deberá responder con la siguiente información:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/02.png" width="400" />

## Construcción de Back-End

Crear un nuevo proyecto en NetBeans mediante el menú `Archivo > Nuevo Proyecto`. Elegir la categoría `Java Web` y el proyecto de tipo `Web Application`:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/04.png" width="400" />

El proyecto deberá tener de nombre `BookStore`:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/05.png" width="400" />

Utilizar `GlassFish` como servidor:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/06.png" width="400" />

No deberá utilizarse un framework adicional, por lo cual en el paso de "frameworks" deberá dejarse sin selección alguna:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/07.png" width="400" />

No deberá utilizarse un framework adicional, por lo cual en el paso de "frameworks" deberá dejarse sin selección alguna:

Construir la página de HTML utilizando el archivo `index.html` que se encuentra dentro de la carpeta `Web Pages` del proyecto creado. Para la construcción del front-end puede apoyarse de la sección [Construcción de Front-End](https://github.com/migsalazar/DOO201709/tree/master/Week3/Assignment#construcción-de-front-end).

Una vez creado el front-end, deberá crearse un nuevo Servlet, como aparece en la imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/08.png" width="400" />

Deberá organizar su servlet dentro del paquete `com.bookstore.servlets`:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/09.png" width="400" />

Agregar la información del servlet en el archivo `web.xml`:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/10.png" width="400" />

## Construcción de Front-end

Para lograr el aspecto visual del archivo `index.html`, deberá construir y referenciar una hoja de estilos. La hoja de estilos deberá tener el nombre de `bookstore.css` y estar almacenada en una carpeta de nombre `static` dentro de `Web Pages`.

Crear una nueva carpeta:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/11.png" width="400" />

Agregar el archivo `bookstore.css`

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/12.png" width="400" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/13.png" width="400" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/14.png" width="400" />

La hoja de estilos `bookstore.css` deberá contener reglas similares a las siguientes:

```css
html, body {
    height: 100%;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

body {
    font-size: 14px;
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

article header h2 {
    font-size: 18px;
    margin-top: 30px;
    background-color: #ccc;
    padding: 5px 0px 5px 5px;
}

p label {
    display: inline-block;
    width: 80px;
    padding: 0px 30px 0px 0px;
    margin: 0px 10px 0px 10px;
}

/* Nota: El botón deberá hacer uso de la clase .btn */

.btn {
    margin-top: 30px;
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
}
```

Nota: La lista de géneros deberá contener los siguientes elementos:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week3-img/03.png" width="400" />
