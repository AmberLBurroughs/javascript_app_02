//random number creater like a dice rolling game choosing a 
// number 1 - 6 rounding to the closest whole number using the
// Math object with a couple diffent methods
var dieRoll = Math.floor(Math.random() * 6) + 1; // .random (0-1 dont use 1) multiply by 6 (dice have 6 faces) .floor round to the closest integer, add 1 because it will only go up to 5.  
document.write('You rolled a ' + dieRoll);
