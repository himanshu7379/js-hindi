// function in javascript.....
// block of code

function hello() {
    console.log("himanshu");
}
hello();

function printNo() {
    for(let i=0; i<10; i++) {
        console.log("number is : ",i);
    }
}

printNo(hello());

// *********************************************** PRACTICE *******************************************************************************

function poem () {
    console.log("tiwinkle tiwinkle little star how are wonder what do you are......");
}
// poem();

function dice() {
    let reandom = Math.floor(Math.random()*6) + 1;
    console.log(reandom);
}
// dice();

// function with argument  
  function info (name,age) {
    console.log(`my name is ${name} and my age is ${age}`);

  }
  info("himanshu shukla", 23)

