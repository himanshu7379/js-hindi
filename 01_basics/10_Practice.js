let num  = 25
if(num%10 == 0) {
    console.log("GOOD");
} else {
    console.log("BAD");
}

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`My name is ${name} and my age is ${age}`);


let quarter = 2

switch(quarter) {
    case 1 : console.log("Jan, Feb, Mar");
    break;
    case 2 : console.log("Apr, May, Jun");
    break
    case 3 : console.log("Jull, Aug, Sept");
    break;
    case 4 : console.log("Oct, Nov, Dec");
    break
    default: console.log("maa chudaye");

}

let str = "mango";
if(str[0] == 'a' || str[0] == 'A' && (str.length > 5)){
    console.log("golden string");
} else {
    console.log("not golden string");
}



let a = 10;
let b = 50;
let c = 20;

if(a > b) {
    if(a > c) {
        console.log(`${a} is grater then all of these`);
    } else {
        console.log("c is greater the a, b");
    }
} else {
    if(b > c) {
        console.log(" b is greater then all of these");
    } else {
        console.log("c is grater then all of these");
    }
}


let num1 = 31;
let num2 = 452;

if(num1 % 10 == num2%10) {
    console.log("number have the same last digit which is", num1 % 10);
} else {
    console.log("number does not have the same last digit");
}

