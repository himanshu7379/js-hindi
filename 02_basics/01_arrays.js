 // array  The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name,
 // and has members for performing common array operations.

 /*  
 JavaScript arrays are resizable and can contain a mix of different data types. 
 (When those characteristics are undesirable, use typed arrays instead.)

JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
 but must be accessed using nonnegative integers (or their respective string form) as indexes.


JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1,
 and so on — and the last element is at the value of the array's length property minus 1.


JavaScript array-copy operations create shallow copies.
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
 as those of the source object from which the copy was made.

 (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)
  as those of the source object from which the copy was made.
   */


  const myArr = [0,1,5,6,9,7]
  const myHeroes = ["shaktiman", "guddu", "lallan" ]
  console.log(myHeroes[1]);

  const myArr2 = new Array(7,3,7,9,1)
  console.log(myArr2[3]);

//  ---------------------------------------    ARRAY  MATHODS  ------------------------------------------------------------------------------

myArr.push(6)
myArr2.push(5)
console.log(myArr2);
console.log(myArr);

myArr2.unshift(8)

console.log(myArr2);
console.log(myArr2.includes(9));
console.log(myArr2.indexOf(8));
console.log(myArr2);

const newArray = myArr2.join()
console.log(myArr2);
console.log(newArray);
console.log(typeof newArray);

//    slice, splice

console.log("A", myArr2);
const myn1 = myArr2.slice(1,3)
console.log(myn1);
console.log("B", myArr2);

// The splice() method of Array instances changes the contents of an array by removing or
//  replacing existing elements and/or adding new elements in place.

// *********************************************************  DAY2  ****************************************************************
const marvelHeroes = ["superman", "ironman" , "thor", "batman"]
const city = ["lucknow", "pratapgarh" , "delhi" , "prayagraj"]

marvelHeroes.push(city)                   // push methods
console.log(marvelHeroes[4][1]);

const heroCity = marvelHeroes.concat(city) // concat method
console.log(heroCity);

const allHero = [...marvelHeroes,...city]  // spread method
console.log(allHero);




//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const anotherArray = [1,2,3,4,[5,6,7,[8,9,[10,11,12]]]]
const real_anotherArray = anotherArray.flat(Infinity) 
console.log(real_anotherArray);  


// The flat() method of Array instances creates a new array with all sub-array 
// elements concatenated into it recursively up to the specified depth. 





console.log(Array.isArray("himanshu"))
console.log(Array.from("himanshu"));
console.log(Array.from({name:"HIMANSHU"}));        //intersting

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or



let score1  = 100     //convert into multiple variable into array
let score2  = 200
let score3  = 300
let score4  = 400
let score5  = 500

console.log(Array.of(score1, score2, score3, score4, score5))

// The Array.of() static method creates a new Array instance from a variable number of arguments, 
// regardless of number or type of the arguments.


