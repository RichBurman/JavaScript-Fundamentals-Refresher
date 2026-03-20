// This is a variable of my age. 
const myAge = 39;
// This is a variable of earlyYears and this value will change. 
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

const myAgeInDogYears = earlyYears + laterYears;

const myName = 'Richard'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)