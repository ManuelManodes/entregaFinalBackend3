import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateUsers = (numUsers) => {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        const user = {
            username: faker.internet.userName(),
            password: bcrypt.hashSync('coder123', 10),
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: [],
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
        };
        users.push(user);
    }
    return users;
};

export const generatePets = (numPets) => {
    const pets = [];
    for (let i = 0; i < numPets; i++) {
        const pet = {
            name: faker.animal.cat(),
            specie: faker.animal.type(),
            birthDate: faker.date.past({ years: 5 }).toISOString().split("T")[0], // Actualizado
            adopted: faker.datatype.boolean(),
        };
        pets.push(pet);
    }
    return pets;
};