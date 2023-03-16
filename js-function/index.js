//Types of the function
//normal function
function normalSqure(x) {
    return x*x;
}
//function expression
const expressionSqure = function(x) {
    return x*x;
}
//arrow function
const arrowSqure = (x) => {
    return x*x;
}
//If ther is only one argument and only function statement in function then..
const squre = x => x*x;
//Note that if there is no argument or more then one argument then use round brackets.
const printName = () => console.log("your name");
// If you don't write round brackets then it will show the error: [Uncaught SyntaxError: Unexpected token '=>']

//calling fucntions
console.log(normalSqure(2));
console.log(expressionSqure(2));
console.log(arrowSqure(2));
printName();


//parameters pass by value
let x = 10;
const add = x => {
    x += 5;
    console.log("val of x inside fucntion", x);
}
console.log("val of x outside of function", x); // val of x wont change bcz it is pass value.

const obj = {
    x: 10
}
const add = x => {
    x += 5;
    console.log(x);
}
console.log(obj.x); // val of x will change bcz obj is pass as copy of refernece.

//calling function
add(x)


//function hoisting
//calling fucntion
// hoist();
//normal fucntion can hoisted
// function hoist() {
//     console.log("This function is hoisted");
// }
//expression & arrow fucntion can not hoisted  [Uncaught ReferenceError: Cannot access 'hoist' before initialization]
const hoist =  function() {
    console.log("his function is hoisted");
}
const hoist  = () => {
    console.log("This fucntion is hoisted");
}


//arguments object
const names = function (params) {
    console.log(arguments); 
}
//calling fucntion
names("sahil", "Mistry");
//Note:- arguments wont work with arrow functions.


//default parameter
//we can put default value for parameter
const add = (x, y = 5) => {
    return x+y;
}
console.log(add(5)); //10
console.log(add(5, 10)); //15, Here it will not take default value.

//call, apply, bind
const name1 = {
    firstName: "Sahil",
    lastname: "Mistry"
}
const name2 = {
    firstName: "Krishna",
    lastname: "Mistry"
}
const about = function(street, district) {
    console.log(this.firstName + " " + this.lastname + " " + street + " " + district);
}
//call, It call the function and takes first argument as this value
about.call(name1, "dharanagar", "valsad"); //Sahil Mistry dharanagar valsad

//apply, It call the fucntion and takes first argument as this value and other arugment it take as array
about.apply(name2, ["kanakriya", "Ahmedabad"]); //Krishna Mistry kanakriya Ahmedabad

//bind, creates new function and takes first argument as this value
const bindMethod = about.bind(name1, "dharanagar", "valsad");
console.log(bindMethod()); //Sahil Mistry dharanagar valsad

