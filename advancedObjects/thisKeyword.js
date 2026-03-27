const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
};

goat.makeSound(); // Prints: 'baaa'

const goat2 = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(dietType);
  },
};
goat2.diet();
// Output will be "ReferenceError: dietType is not defined"
// That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

const goat3 = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat3.diet();
// Output: herbivore

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}`)
  }
};

console.log(robot.provideInfo());

// important to not use arrow functions for methods, as they do not have their own 'this' context and will not refer to the object when called.
// const goat = {
//   dietType: 'herbivore',
//   makeSound() {
//     console.log('baaa');
//   },
//   diet: () => {
//     console.log(this.dietType);
//   }
// };

// goat.diet(); // Prints undefined
