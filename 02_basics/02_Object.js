// declare 2-3 types ...  like a literals, constructor, singleton
// when we declare with literals then singleton cannot form


 //object literals


 //   Object.create      // create object by constructor

 const mySymbol = Symbol("key1")

 const jusre = {          // create object by literals
    name : "himanshu",
    "full name": "himanshu shukla",
    age: 22,  
    location : "lucknow",
    email: "himanshu@google.com",
    islogedin: false,
    lastloginDays: ["monday", "tuesday"] ,
    [mySymbol]: "myname"       
 } 
//  console.log(jusre.email);
//  console.log(jusre["email"]);
//  console.log(jusre.full name);           // problem with js because variable declare as string
//  console.log(jusre["full name"])

//  console.log(jusre.mySymbol);              // act like a string  define:-  as [mySymbol]
//  console.log(typeof jusre.mySymbol);       // String


//  console.log(jusre[mySymbol]);
//  console.log(typeof mySymbol);


//  jusre.name = "pandit"
//  console.log(jusre["name"]);

//  Object.freeze(jusre)
//  console.log(jusre);

 jusre.greeting = function() {
    console.log("hello JS suer");
 }


 jusre.greetingTwo = function() {
    console.log( `hello JS user ${this.name}`);
 }

 console.log(jusre.greeting());
 console.log(jusre.greetingTwo());


 









