let a = 1;
let b = 2;

console.log("sum of a and b without function", a + b);

// doing the same thing by function
function plusofveriables(x, y) {
  return x + y;
}

console.log("sum of two number with function: ", plusofveriables(a, b));

//arrow function in JS
const sum = (i, j) => {
  return i + j;
};
console.log("sum of two numbers with arrow function:", sum(a, b));
