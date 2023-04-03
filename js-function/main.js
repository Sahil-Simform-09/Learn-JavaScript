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

//how  this works inside arrow function 
const user = {
    fName: "Sahil",
    lName: "Mistry",
    getName: function() {
        console.log(this.fName + " " + this.lName); // sahil Mistry
    },
    arrowGetName: () => {
        console.log(this.fName + " " + this.lName); // undefiend undefiend
    }
}
const user1 = {
    fName: "Krishna",
    fullName: this.fName + " " + "Mistry", // undefiend Mistry
    arrowFullName: () => {
        console.log(this.fName + " " + "Mistry"); // undefiend Mistry
    }
}
const fruit = {
    fruit: ["Banana", "Apple", "Mango"],
    myName: "Sahil",
    fruitMyName: function(){
        const lName = "grt";
        const newArray = this.fruit.map((item) => {
            return item + "-" + this.myName;
        });
        console.log(newArray);
        return newArray;
    }
}
const myArray = fruit.fruitMyName();

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
const add1 = x => {
    x += 5;
    console.log(x);
}
console.log(obj.x); // val of x will change bcz obj is pass as copy of refernece.

//calling function
add(x);
add1(x);

//function hoisting
//calling fucntion
hoist();
//normal fucntion can hoisted
function hoist() {
    console.log("This function is hoisted");
}
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
const add2 = (x, y = 5) => {
    return x+y;
}
console.log(add2(5)); //10
console.log(add2(5, 10)); //15, Here it will not take default value.

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
about("Dfd", "Ferf");

//call, It call the function and takes first argument as this value
about.call(name1, "dharanagar", "valsad"); //Sahil Mistry dharanagar valsad

const arr = ["kanakriya", "Ahmedabad"];
//apply, It call the fucntion and takes first argument as this value and other arugment it take as array
about.apply(name2, arr); //Krishna Mistry kanakriya Ahmedabad

//bind, creates new function and takes first argument as this value
const bindMethod = about.bind(name1, "dharanagar", "valsad");
console.log(bindMethod()); //Sahil Mistry dharanagar valsad

//pollyfill for bind
const myObj = {
    fName: "Sahil",
}
function getName(lName, street, district) {
    console.log(this.fName + " " + lName + " " + street + " " + district);
}
Function.prototype.myBind = function(myObj, ...args) {
    let referdObj = this;
    return function(...args2) {
        console.log(args);
        referdObj.apply(myObj, [...args, ...args2]);
    }
}
const bindName = getName.myBind(myObj,"Mistry", "Dharanager");
bindName("Valsad");

// bind resolve this problem
var user2 = {
    fName:"Sahil",
    getName: function () {
     console.log(this.fName);
    }
};
var getBindName = user2.getName.bind(user2);
setTimeout(getBindName , 5000);

// IIFE function
(function (){
    console.log("hello IIFE function");
})();
(() => {
    console.log("hello arrow IIFE function");
})();
