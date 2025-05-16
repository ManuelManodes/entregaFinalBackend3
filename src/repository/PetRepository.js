// filepath: /Users/manuelmanodes/Coderhouse/Backend 3/entregaFinalBackend3/src/repository/PetRepository.js
export default class PetRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async create(petData) {
        return this.dao.create(petData); // Llama al método `create` del DAO
    }

    async getAll() {
        return this.dao.getAll();
    }

    async getById(id) {
        return this.dao.getById(id);
    }

    async update(id, petData) {
        return this.dao.update(id, petData);
    }

    async delete(id) {
        return this.dao.delete(id);
    }
}