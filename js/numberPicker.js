// created a random number picker using user input of two numbers
var userInput1 = prompt("type a starting number");
var inputBottom = parseInt(userInput1);
var userInput = prompt("type another number");
var inputTop = parseInt(userInput);
var randoNumber = Math.floor(Math.random() * (inputTop - inputBottom + 1)) + inputBottom;
var message = "<p>" + randoNumber + " is a number between " + inputBottom + " and " + inputTop + "</p>";
document.write(message);
