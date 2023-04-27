let Arr = [1, 2, 3, 4,];
console.log(Arr); //to print whole array
console.log(Arr[1]); // to print specific array

//length of array
console.log("the length of array is: ", Arr.length);

//to print whole array by loop
for (let i = 0; i<Arr.length; i++ )
{
    console.log(Arr[i]);
}

//changing the value of array
Arr[3] = 98;
console.log(Arr);

//Arrays behave like a object in JS
console.log(typeof Arr);