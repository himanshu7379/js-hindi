// function chai() {
//     username = "himanshu";
//     console.log(this.username);
// }


const chai = () => {
    username : "shukla"
    console.log(this);
}
chai()

// const addtwo = (a,b) => {
//     return a+b;
// }


// implicit arrow function
const addtwo = (a,b) => a+b;

// const addtwo = (a,b) => (a+b)

// explicit arrow function return neccessory
console.log(addtwo(5,3));

const myArray = [4,5,9,6,8,7]
myArray.forEach(() => {}) 