const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3


const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});


const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})


console.log(foundAnimal); // Output: 7
console.log(startsWithS); // Output: 3