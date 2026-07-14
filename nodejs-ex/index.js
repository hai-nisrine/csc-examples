import { generateRandomPet, pets } from './petsController.js';

const randomPet = generateRandomPet(pets);

console.log(`The pet of the day is: ${randomPet}, Congratulations ${randomPet}!`);
