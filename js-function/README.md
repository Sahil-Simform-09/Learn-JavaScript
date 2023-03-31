# function
* A JavaScript function is a block of code designed to perform a particular task.

### Define function
* To define function in JS ```function``` keyword is used.
```
function normalSqure(x) {
    return x*x;
}
```
### calling function
```
squre(2)
```

### ways to write function in JS
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
3) arrow function
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
* In arrow function ```this``` isn't bound to the object that's calling function. 
```
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
```
* In JavaScript object don't create a binding with this a function do.
* ```this``` inside the arrow function is going to be exactly what it would be outside function.
* This code snipet will expalin above statement.
```
const user1 = {
    fName: "Krishna",
    fullName: this.fName + " " + "Mistry", // undefiend Mistry
    arrowFullName: () => {
        console.log(this.fName + " " + "Mistry"); // undefiend Mistry
    }
}
```
* Here in both cases this will refer window object.
* Rule to finding out what ```this``` is inside the arrow function.**It has to see what is the value of ``this``` in the surrounding scope where function expression is**
### Parameter passing
* In JS parameterss are passed by value.
* If value of global variable change inside the function change wont affect globaly. It only resides in function.
* In JS Objects are passed by "copy of a reference". If some changes made on objects happen inside fucntion it will affect the globally.
* Read more about [parameter passing in JS](https://www.30secondsofcode.org/articles/s/javascript-pass-by-reference-or-pass-by-value)

### function hoisting
* function hoisting mean the, function being called before it's declared.
* fucntion expression and arrow fucntion can not be hoisted.

```
hoist();
function hoist() {
    console.log("This function is hoisted");
}
```

### nested function
* A function can be created or called inside another function.
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

### arguments object
* The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it.

```
const names = function (params) {
    console.log(arguments); 
}
names("sahil", "Mistry");
```

### bind(), apply(), call() methods
```
const name1 = {
    firstName: "Sahil",
    lastname: "Mistry"
}
```
1) call()
* call, It call the function and takes first argument as this value.
    ```
    about.call(name1, "dharanagar", "valsad"); //Sahil Mistry dharanagar valsad
    ```
2) apply()
* apply, It call the fucntion and takes first argument as this value and other arugment it take as array.
    ```
    const bindMethod = about.bind(name1, "dharanagar", "valsad");
    console.log(bindMethod()); //Sahil Mistry dharanagar valsad
    ```
3) bind()
* With the ```bind()``` method, an object can borrow a method from another object or a function. The ```bind()``` takes an object as an argument and returns a new function whose this refers to the object we passed as an argument..
```
const bindMethod = about.bind(name1, "dharanagar", "valsad");
console.log(bindMethod()); //Sahil Mistry dharanagar valsad
```
* Sometimes the ```bind()``` method has to be used to prevent losing this.
* Ex.

```
const user = {
  fName:"Sahil",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}
setTimeout(user.getName, 3000);
```
* Here **undefiend undefiend**  will printed because ```getName()``` function will be pass as callback function and callback function work as normal function it is not method and ```this``` inside normal function always refer global object (Window) [refer about this here](https://github.com/Sahil-Simform-09/learn-js/tree/main/js-this)
* To solve this problem ```bind()``` is used.
* Every function has the method ```bind()``` , which returns a new function with this bound to a value. The function has exactly the same behavior as the one you called .bind on, only that this was set by you. **No matter how or when that function is called, this will always refer to the passed value.**

```
const user = {
  fName:"Sahil",
  getName: function () {
    return this.fName;
  }
}
const getBindName = user.getName.bind(user);
setTimeout(getBindName , 3000);
```
**Creating your own bind() (Polyfill of bind)**         
What is polyfill?       
Polyfill is a fallback for a method that is not supported by the browser by default.            
Create your own ```bind()``` method.
1) Create an object with ```myObj()``` name and function with ```myBind()``` name   which will work as ```bind()``` method for us and add ```myBind()``` to function prototype.
2) ```bind()``` always return a function, for that return a function from ```myBind()```

    ```
    const myObj = {
        fName: "Sahil",
    }   
    function getName() {
        console.log(this.fName);
    }
    Function.prototype.myBind = function(myObj) {
        let referdObj = this; // this will refer to getName()
        return function() {
            referdObj.apply(myObj); // invoke getName()
        }
    }
    const bindName = getName.myBind(myObj);
    bindName(); // Sahil
    ```
3) ```bind()``` method also accept arguments, here in our implementation of ```myBind()``` if we try to pass arguments to ```myBind()``` then it'll will give undefiend.
    
    ```
    function getName(lName) {
        console.log(this.fName + " " + lName);
    }
    const bindName = getName.myBind(myObj, "Mistry");
    bindName(); // Sahil undefiend
    ```

    To resolve this problem we need to pass argument to our ```myBind()``` method.
    
        
        Function.prototype.myBind = function(myObj, ...args1) {
            let referdObj = this; // this will refer to getName()
            return function() {
                referdObj.apply(myObj, args1); // invoke getName()
            }
        }   
        const bindName = getName.myBind(myObj, "Mistry");
        bindName(); // Sahil Mistry
        
4) Now our ```myBind()``` method is working perfectly. But there is last problem which is, when we try to pass parameter to ```bindName()``` then it'll print undefiend.

    ```
    function getName(lName, district) {
        console.log(this.fName + " " + lName + " " + district);
    }
    bindName("Valsad"); // Sahil Mistry undefiend
    ```

    To resolve the problem we have to pass argument while returning function from ```myBind()```

    ```
    Function.prototype.myBind = function(myObj, ...args1) {
        let referdObj = this; // this will refer to getName()
        return function(...args2) {
            referdObj.apply(myObj, [...args1, ...args2]); // invoke getName()
        }
    }  
    bindName("Valsad"); // Sahil Mistry Valsad
    ```
5) Now our ```myBind()``` will work same as ```bind()```. We can use this method.
[learn more about spread and rest operator]()
### IIFE function
* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
```
(function () {
  // …
})();

(() => {
  // …
})();
```
