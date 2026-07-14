const pets = ['Smokey', 'Twix', 'Max', 'Yoshi'];

function generateRandomPet(petsArray) {
    return petsArray[Math.floor(Math.random() * petsArray.length)];
}

function getPetsCount(petsArray) {
    return petsArray.length;
}

export { generateRandomPet, getPetsCount, pets  };
