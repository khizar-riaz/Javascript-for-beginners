//qno1 length count
let str = "khazir ";
console.log(str.length);

//qno2 include  start switch and end switch
const sentnce = "The quick brown fox jumps over the lazy dog";
const word = "fox";
console.log(sentnce.includes(word));

//qno3 to lower case
let str2 = "THE WORLD";
console.log(str2.toLowerCase());

//qno4
let str3 = "please give RS 1000";
let amount = Number.parseInt(str3.slice(15));
console.log(amount);

//qno5
let friend = "khizar";
friend[3] = "r";
//it will not chage  character of
//string beacue string is immutable
console.log(friend);
