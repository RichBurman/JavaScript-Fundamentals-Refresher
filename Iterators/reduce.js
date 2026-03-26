// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })

// console.log(summedNums) // Output: 17

// second argument for .reduce()
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

// Another example of .reduce() with a second argument
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
