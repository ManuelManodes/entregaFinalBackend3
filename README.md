# Entrega Final Backend 3

Este es el proyecto final del curso Backend 3 en la comisión 70375. El objetivo del proyecto es desarrollar una API RESTful para la gestión de usuarios, mascotas y adopciones, utilizando tecnologías modernas como Node.js, Express y MongoDB.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Licencia](#licencia)

## Descripción

La API permite realizar operaciones CRUD sobre usuarios, mascotas y adopciones. También incluye funcionalidades adicionales como autenticación de usuarios, generación de datos ficticios para pruebas y carga de imágenes.

## Características

- Gestión de usuarios, mascotas y adopciones.
- Autenticación de usuarios con JWT.
- Generación de datos ficticios utilizando Faker.js.
- Carga de imágenes con Multer.
- Conexión a MongoDB para persistencia de datos.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/src
  /controllers
  /models
  /routes
  /middlewares
  /utils
```

## Requisitos Previos

- Node.js (versión 14 o superior)
- MongoDB (versión 4.4 o superior)

## Instalación

1. Clona este repositorio.
2. Instala las dependencias ejecutando `npm install`.
3. Configura las variables de entorno en un archivo `.env`.

## Uso

1. Inicia el servidor con `npm start`.
2. Accede a la API en `http://localhost:3000`.

## Scripts Disponibles

- `npm start`: Inicia el servidor en modo producción.
- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm test`: Ejecuta las pruebas.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- JWT
- Faker.js
- Multer

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
