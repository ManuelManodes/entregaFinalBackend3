import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mocksRouter from './routes/mocks.router.js';
import swaggerUi from 'swagger-ui-express'; // Importar Swagger UI
import swaggerSpec from './utils/swagger.js'; // Importar configuración de Swagger

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registro de rutas
app.use('/', mocksRouter);

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conexión a la base de datos y arranque del servidor
mongoose.set('strictQuery', true); // Configuración para evitar advertencias de Mongoose
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            console.log(`Documentación de la API disponible en http://localhost:${PORT}/api-docs`);
        });
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

// Exportar la instancia de la aplicación para pruebas
export default app;