// create a few basic statements 
console.log("Start Program");
alert("Help me fix this program!");
alert(Can you get this message to appear?);
document.write("<h2>My first JavaScript program</h2>");
document.write("<p>I'm practicing 'debugging'.</p>");
console.log("End Program");

// created a variable called the variable in a comand, changed the value of the variable
var message = "Hello!";
alert(mesaage);
message = "Welcome to JavaScript Basics.";

//caputuring data from user, save data to a variable
prompt('type something');
var visitorName = prompt('what is your name?');
console.log(visitorName);

// concatinating varariable to itself to update the value
var visitor = promt('what is your name?');
var message = 'Hello ' + visitor + 'Welcome to Treehouse.';
message += "We are so glad that you came by to visit."
message += visitor;
message += ". Please come again, when you want to learn some more."
document.write(message);