prompt = require("prompt-sync")();
//QNO1: array of numbers and take input from users
let arr = [1, 2, 3, 4, 5, 6, 84];
let aa = prompt("enter a number");
aa = Number.parseInt(aa);
arr.push(aa);
console.log(arr);

//QNO2 add numbers in array until 0 is added
let a;
do {
  a = prompt("enter a number");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);
console.log(arr);

//QNO3 filter array divisible by 10
let arr2 = [1,2,30,40,4,560,9];
let newarray = arr2.filter((x) =>{
    return x%10 == 0;
})
console.log(newarray);

//QNO4 create an array of square of number
let arr3 = [1,3,4,5,66,7,8];
let narray = arr3.map((y)=>{
    return y*y;
})
console.log(narray);