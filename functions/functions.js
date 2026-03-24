// Function declaration

function getReminder() {
  console.log('Water the plants');
}

function greetInSpanish() {
  console.log('Buenas tardes.');
}

// Call the functions to test them out
function sayThanks(name) {
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.'
);
}

sayThanks('Cole');

sayThanks();
sayThanks();
sayThanks();


// Function with parameters
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// Function with parameters
function makeShoppingList(item1 = 'milk', item2 ='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Call the function with different parameters
function recetangleArea(width, height) {
    if(width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}

console.log(recetangleArea(5, 10));


// Function with return statement
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost)

// Function expression
const plantNeedsWater = function(day) {
  if(day === 'Wednesday') {
    return true
  } else {
    return false
  }
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// Arrow function
const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Concise body arrow function
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;
;
