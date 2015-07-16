//conditinal statement 

var answer = prompt('what programming language is the name of a gem?');
if ( answer.toUpperCase() === 'RUBY' ) {
  document.write("<p> That's right!</p>");
} else {
  document.write("<p> Sorry, </p>" + answer "<p> is not the correct answer.</p>");
}