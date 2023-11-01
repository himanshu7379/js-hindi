// ++++++++++++++++++++++++++++++++++++++++++++++ NUMBERS  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      

// const score = 99
// console.log(score);

// const balance = new Number(5000)
// console.log(balance);

// console.log(balance.toString().length);

// const otherNum = 123.948255
// console.log(otherNum.toPrecision(3));

const third = 500000
console.log(third.toLocaleString('en-IN'));



// +++++++++++++++++++++++++++++++++++++++++++++++++  MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math.abs(-66));
// console.log(Math.round(1.8));  
// console.log(Math.ceil(4.2));  nearest largest integer value
// console.log(Math.floor(5.8));  nearest smallest integer value
// console.log(Math.min(5,6,8,1,2));

console.log((Math.random()*100));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)));

console.log(Math.floor(Math.random()*5)) + 21;

const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
