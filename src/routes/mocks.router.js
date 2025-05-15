import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import mockingService from '../services/mocking.service.js';

const router = Router();

// Endpoint para obtener mascotas ficticias
router.get('/mockingpets', petsController.getMockingPets);

// Endpoint para generar usuarios ficticios
router.get('/mockingusers', async (req, res) => {
    const count = parseInt(req.query.count) || 50; // Por defecto genera 50 usuarios si no se especifica
    const users = mockingService.generateMockingUsers(count);
    res.send({ status: 'success', payload: users });
});

// Endpoint para generar e insertar datos en la base de datos
router.post('/generateData', async (req, res) => {
    const { usersCount, petsCount } = req.body;

    try {
        await mockingService.generateAndInsertData(usersCount, petsCount);
        res.status(201).send({ status: 'success', message: 'Datos generados e insertados correctamente' });
    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Error al generar datos: ' + error.message });
    }
});

export default router;