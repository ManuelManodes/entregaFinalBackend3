import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

/**
 * Genera un usuario ficticio
 * @returns {Object} Usuario ficticio
 */
export const generateUser = () => {
    return {
        username: faker.internet.userName(),
        password: bcrypt.hashSync('coder123', 10), // Simula un hash de contraseña
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: [],
        email: faker.internet.email(),
        firstName: faker.person.firstName(), // Actualizado a faker.person
        lastName: faker.person.lastName(),   // Actualizado a faker.person
    };
};

/**
 * Genera una mascota ficticia
 * @returns {Object} Mascota ficticia
 */
export const generatePet = () => {
    return {
        name: faker.animal.cat(),
        specie: faker.animal.type(),
        birthDate: faker.date.past({ years: 5 }).toISOString().split('T')[0], // Actualizado a objeto
        adopted: faker.datatype.boolean(),
    };
};

/**
 * Genera una lista de usuarios ficticios
 * @param {number} numUsers - Número de usuarios a generar
 * @returns {Array} Lista de usuarios ficticios
 */
export const generateUsers = (numUsers) => {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        users.push(generateUser());
    }
    return users;
};

/**
 * Genera una lista de mascotas ficticias
 * @param {number} numPets - Número de mascotas a generar
 * @returns {Array} Lista de mascotas ficticias
 */
export const generatePets = (numPets) => {
    const pets = [];
    for (let i = 0; i < numPets; i++) {
        pets.push(generatePet());
    }
    return pets;
};