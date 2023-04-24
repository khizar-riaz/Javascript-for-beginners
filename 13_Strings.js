//string is collection of characters
//two way to make string single and double qoute
let myName = "khizar";
let yourName = "Ali";

//access single character of string
console.log(myName[0]);

//template literals
let boy1 = "Ali";
let boy2 = "Asad";
//use template literals with back tick to print boy1 is friend of boy2
let sentence = "boy1 is the frined of boy 2";
let templateSentence = `${boy1} is a friend of ${boy2}`;
console.log(templateSentence);

//escape sequence character
//use single or double qoute in a string
// \n for new line
// /r for carriage return
let qoute = "He said that 'The earth is not round'";
console.log(qoute);
qoute = 'He said that "The earth is not round"';
console.log(qoute);
