# JavaScript event loop
* The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack.
### What is call stack
[refer here](https://github.com/Sahil-Simform-09/learn-js/tree/main/js-internal-working/js-execution-contex)
* Here Web Apis is part of browser. Browser give access of these Web Apis to JavaScript engine.
* Here some of those  Web Apis provided by browser.
    setTimeout()        
    fetch()     
    localStorage        
    console     
    location     
* Ex,
```
console.log("start");
setTimeout(function calBack() {
    console.log("I'm in setTimeout");
}, 2000);
console.log("end");
```
* Here first global execution context is created and pushed into callstack. Now when execution of code starts ```console.log("start");``` will executed and **start** will printed.
* Now execution comes at line 2  and ```setTimeout``` is pushed to call stack and now setTimeout will start  timer for 2 seconds in Web Api and sertTimeout is popped from the call Stack. At this time execution goes to the line 5  and ```console.log("end")``` will executed and end will printed and global execution context is popped from the call Stack.
* After 2 seconds completed  ```calBack()``` function will push into call back queue. 
* Now **event loop** will check that is call stack is empty, if it is then ```calBack()``` function is pushed into the call stack and whatever is written inside function will executed.
### What is micro task Queue?
* Ex,
```
console.log("start");
Fetch("http://example.com/movies.json");
console.log("end");
```
* If we use ```fetch()``` Web Api then it will also register into the Web Api after getting the data from the server it'll added to **micro task Queue** here instead of **callback queue**.
* micro task Queue is similar to the callback queue but it has more **priority** then callback queue.
* Ex, If there is one callback function inside callback queue and one allback function inside micro task Queue then callback function inside micro task Queue is pushed into the call stack.