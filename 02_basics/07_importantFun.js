
//filter function
// call back if return true then Element and in newelement if false then we cannot add Element in new Element

let nums = [1, 8, 5, 6, 9, 4, 1, 2, 3, 7];
let ans = nums.filter((el) => {
  return el % 2 == 0; // even true or false for odd nums
  return el % 2 != 0;
});
console.log(ans);

//every function
// returns true if every Element of array gives for some functions. else returns false..
// retrn true or false for the all element true then return true value and if one function can return false value then this 
// can also return false ssimmilar to AND operators

[14, 2, 4, 8].every((el) => {
  return el % 2 == 0
});  // return  true because every value is true

[14, 1, 2, 3, 7].every((el) => {
  return el % 2 == 0
});    // return false because some value are not rights

//some function  same as every function,  the difference is only this is fallow OR operator property



// reduce methods              finds maximum in an arrays
let number1 = [4,5,6,9,7,1,2];
let max = -1;
for(let i=0; i<number1.length; i++) {
  if (max < number1[i]){
    max = number1[i];
  }
}
console.log(max);

let maxi = number1.reduce((maxi, el) => {
  if(maxi < el) {
    return el;
  } else {
    return maxi;
  }

});
console.log(maxi);
// practice
// create if all Node. in our array are multiple of 10 or not 
let arr2 = [11,20,30,44,50];

let answ = arr2.every((el) =>el % 10 == 0);


// console.log(answ);
// create a function to find the min No. in an array 

function getMin(arr2){
  let min = arr2.reduce((min, el) => {
    if(min < el) {
      return min;
    } else {
      return el;
    }

    
  })
  console.log(min);
  return min;
}

getMin(arr2);
console.log();

//default parameter ... giving a default value to the arguments

function sum(a,b = 2) {
  let sum =  a+b;
  console.log(sum);

}

sum(2)   //default b= 2;
function sub(a = 3,b) {
  let sub =  a+b;
  console.log(sub);

}
sub(2)   // error because sub(2) when  we pass single value then its automatically stored in a and b is undefined


// spread function                     expand an iterable into multiple values...
 let arr3 = [4,5,6,3,2,1,7,8,9] 
 let newarr = [...arr3];
 console.log(newArray);

 let char = [..."hellow"]
 console.log(char);
 let odd = [1,3,5,7];
 let even = [2,4,6,8]
 let num4 = [...odd, ...even]
 console.log(num4);
//  we can use spread function with strings and arrays...

const data = {
  email : "shukla@gmail.com",
  password : "pandit@7379"
};
const dataCopy = {...data, id : 123, country : "india"}
console.log(dataCopy);
let arr5 = [4,5,6,3,2,17]
let obj = {...arr5}
console.log(obj);

// rest function
// allows a function to take an indefinite number of arguments and bundle them in an array...

 function sum1(...args) {
  for(let i=0; i<args; i++) {
    console.log("himanshu");
  }

 }
 sum1(4,5);

 //in javaScript have inbuilt arguments



function minimum() {
  console.log(arguments);
  console.log(arguments.length);      //arguments collection
}
minimum(4,5,6,9)

// destructuring function 
//storing values pf array into multiple variables....

let names = ["tony", "monu", "sonu", "stark"]
let [winner, runnerup, ...others] = names;
console.log(others);



// destructuring with objects 

const child = {
  name : "kunj",
  password : 12345,
  subjects :["hindi", "english", "maths"],
  username : "kunj@123",
  class: 8,
  city : "pratapgarh"
}

let {username : user,password:secreat, city= "lucknow"} = child;
console.log( user);
console.log(city);