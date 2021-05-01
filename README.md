# base-web

## Requerimientos
Para utilizar este proyecto necesitas tener previamente instalado
* [node](https://nodejs.org/en/download/) v14.16.1
* [npm](https://www.npmjs.com/get-npm) 6.14.12
* [vue-cli](https://cli.vuejs.org/guide/installation.html) @vue/cli 4.5.12

## Instalación
Instala las dependencias del proyecto 
```
npm install
```

## Configuración
### Título y Descripción
Las variables de título y descripción se utilizan en los meta tags de la cabecera del html y como parte del mensaje de alerta cuando no se tiene activado javascript en el navegador.

Edita las variables en el archivo `.env`, `.env.pruebas` y `env.production` en la raiz del proyecto.
```
VUE_APP_TITLE = titulo nuevo del proyecto
VUE_APP_DESCRIPTION = descripción del proyecto
```

### Configuración para entorno local
La variable `VUE_APP_BASE_ROUTE` en el archivo `.env` apuntando a raiz.
```
VUE_APP_BASE_ROUTE = /
```

### Configuración local de subfolder para Pruebas y Producción
Cambia el nombre de la carpeta pública editando la variable `VUE_APP_BASE_ROUTE` de los archivo `.env.pruebas` y `env.production`. De preferencia ambos entornos deben tener la misma subcarpeta, para comprobar que esté bien la configuración en pruebas, antes de salir a producción.
```
VUE_APP_BASE_ROUTE = /nombredelsubfolder/
```

### Configuracion en el servidor de subfolder en Producción
#### Apache
Esta guardada la configuracion del subfolder en la carpeta `public` del proyecto en el archivo `.htaccess``
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /nombredelsubfolder
  RewriteRule ^nombredelsubfolder/index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /nombredelsubfolder/index.html [L]
</IfModule>
```

#### nginx
Nunca he tenido un servidor con nginx pero este tutorial que me encontré se ve bueno
[deploy vue with nginx on sub path](https://medium.com/h-lab/how-to-deploy-vue-with-nginx-on-sub-path-ed8eadbc1bc5)


## Scripts 
### Instalar dependencias
```
npm install
```

### Correr local
```
npm serve
```

### Compilar para develop
```
npm run dev
```

### Compilar para producción
```
npm run build
```
