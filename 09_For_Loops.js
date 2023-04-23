//loops are program reapeated actions

//for loop
//loop the block of code number of times
for(let i=0; i<5; i++)
{
    console.log(i);
}
//starement let i=0 runs first
//then is check condition i<5
//then it goes into the body
//after that it increment i as i++

//program to add first 30 natural numbers
let sum = 0;
for (let i = 1; i<=30; i++)
{
sum += i;

}
console.log("sum of first 30 natural number:", sum);


//for in loop
//for in loop mostly works with arrays
//loop through the keys of the object

let obj = {
    khizar: 69,
    asad: 12,
    khan: 15
}
for (let i in obj){
    console.log("marks of "+i+ " are " + obj[i])
}

//for of loop
//loop through the values of the object

for (let i of "khizar"){ 
    console.log(i);
}