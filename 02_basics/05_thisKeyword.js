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

