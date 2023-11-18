// let btns = document.querySelectorAll("button")
// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     }
//     console.dir(btn);
// }

// function sayHello() {
//     alert("hello");

// }
// btn.onclick = sayHello;

// ******************************************** Query Selectors    **************************************************************************

// documents.querySelector('p')          //selects first p elements
// documents.querySelector('#myid')      // selects first elements with id = #myid
// document.querySelector('.myclass')   // selects first elements with class = #myclass
// document.querySelectorAll('p')       // selects all p elements


// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector('#heading'));
// console.dir(document.querySelector('.quali'));
// console.dir(document.querySelector('#skills'));
// console.dir(document.querySelectorAll('li'));

// let color = document.querySelectorAll(".heading");
// for(let i = 0; i<HTMLHeadingElement.length; i++) {
//     color[i].style.color = "orange";
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++PRACTICE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let para1 = document.createElement("p");
para1.innerText = "hey i am a paragarph";
document.querySelector('body').prepend(para1);
para1.classList.add('red');


 // 2)..
 let h3 = document.createElement("h3");
 h3.innerText = "hey i am a h3";
 document.querySelector('body').prepend(h3);
 h3.classList.add('blue');


 let div = document.createElement("div");
 let h1 = document.createElement("h1");
 let para2 = document.createElement("p");


 h1.innerText = "i am in a DIV";
 para2.innerText = "ME TOO!";
 div.append(h1);
 div.append(para2);

 div.classList.add("box");

 document.querySelector("body").prepend(div);


//  ------------------------------------------------- EventListner ---------------------------------------------------------------------------

let btns = document.querySelector("button");

// btns.addEventListener("click",Hello )
// btns.addEventListener("click",sayName )
btns.addEventListener("dblclick",function() {
    console.log("you click double clicked me");
} );

function Hello() {
    alert("hello");
}

function sayName() {
    alert("hie My name is himanshu shukla");
}