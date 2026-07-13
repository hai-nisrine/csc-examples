
// const { generateRandomNumber, celsiusToFahrenheit }= require('./utils');

// const num = generateRandomNumber();
// console.log(`${num} to Fahrenheit: ${celsiusToFahrenheit(num)}`);

import getPosts , {getPostLength} from './postController.js';

console.log(getPosts());
console.log(getPostLength());
