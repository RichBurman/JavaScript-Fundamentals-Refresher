// JavaScript Practice File
// use node practice.js to run this file in the terminal

console.log("Hello, JavaScript!");

// Add your practice code below:

// Example: Math methods

// Math floor rounds down to the nearest whole number
// Math random generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 100));

// Math ceil rounds up to the nearest whole number
console.log(Math.ceil(43.8));

// isInteger checks if the value is an integer
console.log(Number.isInteger(2017));

// Example: Variables
const message = "Welcome to JavaScript practice";
console.log(message);

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// Example: Increment and Decrement
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// String Concatenation with Variables
const favoriteAnimal = 'dog';
console.log('My favorite animal: ' + favoriteAnimal);

// String Interpolation with Template Literals
const myName = 'Richard';
const myCity = 'New York City';
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

// typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
