//these are higher order array methods
//to save time
//modern JS methods

//Array Map Method
//it make new array from previous array
//for each loop doesnot make new array
let arr = [45, 23, 21];
console.log(arr);
arr.map((value)=>
{
    console.log(value);
})

//new array from map
let newarray = arr.map((value1) =>{
  return value1+1;
})
console.log("new array from map: ", newarray);

//Array Filter Method
let arr2 = [45, 21, 4, 1, 22];
let a = arr2.filter((val)=>{
 return val<10;
})
console.log("value less then 10 in array by filter: ", a);

//Array reduce Method
//initialy it will take h1 and h2 as first and second values of array
let arr3 = [1, 2, 3, 2, 1, 5];
let a3 = arr3.reduce((h1, h2)=>
{
 return h1+h2;
})
console.log(a3);