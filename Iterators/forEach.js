const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// method 1: using an anonymous function
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));

// method 2: using a named function
function printFruits(element) {
  console.log('I want to eat a ' + element);
}

fruits.forEach(printFruits);

// method 3: using an arrow function
const printFruits2 = element => console.log('I want to eat a ' + element);