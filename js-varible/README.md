# js-variables
### What is variable?
* Variables are containers for storing data (storing data values).
* 4 ways to declare a JavaScript variable:
    1) using var
    2) using let
    3) using const
    4) using nothing

**1) using var**:
* var keyword is used to created variable.
* **scope**: var is global  and fucntional scope. It is not block scope. If we delcare var inside {} it can access outside the {} but if we declare inside ```function func() {}``` It can not outside the fucntion.
    * block scope means, Everthing inside {} brackets has global scope.
* **declaration**: var can redeclared.
* **upadte**: var can be update.

**2) using let**:
* let keyword is used to created variable.
* **scope**: let is global and block scope.
* **declaration**: let can not be redeclared.
* **upadte**: ley can be update.

**3) using cosnt**:
* const keyword is used to created variable.
* **scope**: const is global and block scope.
* **declaration**: const can not be redeclared. We have to initialize at the time of delcaration other wise it will thorw an error.
* **upadte**: const can not be update.

### hoisting
* variables declared with var, let and const are hoisted. Simple meaning of hoisting is, variable or fuction can used brefore initialise.
```
console.log(fName); // undefiend
var fName = "Sahil";

console.log(mName); // refernce error
let mName = "Paresh";

console.log(lName); // reference error
const lName = "Mistry"
```
* Here fName is declared with var will give undefiend and mName & lName will give reference error. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared. Using a let variable before it is declared will result in a ReferenceError.
* The variable is in a **"temporal dead zone"** from the start of the block until it is declared:

[more about js variable scope](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)