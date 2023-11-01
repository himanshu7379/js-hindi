console.log("himanshu");
// loop to iterate to repeat the peace of code

//for loop

for(let i=10; i<5; i++) {
    console.log(i);
}

for(let i=10; i>=1; i--){
    if(i%2 != 0) {
        console.log("odd number is: ",i);
    }
}

let num = 5;
for(let i=1; i<=10; i++) {
    console.log(i*5);

}

for(let i=1; i<=3; i++) {
    console.log("outter loop");
    for(let j=1; j<=3; j++) {
        console.log("inner loop", j);
    }
}


// ***************************************  WHILE LOOP ************************************************************************************

let i = 5;
while(i>=1){
    console.log(i);
    i--;
}


 let fruits = ["mango","apple", "banana", "papaya" ,"orange", "litchi"]
 for(i of fruits) {
    console.log(i);
 }
 let strings = "himanshushukla"
 for(ch of strings) {
    console.log(ch);
 }