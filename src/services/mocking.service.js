import { generateUsers, generatePets } from '../modules/mocking.js';
import { usersService, petsService } from './index.js';

const generateMockingUsers = (count) => {
    return generateUsers(count);
};

const generateMockingPets = (count) => {
    return generatePets(count);
};

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
            ...users.map(user => usersService.create(user)), // Llama al método `create` de usersService
            ...pets.map(pet => petsService.create(pet)),     // Llama al método `create` de petsService
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