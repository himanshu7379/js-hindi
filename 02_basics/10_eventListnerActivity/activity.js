// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomcolor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updates");
// })

// function getRandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//     console.log("paragarph was clicked");
// })




// ************************************************************ Activity 02 ***************************************************************
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");



 

btn.addEventListener("click", function() {
    let item  = document.createElement("li")
    item.innerText = inp.value;


    let delBtn = document.querySelector("button");
    delBtn.innerHTML = "delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

let delButton = document.querySelector(".delete");

for(delbtn of delButton){
    delbtn.addEventListener("click" , function() {
        console.log("element deleted");
    });
}