# Asignación de la Semana 1

Construir una página simple basada en HTML 5 y CSS 3.

## Planeación de la página

La página a construir deberá contar con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/Week1/Assignment/siteplan.png" width="400" />

## Elementos a utilizar

### Doctype, Html, Head, Title y Body

La estructura de la página deberá estar compuesta por estos 5 elementos (los elementos aquí descritros no son parte de la imagen anterior donde se describe la planeación de la página) :

```
<!doctype html> 
<html>
  
  <head>
    <title> Título de la página </title>
  </head>
  
  <body>
    
    <!-- Comentario: El contenido que se muestra en el navegador
    se encuentra dentro del body -->
    
  </body>
 
</html>
```

### Header

El `header` contendrá un elemento `hgroup` para agrupar los diferentes niveles de títulos (Nota: No confundir `header` con el `head` indicado en los elementos anteriores):

```
<body>

 <header>
			<hgroup>
				<h1>Título principal</h1>
				<h2>Subtítulo</h2>
			</hgroup>
 </header>
 
</body>
```

### Navigation

El menú deberá estar compuesto por un elemento `nav` y una lista de html:

```
<body>

 <nav>
			<ul>
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Menu 1</a></li>
				<li><a href="#">Menu 2</a></li>
				<li><a href="#">Menu 3</a></li>
			</ul>
 </nav>
 
</body>
```

### Article y Section

Los elementos que componen el "contenido" de la página, estarán compuestos por un `article` y `section`:
```
<nav>
	<!-- lista html -->
</nav>

<article>
 <header>
  <h1> Título del artículo completo </h1>
 </header>

 <p>
  Párrafo de ejemplo
 </p>

 <section>
  <header>
   <h1>Este es el encabezado de la primer sección</h1>
  </header>
  <p>
   Texto de la primer sección
  </p>
 </section>

 <section>
  
  <header>
   <h1>Segunda sección: "mark", "aside", menu e imagen</h1>
  </header>
  
  <p class="next-to-aside">
   <mark>La etiqueta mark subraya con amarillo cierto contenido</mark>
   <br /> <!-- salto de lnea -->
  </p>
  
  <aside>
   <p>Este es un aside que contiene...</p>
  </aside>
  
  <p>
   <button type="button" onClick="JavaScript:alert('Ejemplo de alert')">Botón 1</button>
  </p>
  
  <figure>
   <img src="logo.png" alt="Logo FCFM" width="200" height="100">
   <figcaption>Figura 1. Logo FCFM</figcaption>
  </figure>
  
 </section>

</article>
```

## Mockup

La página deberá tener el siguiente aspecto visual:

<img src="https://github.com/migsalazar/DOO201709/blob/master/Week1/Assignment/targetsite.png" />

Además, el botón deber contar con un evento `onClick`que ejecute un `alert` con un mensaje de ejemplo, como se muestra en la siguiente imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/Week1/Assignment/alertsite.png" width="400" />
