//veriable is like a container in JavaScript.
//we can change the type of veriable on run time. thats why JS is dynamic type language.
console.log("change of data type");
//we can change like this
let num = 67; //a contain 67
console.log(num); // output 67
num = "khazir";
console.log(num); //output khizar

//variable name cannot start with number
// let 1name = "khizar"  this is not allowed

// not to use JS reserved words
//eg let var =7;  this is not allowed
console.log("js is case sensitive");
//JS is case sensitive
let name = "khizar";
let Name = "riaz"; //both veriables are ok
console.log(name); //reminder name is deprecated
console.log(Name);

//difference in var let and const
//const use to define constant veriable

//var use before ES6 so try to avoid it
//var is globally scope
var a = 12;
var b = "khizarriaz";
var c = null;
var d = undefined;
let e = "khizarriaz";

console.log("var type is global scope");
//var can be redaclared like in line 40
//var is global scope
console.log(b); //before block return khizarriaz
{
  var b = 112111;
  var b = 21;
  console.log(b); //in block return 21
}
console.log(b); //after block return 21 because of global scope

//let use for the declaration of blocked scope veriable
console.log("let type is blocked scope");
//let is blocked scope
//let cannot be redaclared like in line 52
console.log(e); //before block return khizarriaz
{
  let e = 21;
  //let e=31; this will give error
  console.log(e); //in block return 21 within block
}
console.log(e); //after block return khizarriaz
