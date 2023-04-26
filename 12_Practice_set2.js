//print marks of the student by forloop
 let marks = {
  Khizar : 100,
  Ali: 23,
  Asad: 56,
  Saad: 99
 }
 for (let i=0; i<Object.keys(marks).length; i++){
    console.log("the marks of "+Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
 }


 //print marks of the students by for in loop
 for (let key in marks)
 {
    console.log("the marks of " +key+ " are " + marks[key]);
 }

 //program print try again until user enter the correct number
 prompt = require("prompt-sync")()

  let correctNumber = 4;
  let number;
  while (number!=correctNumber){
    number = prompt("enter a number :")
  }
  console.log("you have entered a correct number")


  //function to fine mean of 5 numbers
  const mean = (a, b, c, d, e) =>
  {
    return (a+b+c+d+e)/5;
  }
  console.log(mean(2,4,6,8,10));
  
