
const { generateRandomNumber, celsiusToFahrenheit }= require('./utils');

const num = generateRandomNumber();
console.log(`${num} to Fahrenheit: ${celsiusToFahrenheit(num)}`);
