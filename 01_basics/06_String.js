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



// String methods 


// str.trim()         remove spaces/whitespaces from both ends of string and return a new one...
let mesg = "    hello     ";
console.log(mesg);
console.log(mesg.trim());

// String are immutable,  it mean we can not any changes in original Strings

// toupperCase(), toLowerCase()  convert our string in lower case and upper case...
let myname  = "himanshu"
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());

// String methods with arguments
// arguments is a some value that we pass to the 

// indexOf(""):-  returns the first index of occurence of some value in string or gibes -1 if not found
console.log(myname.indexOf("s"));

// method chaining :-  using one method after another.order of execution will be left to right
console.log(mesg.trim().toUpperCase());


// slice methods()       returns a part of the original string as a new string.

let str1 = "loveCoding";
console.log(str1.slice(5));
console.log(str1.slice(1,5));
console.log(str1.slice(1,str1.length));
console.log(str1.slice(-5));


// replace method()    searches a value in the string & returns a new string with the value replaced (replace first occurenece)..
console.log(str1.replace("love", "do"));  // doCoding


// repeat method()  returns a string with the number of copies of a string
console.log(str1.repeat(2));  // loveCodingloveCoding..



// ++++++++++++++++++++++++++++++++++++++++++++++  PRACTICE   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
let fruit ="      apple"
console.log(fruit.trim().toLocaleUpperCase());   // AAPPLE


let str2 = "apnaCollege"
let newstr2 = console.log(str2.slice(4).replace("l", "t").replace("l", "t")); 



let age = parseInt(prompt("enter yor age"))
console.log(age);