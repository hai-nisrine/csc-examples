const pets = ['Smokey', 'Twix', 'Max', 'Yoshi'];

function generateRandomPet(petsArray) {
    return petsArray[Math.floor(Math.random() * petsArray.length)];
}

export { generateRandomPet, pets  };
