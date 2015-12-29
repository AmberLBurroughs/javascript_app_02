/*
A simple 5 question quiz
adds up how many questions are correct
give a score according to how many are correct
*/

// 5 questions & a score of zero
// test is questions 1-5 are correct adds 1 point to score
var score = 0;

var answerOne = prompt('what color is a banana?');
if( answerOne.toUpperCase() === 'YELLOW'){
  score += 1;
}

var answerTwo = prompt('what is 5 * 100');
if( answerTwo === '500'){
  score += 1;
}

var answerThree = prompt('what color is the ocean?');
if( answerThree.toUpperCase() === 'BLUE'){
  score += 1;
}
var answerFour = prompt('what is 60 / 2');
if( answerFour === '30'){
  score += 1;
}

var answerFive = prompt('what day comes after Monday?');
if ( answerFive.toUpperCase() === 'TUESDAY'){
  score += 1;
}

document.write('<h3>You answered ' + score + ' questions correctly!</h3>');

// according to what the end score is player is ranked
if (score === 5) {
  document.write('<h2>You answered all 5 questions correct. You earned a <strong>gold crown</strong>.</h2>');
}else if (score === 3 || score === 4 ) {
  document.write('<h2>You answered ' + score + '/5 questions correctly. You earned a <strong>silver crown</strong>.</h2>');
}else if (score === 1 || score === 2 ) {
  document.write('<h2>You answered ' + score + '/5 questions correctly. You earned a <strong>bronze crown</strong>.</h2>');
} else {
  document.write('<h2>You did not answer any of the questions correctly :( </h2>');
}
