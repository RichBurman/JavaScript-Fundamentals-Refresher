const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

// Factory functions are a way to create multiple objects with the same structure, but different values. They are a more flexible alternative to constructor functions and classes, as they allow us to create objects without the need for the new keyword. Factory functions can also be used to create objects that have private properties and methods, which can help to encapsulate data and prevent it from being accessed or modified outside of the object.
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory('P-500', true);

tinCan.beep()


// Property Value Shorthand

const robotFactory1 = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory1('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)