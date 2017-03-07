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

- `getPathDatabase():String`: Devuelve la ruta donde se encontrará el archivo `JSON`. Ejemplo:

```java
private static String getPathDatabase() {
    return "ruta/de/archivo.json";
}
```

- `setJsonObject(name:String, lastName:String, username:String, password:String):boolean`: Devuelve `true|false` en función si se creó o no el usuario en el archivo `JSON`. Ejemplo:

```java
private static boolean setJsonObject(String valorPropiedad) {
     JSONObject obj = new JSONObject();

	//Solo guarda un valor
    obj.put("NombrePropiedad", valorPropiedad);

	String rutaJson = getPathDatabase(); //llamada a método anterior

    try (FileWriter file = new FileWriter(rutaJson)) {
            file.write(obj.toJSONString());

            return true;
    }
    catch(IOException ioext) {
        return false;
    }
}
```

- `getJsonObject():JSONObject`: Devuelve un objeto de tipo JSONObject con la información almacenada en el archivo `JSON`. Ejemplo:

```java
private static JSONObject getJsonObject() {

        try {
			String rutaJson = getPathDatabase();
            JSONParser parser = new JSONParser();
            Object obj = parser.parse(new FileReader(rutaJson));

            JSONObject jsonObject =  (JSONObject) obj;

            return jsonObject;
        }
        catch(IOException ioext) {
            return null;
        }
        catch(ParseException pext) {
            return null;
        }
    }
```

- `getUserByUsername(username:String):User`: Devuelve un objeto de tipo `User` con la información del archivo `JSON`.

```java
public static User getUserByUsername(String username) {
    User user;

    JSONObject jsonObject = getJsonObject(); //llama a método anterior

    if(jsonObject != null) {
        String propiedadDb = (String) jsonObject.get("NombrePropiedad");

		//Valida si el usuario que se pide es igual al que se encuentra
		//en el archivo JSON
        if(username.equals(propiedadDb)) {
            user = new User(propiedadDb); //Completar con todas las propiedades del usuario
        }
        else {
            user = null;
        }

        return user;
    }
    else{
        return null;
    }
}
```



2.- Agregar una nueva clase de nombre `Authenticate` con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/05.png" width="300" />
