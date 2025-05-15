import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js'; // Importa la instancia de la aplicación

describe('Pruebas de integración para mocks.router', () => {
    describe('GET /mockingpets', () => {
        it('Debería devolver una lista de mascotas ficticias', async () => {
            const res = await request(app).get('/mockingpets');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object'); // Cambiado de array a object
            expect(res.body).to.have.property('status', 'success');
            expect(res.body).to.have.property('payload').that.is.an('array');
            res.body.payload.forEach((pet) => {
                expect(pet).to.have.property('name');
                expect(pet).to.have.property('specie');
                expect(pet).to.have.property('birthDate');
                expect(pet).to.have.property('adopted');
            });
        });
    });

    describe('GET /mockingusers', () => {
        it('Debería devolver una lista de usuarios ficticios con el número especificado', async () => {
            const count = 10;
            const res = await request(app).get(`/mockingusers?count=${count}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status', 'success');
            expect(res.body.payload).to.be.an('array').with.lengthOf(count);
            res.body.payload.forEach((user) => {
                expect(user).to.have.property('username');
                expect(user).to.have.property('email');
                expect(user).to.have.property('firstName');
                expect(user).to.have.property('lastName');
                expect(user).to.have.property('role');
            });
        });
    });

    describe('POST /generateData', () => {
        it('Debería generar e insertar datos ficticios en la base de datos', async () => {
            const payload = { usersCount: 5, petsCount: 5 };
            const res = await request(app).post('/generateData').send(payload);
            expect(res.status).to.equal(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status', 'success');
            expect(res.body).to.have.property('message', 'Datos generados e insertados correctamente');
        });

        it('Debería devolver un error si faltan parámetros en el cuerpo de la solicitud', async () => {
            const res = await request(app).post('/generateData').send({});
            expect(res.status).to.equal(400); // Cambiado de 500 a 400
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status', 'error');
            expect(res.body).to.have.property('message', 'Parámetros faltantes');
        });
    });
});