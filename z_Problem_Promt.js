//let a = prompt("Hey whats your age")
//var Name = prompt("What is your name?");  // when you only  prompt like this it shows an error prompt is not define

// to handle prompt error 
// install command:
// npm install prompt-sync
// and add following command on the top of the file:
//const prompt = require("prompt-sync")();

//Now code looks like:

prompt = require("prompt-sync")();

var Name = prompt("What is your name?"); 
let Age = prompt("Hey whats your age")

console.log("your name is:", Name);
console.log("your age is:", Age);
