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
- [Documentación](#documentación)
- [Testing](#testing)
- [Licencia](#licencia)

## Descripción

La API permite realizar operaciones CRUD sobre usuarios, mascotas y adopciones. También incluye funcionalidades adicionales como autenticación de usuarios, generación de datos ficticios para pruebas, carga de imágenes y herramientas avanzadas como logging, documentación interactiva y testing.

## Características

- Gestión de usuarios, mascotas y adopciones.
- Autenticación de usuarios con JWT.
- Generación de datos ficticios utilizando Faker.js.
- Carga de imágenes con Multer.
- Conexión a MongoDB para persistencia de datos.
- **Logging avanzado** con Winston.
- **Documentación interactiva** de la API con Swagger.
- **Testing exhaustivo** con Mocha, Chai y SuperTest.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/src
  /controllers    # Lógica de los endpoints
  /models         # Modelos de datos para MongoDB
  /routes         # Definición de rutas de la API
  /middlewares    # Middleware personalizados
  /services       # Lógica de negocio
  /utils          # Utilidades generales
/tests            # Pruebas unitarias e integradas
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

## Documentación

La API está documentada utilizando Swagger. Para acceder a la documentación interactiva:

1. Inicia el servidor.
2. Accede a `http://localhost:3000/api-docs` en tu navegador.

## Testing

El proyecto incluye pruebas unitarias e integradas para garantizar la calidad del código. Las pruebas están desarrolladas con Mocha, Chai y SuperTest.

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npx mocha test/mocks.router.test.js --timeout 5000
```

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- JWT
- Faker.js
- Multer
- Winston
- Swagger
- Mocha, Chai y SuperTest

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.