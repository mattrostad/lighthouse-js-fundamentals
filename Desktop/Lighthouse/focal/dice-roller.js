//Write a program that takes a single parameter from the command line, 
//a number, and rolls that many six-sided dice.

//> node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5

//To generate a random number, you'll have to use the built-in Math.random.

//can use Array.prototype.join.

function getRandomInt(max) {
  return Math.floor(Math.random() * max) +1;
}
const diceNumbers = []
for (let i = 0; i<3 ; i ++) {
  diceNumbers.push(getRandomInt(6))
}
console.log(diceNumbers.join())
