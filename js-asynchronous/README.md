# Asynchronous JavaScript
* In Synchronous programming the computer will complete one task before moving on to the next. This makes it easy to understand and predict what the computer will do at any given time.

    ```
    function firstTask() {
        console.log("Task 1");
    }
    function secondTask() {
        console.log("Task 2");
    }
    firstTask(); // Task 1
    secondTask(); // Task 2
    ```

* The code will execute the tasks in the order you see them and wait for each task to be completed before moving on to the next one.
* However, synchronous programming can be problematic in certain situations, particularly when dealing with tasks that take a significant amount of time to complete.

    ```
    const result = fetch("https://any-api.com/");
    function secondTask() {
        console.log("Task 2");
    }
    secondTask(); // Task 2
    ```

* In above code if ```fetch()``` takes hight time to get data, because of synchronous programming ```secondTask()``` will not execute untill ```fetch()``` gives the data.
### What is Asynchronous Programming?
* Asynchronous programming is a way for a computer program to handle multiple tasks simultaneously rather than executing them one after the other.
* Asynchronous programming allows a program to continue working on other tasks while waiting for external events, such as network requests, to occur.
* Asynchronous Programming can achived with 3 ways.
    * callback function
    * Promises
    * async & await
    ### 1) callback function
    * Here's an example of an asynchronous program using the setTimeout method:

        ```
        console.log("Start");
        setTimeout(function() {
            console.log("First timeout completed");
        }, 2000);
        console.log("End");
        ```
        **output of the following code**
        ```
        Start
        End
        First timeout completed
        ```
    * Here ```setTimeout()```  takes callback function as an argument and invoke after 2 seconds.The callback function passed to setTimeout will be executed asynchronously, which means that the program will continue to execute the next line of code without waiting for the timeout to complete.
    * Here our function written inside ```setTimeout()``` will work as an asynchronous operation it won't stop main thread of js engine.
    * how setTimeout set timmer [refer here]()
    * **What is callback function**
    * A **callback** function is a function passed into another function as an argument, which is executed after the first function is executed. Outer function calls **callback** function or we can say that outer function is responsible to call **callback** function. An asynchronous operation can be handle using **callback** function.
    * This is the core concept of asynchronous programming. The script doesn't wait for the asynchronous operation to complete. It just continues to execute the next instruction.   

    ### Issue with callback function*       
    **1) callback hell**
    * when many callbacks are nested, the code can be complex and hard to read and understand.This happens when you chain multiple callbacks together, one after the other, creating a pyramid-like structure of indentation called callback hell, also known as the "Pyramid of Doom".
    * Example of callback hell

        ```
        getData(function(a) {
            getMoreData(a, function(b) {
                getEvenMoreData(b, function(c) {
                    getEvenEvenMoreData(c, function(d) {
                        getFinalData(d, function(finalData) {
                            console.log(finalData);
                        });
                    });
                });
            });
        });
        ```

    * Here this nesting of callbacks can make the code difficult to maintain, and the indentation makes it even harder to see the overall structure of the code.  

    **2) Inversion of control**
    * When we dont have control over our written code, when it will executed we have not controll over that can say as Inversion of control.

        ```
        console.log("Start");
        setTimeout(function() {
            console.log("getting data from the server");
        }, 2000);
        console.log("End");
        ```
    * In above example an anonymous function is passed to ```setTimeout()```, inside that callback function we are fetching data from the server and it is taking 2 seconds. Our callback function must be executed after the gettingthe data, but here calling callback function is not in our control. Our callback function can call before getting the data. This problem, calling the function is not our control is known as **Inversion of control**. To resolve these issues **Promises** are introduced.

    ### 2) Promises
    * Promise is a JavaScript object which represents the eventual completion (o failure) of an asynchronous operation and its resulting value.
    * There are two parts in promises.      
        * **Prmoise maker**, creates Promise object and return the promise object. Inside Promise whole async logic is written.        
        * **Promise receiver**, is part of code that calls the maker and receive the promise.     
    * There are three phases in Promises.       
        **a) pending** :- It is an initial phase when our promise is neither resolved or rejected.      
        **b) fullfilled** :- Meaning of this state is, async operation is completed successfully.       
        **c) reject** :- Meaning of this state is, async operation is not completed successfully.       
    * Example,

        ```
        const result = fetch("http://127.0.0.1:5500/index.html");
        result.then( data => {
            console.log(data);
        });
        ```
    * Here ```fetch()``` return a promise. First state of the promise would be **pending** state. After that when data will fetched successfully from the server then state will be set to **fullfilled** and if data will not fetched successfully then state is set to **reject**.
    * Here Promise solve the **Inversion of control issue**. Because when data will successfully fetched then and then it'll set to fullfilled if not then it'll set to rejected.
    * **Create own Promise**

        ```
        function ownPromise() {
            return new Promise((resolve, reject) => {
                resolve("done!!");
            });
        }
        ownPromise().then((data) => {
            console.log(data);
        });
        ```
    * Here **resolve** and **reject** are functions. ```resolve()``` is used when work is successfully done and ```rejecet()``` for errors.```then()``` block will execute when state is fullfilled and ```catch()``` block will exectued when state is rejected.       

    ### 3) async & await
    * Async/Await is a feature that allows you to write asynchronous code in a more synchronous, readable way.
    * **async** is a keyword that is used to declare a function as asynchronous. **await** is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.
    * Key topics need to remember:-     
        -> You can await any function that returns a Promise.       
        -> Any function can be converted to **async**.      
        -> All **async** functions return a Promise.        

            async function getPrmoise() {
                return await function() {
                    console.log("hello, I',m promise");
                }
            }
            getPrmoise(); // Promise {<fulfilled>: ƒ}

        -> Error handling with try and catch.       
