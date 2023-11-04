// try & catch 
// the try statement allows you to define a block of code to be tested for errors while it is being executed...
// the catch statement allows yoy to define a block of code to be executed if an error occurse in the try block..

console.log("hello")
try {
    console.log(a);
} catch {
    console.log("a variable not be define not exist in this code");
    console.log(console.error());
}

console.log("hello");
console.log("himanshu   ");

// ******************************************** MISCELLANEOUS TOPICS ************************************************************************

// arrow function
const sum = (a, b) => {
    console.log(a*b);
}
console.log(sum(4,5));

const cube = n=> {   //single argument parenthesis are optional
    console.log(n*n*n);
}

console.log(cube(3));

const power = (a,b) => {
    return a**b;
}
console.log(power(4,5));

const hello =() => {    // if we have no any arguments then its very important to use parenthesis....

}

// arrow function with (implicit return & explicit return) its use only small function

const mul = (a,b)=> (
    a*b
)
console.log(mul(5,6));

//set timeout  
//set time(timeout, function) and it is inbuild function (window object)...
//print after the timeout(take some time to execute)

// console.log("hello himanshu !");

// setTimeout( () => {
//     console.log("after 4sec");

// }, 4000)

// console.log("hello shukla !");

//set interval
let id = setInterval(() => {
    console.log("hie himanshu");
}, 2000)
clearInterval(id)  //stop the 
   

