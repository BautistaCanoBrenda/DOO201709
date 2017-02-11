# Diseño Orientado a Objetos
## Fundamentos de JavaScript

-==========-

## Fundamentos

- Tipos de datos
- Variables
- Flujo de control
- Arreglos
- Ciclos
- Objetos
- Funciones
- Eventos

-==========-

## Ejecución de Javascript

Para ejecutar un programa de javascript, es necesario el uso de cualquier navegador moderno

- Chrome
- IE
- Firefox
- Safari
- Opera

La edición de Javascript puede ser en cualquier editor de texto: Notepad, Notepad++, TextMate, etc.

-==========-

## ¿Qué puedo hacer con Javascript?

- Trabajo de elementos HTML
- Inyección de HTML
- Páginas responsivas
- Detección de navegadores
- Validación y trabajo de formularios
- Animaciones
- Construir aplicaciones a través de un framework (AngujarJS, ReactJS, Jquery, BackboneJS, etc.)

-==========-

## Tipos de datos

Aunque en javascript no es necesario la definición del tipo de dato al momento de declarar una variable, podemos diferenciar entre los siguientes:

- Cadenas
- Números
- Booleanos
- Arreglos
- Objetos
- Null
- Undefined

-==========-

## Declaración de variables

```js
var variableCadena = "cadena";
var variableNumero = 2;
var variableBoleana = true;
var variableArreglo = [];
var variableObjeto = { };
```

-==========-

## Restricciones al declarar variables

- Pueden utilizarse números, letras, guión bajo y signos de dollar.
- No pueden iniciar con un número. Por ejemplo, la variable `1variable` produce un error.
- Las variables son case-sensitive. Lo cual significa que la variable `ejemplo` es diferente a `Ejemplo`.
- Las palabras reservadas de javascript no pueden utilizarse como variable. Por ejemplo `var`, `for`, `switch`, etc. no pueden ser utilizadas.

-==========-

## Flujo de control

Javascript tiene mucha similitud con lenguajes como java, c, c++ y c# en lo que refiere a flujos de control.

- if-else
- switch
- for
- while
- do-while

-==========-

## Flujo de control / if-else

```js
var condition = true;

if(condition) {
	//Si condition es verdadera
	// se ejecuta este bloque
}
else {
	//Si condition es falsa
	// se ejecuta este bloque
}
```

-==========-

## Flujo de control / switch

```js
var expression = 1;

switch (expression) {

	case 1: {
		//Si el valor de expression es 1
		//se ejecuta este bloque de código
	} break;

	case 2: {
		//Si el valor de expression es 2
		//se ejecuta este bloque de código

	} break;

	//otros case aquí

	default: {
		//Si el valor de expression no coincide con algún caso
		//se ejecuta este bloque de código
	} break;
}
```

-==========-

## Flujo de control / for

-==========-

## Flujo de control / while

-==========-

## Flujo de control / do-while
