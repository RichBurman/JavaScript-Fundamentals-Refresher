// const addTwo = num => {
//   return num + 2;
// }

// const checkConsistentOutput = (func, val) => {
//   const checkA = val + 2;
//   const checkB = func(val);
//   if(checkA === checkB) {
//     return func(val)
//   } else {
//    return 'inconsistent results';
//   }
// }

// console.log(checkConsistentOutput(addTwo,2));

// Simple function that takes a number and returns that number + 2
const addTwo = num => {
  return num + 2;
}

// Higher-order function:
// - func: a callback function we want to test
// - val: the value we will pass into that function
const checkConsistentOutput = (func, val) => {

  // Manually calculate what we EXPECT the output to be
  const checkA = val + 2;

  // Call the provided function with the same value
  const checkB = func(val);

  // Compare expected result vs actual function result
  if (checkA === checkB) {

    // If they match, return the function's output
    return func(val);

  } else {

    // If they don't match, something is inconsistent
    return 'inconsistent results';
  }
}

// Test:
// addTwo(2) returns 4
// checkA = 2 + 2 = 4
// checkB = addTwo(2) = 4
// Since they match, result is 4
console.log(checkConsistentOutput(addTwo, 2));