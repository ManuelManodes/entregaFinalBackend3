import petModel from './Pet.js';

export default class PetsDAO {
    getAll = () => {
        return petModel.find();
    };

    getById = (id) => {
        return petModel.findById(id);
    };

    create = (pet) => {
        return petModel.create(pet);
    };

    update = (id, pet) => {
        return petModel.findByIdAndUpdate(id, { $set: pet }, { new: true });
    };

    delete = (id) => {
        return petModel.findByIdAndDelete(id);
    };
}