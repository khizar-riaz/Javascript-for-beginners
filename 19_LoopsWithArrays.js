let num = [1, 2, 3, 5, 6];

//print array values  using for loop
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
//print array values using for each loop[]
num.forEach((element) => {
  console.log(element);
});

//array .from which is use to make array from a string
let mname = "khizar";
let arr = Array.from(mname);
console.log(arr);

//for of loop
for (let i of num) {
  console.log(i);
}

//for in loop it will return keys not the values
for (let j in num) {
  console.log(j);
}
