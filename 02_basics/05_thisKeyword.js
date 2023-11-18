// this  keyword refers to an object that is executing the current piece of code

const student = {
    name : "himanshu shukla",
    age: 23,
    engl : 65,
    math : 90,
    science: 50,
    getavg(){
        let avg = (this.engl + this.math + this.science)/3;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg} in exam `);
        console.log(this);

    }
}

function getavg(){
    console.log(this);
}
getavg();
// student.getavg()

//this keyword with arrow function...

const employee = {
    name: "shudhanshu",
    age : 56,
    salar: 500000,
    prop:this,
    getname : function () {
        console.log(this);
        return this.name
    },
    getAge : () => {
        console.log(this);
        return this.age;
    },
    getInfo1 : function(){
        setInterval(() => {
            console.log();
        },2000)
    },
    getInfo2 : function (){
        setTimeout(function (){
            console.log();

        },2000 );
    },
}

const square = (n) => {
    return n*n;

}

let id = setInterval (() => {
    console.log("heelo himanshu");
}, 2000);
setTimeout(() => {
    clearInterval(id)
    console.log("clear interval ");
},10000);

