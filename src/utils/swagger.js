import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestión de Usuarios y Mascotas',
            version: '1.0.0',
            description: 'Documentación de la API desarrollada en el curso de Backend',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Cambia esto según tu entorno
                description: 'Servidor de desarrollo',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // Ruta a los archivos donde defines tus endpoints
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;