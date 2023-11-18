// function in javascript.....
// block of code

function hello() {
    console.log("himanshu");
}
hello();

function printNo() {
    for(let i=0; i<10; i++) {
        console.log("number is : ",i);
    }
}

// printNo(hello());

// *********************************************** PRACTICE *******************************************************************************

function poem () {
    console.log("tiwinkle tiwinkle little star how are wonder what do you are......");
}
// poem();

function dice() {
    let reandom = Math.floor(Math.random()*6) + 1;
    console.log(reandom);
}
// dice();

// function with argument  
  function info (name,age) {
    console.log(`my name is ${name} and my age is ${age}`);

  }
//   info("himanshu shukla", 23)

  function table(no) {
    for(let i=1; i<10; i++) {
        console.log(`${no}*${i} =`,i*no);
    }
  }

  // table(8);


//   function with return 

function sum(a,b) {
    return a + b;
}

// sum(5,9);

// console.log(sum());


function sumOfNo(n) {
    let sum = 0
    for(let i=1; i<=n; i++) {
         sum = sum+i;
        
    }
     console.log(sum);
    return sum;
}

// sumOfNo(5)

let names = ["himanshu", "ankit", "sonu", "monu"]
function concat(name){
  let result;
    for(let i=0; i<names.length; i++) {
      
        result+= name[i];
        console.log(result);
    }
    
    return result

}
concat(names);

// SCOPE 
// two scope first global scope and second function scope 
// NOTE:- variable define inside a function are not accessible(visible) from outside the function....let result;

// BLOCK SCOPE
// variable scope declared inside a {} block cannot be accessed from outside the block..
// block scope cannot apply in var variable
// block scope can be apply only in (let, const)

// LEXICAL SCOPE 
// a variable define outside a function can be accessible inside another function defined after the variable declaration...
// the opposite in not allowed...
// hoisting..padhana hai 

let greet = "hello";
function changegreet() {
  let greet = "namaste";
  console.log(greet);

  function innergreet() {
    console.log(greet);
  }
  innergreet();
}
console.log(greet);
changegreet()

// NAMELESS FUNCTION  are also known as function expression
// when a function stored in a variable so in this function is nameless

let him = function(){  // void apne aap aa agaya won't worry
  console.log("himanshu")
}

console.log(him());

//higher order function

function oddEvenFactory(request){
  if(request == "odd") {
    let odd = function(n){
      console.log(!(n%2 == 0));

    }
    return odd;
  } else if(request == "even") {
    let even = function(n) {
      console.log(n%2 == 0);
    }
    return even
  } else {
    console.log("wrong request");
  }
}


// methods   actions that can be performed on the objects

const calulator = {
  num: 55,
  add: function(a,b){
    return a+b;
  },
  sub: function(a, b) {
    return a-b;

  },
  multi: function(a,b){
    return a*b;
  },
  div: function(a,b){
    return a/b;
  }
}
console.log(calulator.sub(5,3));

// methods(shorthand)

const secondcalulator = {
  num: 55,
  add(a,b){
    return a+b;
  },
  sub(a, b) {
    return a-b;

  },
  multi(a,b){
    return a*b;
  },
  div(a,b){
    return a/b;
  }
}


// ********************************************  Immediately Invoked function Expressions (IIFE) *****************************************

// global scope se pollution(declared variable) se problem jo bhi declarartion hai usko hattane ke liye (IIFE)


(function chai() {
  console.log(`DB CONNECTED`)
})()
console.log(chai());

((name) => {
  console.log(`db connected two,${name}`);
})("himanshu")


