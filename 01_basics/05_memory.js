// two types of memory   1) Stack (Primitive) copy
//   2) Heap (Non-primitive)   refernce

//  Stack: It is a data structure used to store static data. Static data refers to data whose size is known by the engine during compile time. 
// In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined. 
// References that point to objects and functions are also included. A fixed amount of memory is allocated for static data. 
// This process is known as static memory allocation.



//  Heap: It is used to store objects and functions in JavaScript. The engine doesn’t allocate a fixed amount of memory. 
// Instead, it allocates more space as required.



let myname = "himanshuShukla";
let anotherName = myname;
anotherName = "pandit";
console.log(anotherName);
console.log(myname);

// HEAP

let usre = {
  email: "himanshu@gmail.com",
  upi: "user@ybl",
};

let userTwo = usre;

userTwo.email = "pandit@gmail.com";

console.log(usre.email);
console.log(userTwo.email);
