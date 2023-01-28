function whatToDoForLunch(hungry, availableTime) {
  if (hungry) {
    console.log("I`am hungry and I have " + availableTime + " Minutes for lunch")
  } else {
    console.log("I`m not hungry and I have " + availableTime + " Minutes for lunch")
  }
}
/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);