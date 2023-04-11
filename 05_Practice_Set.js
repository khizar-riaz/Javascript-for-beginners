//create a veriable of type string and try to change this in a nmber.
let a = "khizar";
console.log(a); //it will return string
a = 21;
console.log(a); //it will return number  
 
//use type of operator to find the type of string.
let b = "hello world";
console.log (typeof b);

//const object and change it to the number.
const c = "Javascript";
//c = 21; it will give an error

//add a new key in a const object
const student = {
    name: "khizar",
    class: "14th",
    isGerman: false,
    sems: 2
}
console.warn(student);

student['name'] = "riaz"; 
student['sems'] = 3;  //we can add or change the internal key value in const
console.log(student);

//JS program to create word meaning dictionary of  words
const dict = {
    appriciate: "to give someone ",
    nice: "honest",
    bad: "not good",
    love: "affection",
    solid: "strong"
}

console.warn(dict); //to print whole dictionary
console.warn(dict.nice); //to print specific word