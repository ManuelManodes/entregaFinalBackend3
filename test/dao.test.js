import Users from '../src/dao/models/Users.dao.js';
import PetsDAO from '../src/dao/models/Pets.dao.js';

const testDAOs = async () => {
    const usersDAO = new Users();
    const petsDAO = new PetsDAO();

    try {
        // Prueba el método `save` de Users.dao.js
        const user = await usersDAO.save({
            username: 'testuser',
            password: 'hashedpassword',
            email: 'test@example.com',
            role: 'user',
        });
        console.log('Usuario creado:', user);

        // Prueba el método `create` de Pets.dao.js
        const pet = await petsDAO.create({
            name: 'Test Pet',
            specie: 'dog',
            birthDate: new Date(),
            adopted: false,
        });
        console.log('Mascota creada:', pet);
    } catch (error) {
        console.error('Error durante las pruebas de DAOs:', error.message);
    }
};

testDAOs();