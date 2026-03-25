// Without loops
const vacationSpots = ['NYC', 'London', 'Berlin']

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// With loops
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

// looping through an array
for (let num = 5; num < 11; num++) {
  console.log(num);
}


// Reverse loop

for (let counter = 3; counter > -1; counter--){
  console.log(counter);
}

// Looping through an array

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

// Looping through an array in reverse
const vacationSpots1 = ['Bali', 'Paris', 'Tulum'];


for(let i = vacationSpots1.length - 1; i >= 0; i--){
  console.log('I would love to visit ' + vacationSpots1[i]);
}

// Nested loops
const arrayA = [6, 19, 20];
const arrayB = [19, 81, 2];
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] === arrayB[j]) {
      console.log('Both arrays have the number: ' + arrayB[j]);
    }
  }
}

// Looping through nested arrays
const bobsFollowers = ['Fred', 'Jane', 'Chris', 'Albert'];
const tinasFollowers = ['Sarah', 'Jane', 'Chris'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// While loops
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// While Loops and Arrays
const cards = ['diamond', 'spade', 'heart', 'club'];


let currentCard;
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


// Do ... while loops
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// A do while loop that prints 1, 2, and 3
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// Looping in reverse with a do while loop
const cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);

// break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for(let i = 0; i < rapperArray.length; i++) {
  if(rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
  console.log(rapperArray[i]);
}

console.log("And if you don't know, now you know.");


