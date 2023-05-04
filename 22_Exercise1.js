//JS code to generate rendom number and store in veriable
//then take input from user to tell his number and whether the guess is correct greater or lower.
//the program is expected to terminated when number is gussed. number must be between 1 to 100
let guess;
let randomNumber;

randomNumber = Math.floor(Math.random() * 100) + 1;

while (guess !== randomNumber) {
  guess = parseInt(prompt("guess a number between 1 and 100: "));

  if (guess === randomNumber) {
    alert(" you have gussed the number");
  } else if (guess < randomNumber) {
    alert("your number is low. try again:  ");
  } else {
    alert("your number is high. try again: ");
  }
}
