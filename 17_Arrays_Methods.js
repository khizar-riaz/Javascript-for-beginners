let num = [1, 2, 3, 45];

//convert into string
let b = num.toString
console.log(b);

//join array
let c = num.join("");
console.log(c, typeof c);

//pop method to exclude last element in array
let d = num.pop();
console.log(d);

//push return new array length
let e = num.push(56);
console.log(num);

//shift removes an element from the start of the array
let r = num.shift();
console.log(r);
console.log(num);

let m = num.unshift(78);
console.log(m);
console.log(num);