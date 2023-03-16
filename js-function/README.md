**function**
 -A JavaScript function is a block of code designed to perform a particular task.

**Define function**
 -To define function in JS ```function``` keyword is used.
```
function normalSqure(x) {
    return x*x;
}
```
**calling function**
```
squre(2)
```
**# ways to write function in JS**
1) normal fucntion
```
function normalSqure(x) {
    return x*x;
}
```
2) function expression
```
const expressionSqure = function(x) {
    return x*x;
}
```
2) arrow function
```
const arrowSqure = (x) => {
    return x*x;
}
//If ther is only one argument and only function statement in function then..
const squre = x => x*x;
//Note that if there is no argument or more then one argument then use round brackets.
const printName = () => console.log("your name");
// If you don't write round brackets then it will show the error: [Uncaught SyntaxError: Unexpected token '=>']
```
**Parameter passing**
-In JS parameterss are passed by value.
-If value of global variable change inside the function change wont affect globaly. It only resides in function.
-In JS Objects are passed by "copy of a reference". If some changes made on objects happen inside fucntion it will affect the globally.
-Read more about [parameter passing in JS](https://www.30secondsofcode.org/articles/s/javascript-pass-by-reference-or-pass-by-value)

**function hoisting**
-function hoisting mean the, function being called before it's declared.
-fucntion expression and arrow fucntion can not be hoisted.
```
hoist();
function hoist() {
    console.log("This function is hoisted");
}
```

**nested function**
-A function can be created or called inside another function.
```
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
const a = addSquares(2, 3); //  13
const b = addSquares(3, 4); //  25
const c = addSquares(4, 5); //  41
```

**arguments object**
-The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it.
```
const names = function (params) {
    console.log(arguments); 
}
names("sahil", "Mistry");
```

**bind(), apply(), call() methods**
1) bind()
-bind, creates new function and takes first argument as this value.
    ```
    const bindMethod = about.bind(name1, "dharanagar", "valsad");
    console.log(bindMethod()); //Sahil Mistry dharanagar valsad
    ```
1) call()
-call, It call the function and takes first argument as this value.
    ```
    about.call(name1, "dharanagar", "valsad"); //Sahil Mistry dharanagar valsad
    ```
2) apply()
-apply, It call the fucntion and takes first argument as this value and other arugment it take as array.
    ```
    const bindMethod = about.bind(name1, "dharanagar", "valsad");
    console.log(bindMethod()); //Sahil Mistry dharanagar valsad
    ```
