# JavaScript execution contex.
### How JavaScript Code Gets Executed
* The browser doesn't directly understand high-level JavaScript code. It needs to converted into a format that hte browser can understand.          
When browser encounters JavaScript code it sends it to its JavaScript engine. Then browser js engine creates an environment known as **Execution contex**.      Execution context contains code currently running.
* There are two kind of Execution contex in JavaScript.
    #### 1) Global Execution Context (GEC)
    #### 2) Function Execution Context (FEC)
    **Global Execution Context (GEC)**
    * Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known         as the Global Execution Context (GEC). The GEC is the base/default Execution Context where all JavaScript         code that is not inside of a function gets executed.
    * For every JavaScript file, there can only be one GEC. 
                              
  **Function Execution Context (FEC)**
    * Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function. Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
### How are Execution Contexts Created?
* The creation of an Execution Context (GEC or FEC) happens in two phases:
    #### 1) Creation Phase
    #### 2) Execution Phase
    **Creation Phase**
    * JavaScript engine creates the execution context.
    * Creates a global object that is window.
    * Sets up a memory for storing variables and functions.
    * Stores the variables with values as undefined and function will stores function defination (whole code of function).
    
![disgram](https://user-images.githubusercontent.com/124886751/227457850-d2438e05-bdbf-416f-a6d1-b98dea8a06d8.jpg)          
    
   **Execution phase**
   * Now, in this phase, it starts going through the entire code line by line from top to bottom. As soon as it encounters any variable it assign value to written in code and when it encounters any function is invoked JavaScript engine creates new **Function Execution Context**.
  
![disgram (1)](https://user-images.githubusercontent.com/124886751/227459089-6f0cf0da-a591-4059-95c1-ba4635acfa2b.jpg)
 
### What is the Call Stack?
![image](https://user-images.githubusercontent.com/124886751/227449690-819f94cc-7bbc-410a-ace6-c8da51c2b781.png)
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
```
* First Global execution context is created and pushed it into the call stack. In creation phase of global execution contex fulllName is assign with undefiend. After that In execution phase ```getfullName()``` is called for that new Function execuction context is created and pushed it into the call stack.  
* Now in ```getfullName()```  two fucntions are invocted, first is ```getFname()``` new Function execuction context is created and pushed it into the call stack. After execution of ```getFname()``` it is removed from the call stack.
![Screenshot from 2023-03-24 12-23-57](https://user-images.githubusercontent.com/124886751/227448971-51952246-1b67-4ac8-88c7-28abd2e6b35a.png)  
![Screenshot from 2023-03-24 12-22-02](https://user-images.githubusercontent.com/124886751/227448629-bedd89ca-550a-4bf9-a8d1-f103253e83a6.png)  
* Second is ```getLname()``` new Function execuction context is created and pushed it into the call stack. After execution of ```getLname()``` it is removed from the call stack.

![Screenshot from 2023-03-24 12-23-26](https://user-images.githubusercontent.com/124886751/227448895-430cfb30-b7d8-4f42-b032-09c468999ae6.png)  
![Screenshot from 2023-03-24 12-23-42](https://user-images.githubusercontent.com/124886751/227448920-2c5d87a4-1a21-4e6a-a55d-2333a807241d.png)  
![Screenshot from 2023-03-24 12-23-57](https://user-images.githubusercontent.com/124886751/227448962-23b866b6-0fd3-4b85-b387-717ec179d979.png)  

### Important links.
[more about execution contex](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
