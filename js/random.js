/*
The Random Number Guessing Game
Generates a number between 1 & 6
and gives a player two attempts to
guess the number.
*/

//assumes the player didn't guess correctly
var correctGuess = false;

// generates random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* test to see if player is
1. correct
2. guess too high
3. guess too low
*/
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess + '. You have 1 more chance.');
  if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
   var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess + '. You have 1 more chance.');
  if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}
// test is player is correct and outputs response
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
