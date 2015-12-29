// create a few basic statements
console.log("Start Program");
alert("Help me fix this program!");
alert("Can you get this message to appear?");
document.write("<h2>My first JavaScript program</h2>");
document.write("<p>I'm practicing 'debugging'.</p>");
console.log("End Program");

// created a variable called the variable in a comand, changed the value of the variable
var message = "Hello!";
alert(message);
message = "Welcome to JavaScript Basics.";


//caputuring data from user, save data to a variable
prompt('type something');
var visitorName = prompt('what is your name?');
console.log(visitorName);

// concatinating varariable to itself to update the value
var visitor = prompt('what is your name?');
var messages = 'Hello ' + visitor + ', ' + 'Welcome to this page.';
messages += " We are so glad that you came by to visit. "
messages += visitor;
messages += ", Please come again, when you want to learn some more."
document.write(messages);

// using methods
var stringToShout = prompt('What should I shout?');
var shout = stringToShout.toUpperCase();
shout += '!!!';
alert(shout);

// storing values and using operaters to do math
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysperWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<br> There are ' + secondsPerDay + ' seconds in a day');
