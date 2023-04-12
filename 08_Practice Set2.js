//Is age lie between 10 and 20
let age = 10;
if (age>10 && age <20){
    console.log("Age lie between 10 and 20");
}
else{
    console.log("Age is not in between 10 and 20");
}


//switch case statement
switch(age){
    case "age>10 && age<20":
        {
            console.log("Age is in between 10 and 20");
            break;
        }
    default:
        {
            console.log("Age is not in between 10 and 20");
        }
}


//Is number devisible by 2 and 3 
let number = 10;
if (number % 2 == 0 && number % 3 == 0){
    console.log("Number is dividsible by 2 and 3");
}
else {
    console.log("Number is not divisible by 2 and 3");
}


//Is number devisible by 2 or 3
if (number % 2 == 0 || number % 3 == 0)
{
    console.log("Number is divisible by 2 or 3");
} 
else{
    console.log("Number is not divisible by 2 or 3");
}

//use ternary operator to print you can or cannot drive
let driveAge= 13;
console.log("you can:", (driveAge>18 ? "drive" : "not drive"));