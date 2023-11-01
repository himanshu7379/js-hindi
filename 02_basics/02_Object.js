// declare 2-3 types ...  like a literals, constructor, singleton
// when we declare with literals then singleton cannot form


 //object literals


 Object.create      // create object by constructor

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

 //thread/twitter Post
// create an object literal for the properties of thread/twitter post which includea

const post = {
   usreName: "himanshu_9454",
   content: "this is my #firstpost",
   reposts : 5,
   likes: 150,
   tags :["@aman", "@shradha", "@asifkhan"]
   
}
// console.log(post);


// add and update object by using .operator
const student = {
   name: "himanshu",
   age : 23,
   city: "pratapgarh",
   marks: 80
}
console.log(student);
student.city = "lucknow";
student.gender = "male"
student.marks = 85
console.log(student);

delete student.age;
console.log(student);

// Nested object

// const classInfo = {
//    himanshu:{
//       city: "pratapgarh",
//       grade: "B+"
//    },
//    shudhanshu:{city: "allahbad",
//    grade: "A+"},
//    ankit:{city: "lucknow",
//    grade: "A+"},
//}
// console.log(classInfo.ankit.city);

// Array of object

const classInfo = [
   { name: "himanshu",
      city: "pratapgarh",
      grade: "B+"
   },
   { name: "shudhanshu",
      city: "allahabad",
      grade: "O+"
   },
   { name: "ankit",
      city: "varanasi",
      grade: "B+"
   },
]
console.log(classInfo[0].grade);


// maths object 

math.PI



 









