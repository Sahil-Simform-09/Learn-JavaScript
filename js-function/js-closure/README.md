# JavaScript closures
* A closure is combination of function bundeed togehter with refers to its lexical environment. we can say that, the function defiend in the closure **'remembers' the environment in which it was created.** 
* The closure is a collection of all the variables in scope at the time of creation of the function.
* **scope** means where you can access a specific variable or function in our code.
* To understand closure first understand execution contex. [Read here about execution contex](https://github.com/Sahil-Simform-09/learn-js/blob/developer/js-internal-working/js-execution-contex/README.md)
* A new Lexical Environment is created each time such code is evaluated. **lexical environment** is local memory along with it's  parent's **lexical environment**.
    * In short, every execution context has a Lexical Environment. This Lexical environments holds variables and their associated values, and also has a reference to its outer environment.
    * Abstractly, the environment looks like this in pseudocode:
    ```
    LexicalEnvironment = {
    EnvironmentRecord: {
    // Identifier bindings go here
    },
    
    // Reference to the outer environment
    outer: < >
    };
    ```
**Scope Chain**
* Based on the above definition, we know that an environment has access to its parent’s environment, and its parent environment has access to its parent environment, and so on. This set of identifiers that each environment has access to is called “scope.” We can nest scopes into a hierarchical chain of environments known as the “scope chain”.
```
function getName() {
    var fName = "Sahil";
    function getFullName() {
        var lName = "Mistry";
        return fName + " " + lName;
    }
   return getFullName;
}
var fullName = getName();
console.log(fullName()); // Sahil Mistry
 ```
 ![image](https://user-images.githubusercontent.com/124886751/227216857-f6810154-ce29-4c21-9ab9-c01bc22ef05d.png)
1) In Above Exmaple getName and fullName is declared in global execution contex at memorey allocation time. At code execution time Content of fullname is function defination(getFullName) with clousre. Closure contains variables are in scope. Here ```fName```.
    In easy we can say that when ```getName``` function is invoked it will return ```getFullName``` function defination and also  **closure**, Like container with variables that were in scope when it's created.
2) Therefore when ```fullName``` function is invkoed it has access tio ```fName``` variable even if local execution context of ```getName``` is closed and all variables inside that local contex is killed.
### Important links 
[Step by Step breakdown of JavaScript closure](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)      
[Learn closures with more examples](https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/)
