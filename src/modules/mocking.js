const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');

const generateUsers = (numUsers) => {
    const users = [];
    const roles = ['user', 'admin'];

    for (let i = 0; i < numUsers; i++) {
        const role = roles[Math.floor(Math.random() * roles.length)];
        const user = {
            username: faker.internet.userName(),
            password: bcrypt.hashSync('coder123', 10),
            role: role,
            pets: []
        };
        users.push(user);
    }

    return users;
};

module.exports = {
    generateUsers
};