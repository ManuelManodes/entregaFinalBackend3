import { generateUsers, generatePets } from '../modules/mocking.js';
import { usersService, petsService } from './index.js';

const generateMockingUsers = (count) => {
    return generateUsers(count);
};

const generateMockingPets = (count) => {
    return generatePets(count);
};

const generateAndInsertData = async (usersCount, petsCount) => {
    const users = generateUsers(usersCount);
    const pets = generatePets(petsCount);

    await Promise.all([
        ...users.map(user => usersService.create(user)),
        ...pets.map(pet => petsService.create(pet)),
    ]);
};

export default {
    generateMockingUsers,
    generateMockingPets,
    generateAndInsertData,
};