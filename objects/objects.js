// Objects
let fasterShip = {
  color: 'silver', 'Fuel Type': 'Turbo Fuel'
}

// Dot notation

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below

const crewCount = spaceship.numCrew;

const planetArray = spaceship.flightPath;


// Bracket notation


let spaceship2 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

isActive = spaceship2['Active Mission'];

console.log(spaceship2[propName]);

// Property assignment

let spaceship3 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};


// Update the spaceship object below
spaceship3.color = 'glorious gold';

spaceship3.numEngines = 6;

// delete the Secret Mission property
delete spaceship3['Secret Mission']

// Methods 

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat();
alienShip.takeOff();
