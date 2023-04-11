//this wil execute and will be no error
77;
("khizar riaz");

console.log("operatore in JS +, - *, / **, %");
let a = 45;
let b = 4;

console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b);
console.log("a**b=", a ** b);
console.log("a%b=", a % b);

console.log("increments and decrements in JS");
console.log(a++); //returen 45 but value of a will be 46 now
console.log(a); //return 46

console.log(a--); //return 46 but value of a is 45 now
console.log(a); //return 45

console.log(++a); //return 46
console.log(a); //return 46

console.log(--a); //return 45
console.log(a); //return 45

console.warn("assignment operators in js");
let x = 8; //we have assigned a with 8
x += 5; //it is same as a = a+5
console.log("x +=5 :", x); /// return 13 and now value of x -is 13
x -= 10; // same as x = x-10
console.log("x -= 10 :", x); //return 3

console.log("comparision operators in JS >, <, !, ==, !-, ===, !==");
let comp1 = 12;
let comp2 = 25;
let comp3 = "12";
console.log("comp1==comp2 is? ", comp1 == comp2); //it will return false because both have differnet values
console.log("comp1!=comp2 is? ", comp1 != comp2); //it will return true because both have differnet values

console.log("comp1==comp3 is? ", comp1 == comp3); //it will return true dispite one is number and other is string
console.log("comp1===comp2 is? ", comp1 === comp2); //it will return false because it is and exactly comparision also compare datatype

console.log("comp1!=comp3 is? ", comp1 != comp3); //it will return false
console.log("comp1!==comp2 is? ", comp1 !== comp2); //it will return true because it is and exactly comparision also compare datatype which is not same

console.log("logical operators in JS &&,||, !");
let c = 2;
let d = 4;

console.log(c == 14 && d < 12); //it will reture false because both must have to be ture
console.log(c == 14 || d < 12); //it will reture true because one must have to be ture

console.log ("comments in js single line and multi line");

//I am single line comment

/*I 
am
multi 
line 
comment */

