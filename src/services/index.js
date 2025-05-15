import Users from "../dao/models/Users.dao.js";
import PetsDAO from "../dao/models/Pets.dao.js"; // Asegúrate de que este archivo exista
import Adoption from "../dao/models/Adoption.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

import { __dirname, logger } from "../utils/index.js"; // Importamos dirname y logger

// Servicios
export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new PetsDAO()); // Usamos PetsDAO correctamente
export const adoptionsService = new AdoptionRepository(new Adoption());

// Exportamos dirname y logger para usarlos en otras partes del proyecto si es necesario
export { __dirname, logger };