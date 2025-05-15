import { Router } from 'express';
import mockingService from '../services/mocking.service.js';

const router = Router();

/**
 * @swagger
 * /mockingpets:
 *   get:
 *     summary: Obtiene una lista de mascotas ficticias
 *     responses:
 *       200:
 *         description: Lista de mascotas ficticias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 payload:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       specie:
 *                         type: string
 *                       birthDate:
 *                         type: string
 *                         format: date
 *                       adopted:
 *                         type: boolean
 */
router.get('/mockingpets', async (req, res) => {
    try {
        const pets = mockingService.generateMockingPets(10); // Genera 10 mascotas ficticias por defecto
        res.status(200).send({ status: 'success', payload: pets });
    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Error al generar mascotas ficticias: ' + error.message });
    }
});

/**
 * @swagger
 * /mockingusers:
 *   get:
 *     summary: Genera una lista de usuarios ficticios
 *     parameters:
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *         description: Número de usuarios a generar (por defecto 50)
 *     responses:
 *       200:
 *         description: Lista de usuarios ficticios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 payload:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       email:
 *                         type: string
 *                       firstName:
 *                         type: string
 *                       lastName:
 *                         type: string
 *                       role:
 *                         type: string
 */
router.get('/mockingusers', async (req, res) => {
    try {
        const count = parseInt(req.query.count) || 50; // Por defecto genera 50 usuarios si no se especifica
        const users = mockingService.generateMockingUsers(count);
        res.status(200).send({ status: 'success', payload: users });
    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Error al generar usuarios ficticios: ' + error.message });
    }
});

/**
 * @swagger
 * /generateData:
 *   post:
 *     summary: Genera e inserta datos ficticios en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usersCount:
 *                 type: integer
 *               petsCount:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Datos generados e insertados correctamente
 *       400:
 *         description: Parámetros faltantes
 *       500:
 *         description: Error al generar datos
 */
router.post('/generateData', async (req, res) => {
    const { usersCount, petsCount } = req.body;

    if (!usersCount || !petsCount) {
        return res.status(400).send({ status: 'error', message: 'Parámetros faltantes' });
    }

    try {
        await mockingService.generateAndInsertData(usersCount, petsCount);
        res.status(201).send({ status: 'success', message: 'Datos generados e insertados correctamente' });
    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Error al generar datos: ' + error.message });
    }
});

export default router;