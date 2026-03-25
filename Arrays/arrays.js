
// Example 1: Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Example 2: Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

// Example 3: Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// Example 4: The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// Example 5: The .push() method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('1','2')

console.log(chores)

// Example 6: The .pop() method this method removes the last element from an array and returns that element. This method changes the length of the array.

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores1.pop();

console.log(chores1);


// Example 7: The .shift() method - the difference between .shift() and .pop() is that .shift() removes the first element of an array, while .pop() removes the last element of an array.
// Use .shift() to remove the first item from the array and store it in a variable. Then, use console.log() to print the variable and the updated array.
// slice() method - The .slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// indexOf() method - The .indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// Example 8: Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

// Example 9: Nested Arrays
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]

// Example Nested Arrays 2 - Accessing Elements in Nested Arrays
const numberClusters = [[ 1, 2 ],[3, 4 ],[5, 6]];

const target = numberClusters[2][1];



