const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'

// Using getters allows us to access properties that are not directly stored on the object, but are instead computed based on other properties. In this example, fullName is a getter that combines the _firstName and _lastName properties to create a full name. This allows us to access the full name as if it were a regular property, while still keeping the individual first and last names separate.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);