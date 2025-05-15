import { generateUsers, generatePets } from '../modules/mocking.js';
import { usersService, petsService } from './index.js';

/**
 * Genera una lista de usuarios ficticios
 * @param {number} count - Número de usuarios a generar
 * @returns {Array} Lista de usuarios ficticios
 */
const generateMockingUsers = (count) => {
    try {
        return generateUsers(count);
    } catch (error) {
        console.error('Error al generar usuarios ficticios:', error.message);
        throw new Error('Error al generar usuarios ficticios');
    }
};

/**
 * Genera una lista de mascotas ficticias
 * @param {number} count - Número de mascotas a generar
 * @returns {Array} Lista de mascotas ficticias
 */
const generateMockingPets = (count) => {
    try {
        return generatePets(count);
    } catch (error) {
        console.error('Error al generar mascotas ficticias:', error.message);
        throw new Error('Error al generar mascotas ficticias');
    }
};

/**
 * Genera e inserta datos ficticios en la base de datos
 * @param {number} usersCount - Número de usuarios a generar
 * @param {number} petsCount - Número de mascotas a generar
 */
const generateAndInsertData = async (usersCount, petsCount) => {
    try {
        if (!usersCount || !petsCount) {
            throw new Error('Parámetros inválidos: usersCount y petsCount son requeridos');
        }

        const users = generateUsers(usersCount);
        const pets = generatePets(petsCount);

        console.log('Generando usuarios y mascotas ficticios...');
        console.log('Usuarios:', users);
        console.log('Mascotas:', pets);

        // Inserta los datos en la base de datos
        await Promise.all([
            ...users.map(user => usersService.create(user)),
            ...pets.map(pet => petsService.create(pet)),
        ]);

        console.log('Datos ficticios insertados correctamente');
    } catch (error) {
        console.error('Error al generar e insertar datos:', error.message);
        throw new Error('Error al generar e insertar datos');
    }
};

export default {
    generateMockingUsers,
    generateMockingPets,
    generateAndInsertData,
};