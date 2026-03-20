// if statements allow you to execute code based on a condition. If the condition is true, the code inside the block will run. If the condition is false, the code will be skipped.
// The else statement allows you to execute code if the condition in the if statement is false. You can have multiple else if statements to check for different conditions.
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

// Comparison Operators
// Comparison operators compare two values and return a boolean (true or false). The most common comparison operators are: >, <, >=, <=, ===, !==

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}

// Logical Operators
// Logical operators are used to combine multiple conditions. The most common logical operators are: && (and), || (or), ! (not)

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bedtime yet')
}

// Truthy and Falsy

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Short-Circuit Evaluation
let tool = 'marker';

// Use short-circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If Statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}

// The switch keyword

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place' :
  console.log('You get the silver medal!');
  break;
  case 'third place' :
  console.log('You get the bronze medal!');
  break;
  default :
  console.log('No medal awarded.');
  break;
}