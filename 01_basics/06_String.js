const name  = "himanshu"
const  salary = 2000
console.log(name + salary + "value");

// back-ticks ---> string interpulation
console.log(`hello my name is ${name} and my salary is ${salary}`);

// String declare 

 const  gameName = new String('pandit-com-shu')

 console.log(gameName.split('-'));
console.log(gameName);


console.log(gameName[5]);

console.log(gameName.__proto__);


// String function

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);



const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const secondString = "     asif    "
console.log(secondString);
console.log(secondString.trim());   //trime remove the spaces

//replace
const  url = "https://himanshu.com/hitesh%20shukla"
console.log(url.replace('%20', '_'))
console.log(url.includes('himanshu'))
