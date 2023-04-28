let num = [1,2,3,4,5,6,7,8,9];
console.log(num);
delete num[0]; //it will give empty item at 0 index and do not effect array length
console.log(num);

//to mix arrays using concat
let num_more = [11,12,14,16,18];
let newarray = num.concat(num_more);
console.log(newarray);

//array sorting
let arr = [12,19,3,4,2,1,18,111,22];
arr.sort();
console.log(arr);