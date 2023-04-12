//condition like enter email or phone number
//if, else if , else

let age = 31;

//only if

if (age > 18) {
  console.log("this is a valid age");
}

//if , else

if (age < 18) {
  console.log("this is  the teen age");
} else {
  console.log("this is  not the teen age");
}

//if, else if, else

if (age < 12) {
  console.log("this is  the child age");
} else if (age > 13 && age < 19) {
  console.log("this is the teen age");
} else if (age > 19 && age < 25) {
  console.log("this is the young age");
} else {
  console.log("this is the mature age");
}

//switch statement

switch (age) {
  case "age<12": {
    console.log("this is the child age switch");
    break;
  }
  case "age>13 && age<19": {
    console.log("this is the child age switch");
    break;
  }
  case "age>19 && age<25": {
    console.log("this is the child age ");
    break;
  }
  default: {
    console.log("this is the mature age");
  }
}

//ternary operator

console.log("this is the", age < 19 ? "teen age" : "mature age");
 