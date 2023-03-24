# JavaScrip execution contex.
### How JavaScript Code Gets Executed
* The browser doesn't directly understand high-level JavaScript code. It needs to converted into a format that hte browser can understand.          
When browser encounters JavaScript code it sends it to its JavaScript engine. Then browser js engine creates an environment known as **Execution contex**.      Execution context contains code currently running.
* There are two kind of Execution contex in JavaScript.
    #### 1) Global Execution Context (GEC)
    #### 2) Function Execution Context (FEC)
    **Global Execution Context (GEC)**
    * Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC). The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.
    > For every JavaScript file, there can only be one GEC.**       
    **Function Execution Context (FEC)**
    * Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function. Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
### How are Execution Contexts Created?
* The creation of an Execution Context (GEC or FEC) happens in two phases:
    #### 1) Creation Phase
    #### 2) Execution Phase
    **1) Creation Phase**
    * JavaScript engine creates the execution context.
    * Creates a global object that is window.
    * Sets up a memory for storing variables and functions.
    * Stores the variables with values as undefined and function will stores function defination (whole code of function).
    // add images here for understaing.
    **2) Execution Phase**
    * Now, in this phase, it starts going through the entire code line by line from top to bottom. As soon as it encounters any variable it assign value to written in code and when it encounters any function is invoked JavaScript engine creates new **Function Execution Context**.
### What is the Call Stack?
* To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.
* When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.
### Example
```
function getFname(fName) {
    return fName;
}
function getLName(lName) {
    return lName;
}
function getfullName(fName, lname) {
    return getFname(fName) + " " + getLName(lname);
}
let fullName = getfullName("Sahil", "Mistry");
console.log(fullName); // Sahil Mistry
### Important links.
[more about execution contex](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)