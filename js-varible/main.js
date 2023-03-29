//declare variable using var
var num1; 
var num1 = 20 //20, redelcared.
function add() {
    var num2 = 10;
    console.log(num1 + 10); //10
}
if(true) {
    var num3 = 10;
}
console.log(num2); // It will trow error.
console.log(num3); // 10
num1 = 30 //30

//declare varible using let
let num1;
let num1 = 20 // It will trow error.
function add() {
    let num2 = 10;
    console.log(num1 + 10); //10
}
if(true) {
    let num3 = 10;
}
console.log(num2); // It will trow error.
console.log(num3); // It will trow error.
num1 = 30 //30

//declare varible using const
const num1; 
const num1 = 10;
function add() {
    const num2 = 10;
    console.log(num1 + 10); //10
}
if(true) {
    const num3 = 10;
}
console.log(num2); // It will trow error.
console.log(num3); // It will trow error.
const num1 = 20 // It will trow error.
num1 = 30 // It will trow error.

//hoisting
console.log(fName); // undefiend
var fName = "Sahil";

console.log(mName); // refernce error
let mName = "Paresh";

console.log(lName); // reference error
const lName = "Mistry"
