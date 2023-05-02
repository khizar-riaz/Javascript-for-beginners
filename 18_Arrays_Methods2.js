let num = [1,2,3,4,5,6,7,8,9];
console.log(num);
delete num[0]; //it will give empty item at 0 index and do not effect array length
console.log(num);

//to mix arrays using concat
let num_more = [11,12,14,16,18];
let newarray = num.concat(num_more);
console.log(newarray);

//array sorting alphabetically
let arr = [12,19,3,4,2,1,18,111,22];
arr.sort();
console.log(arr);


//reverse array
let arr2 = [2,4,6,8,10];
console.log("normal array: ", arr2);
arr2.reverse();
console.log("reverse array: ", arr2);

//splice and sclice 
//splice add new array item
arr2.splice(2,3,1021,1022,1023);  //add on index 2, remove 3 elements and add 1021,1022,1023 in place of that 3 elements
console.log("adding new element : ", arr2);

//sclice
let arr3 = arr2.slice(2,4);
console.log(arr3);

