// This is the kelvin value. It is a constant value and will not change. 
const kelvin = 293;

// This is celsius. Which is 293 - 273. 
const celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
const fahrenheit = (Math.floor(celsius * (9/5) + 32));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);