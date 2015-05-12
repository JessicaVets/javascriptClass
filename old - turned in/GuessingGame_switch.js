
var answer = prompt("what is my age?", "Guess Here");

switch(answer) {
  case '43':
    console.log("yup, you guessed it!");
    break;
  case answer>43:
    console.log("You think I am how old!?! No.");
    break;
    case answer<43:
    console.log("Love it, nope, passed that a few years ago.");
    break;
  default:
  console.log("That's not an age, that's an expression!");
}
