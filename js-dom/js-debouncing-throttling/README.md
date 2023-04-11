# JavaScript Debounce & Throttling
* In JavaScript Debounce and Throttling are used to rate limit function calls.
### Debounce in JavaScript
* In JavaScript, when we want to trigger a function, but only once per use case.
* Let's say that we want to show suggestions for a search query, but only after a user pause typing or stop typing.

```
<input type="text" onkeyup="getResult()">

const debounce = function (getData, delay) {
    let timmer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timmer);
        timmer = setTimeout(() => {
            getData.apply(context, args);
        }, delay);
    }
}
const getResult = debounce(getData, 1000);
```

* Here ```debounce()``` function is invoked each and every time when **onkeyup()** event occurs on input tag. For every **onkeyup()**  event ```getData()``` function is invoke.
* If we don't add ```clearTimeout()``` function then ```getData()``` will invoke every time but after some delay, here 1 second. But we want that ```getData()``` will invoked when user stops pressing key or stop typing.
* To impletement this functionality we have to add ```clearTimeout()```  

> **What actually ```clearTimeout()``` does?**            
-> ```clearTimeout()``` method cancels a timeout previously established by calling ```setTimeout()```. It takes **timeoutID** as anargument. This ID was returned by the corresponding call to setTimeout().

* When user press any key in less than delay time then ```clearTimeout()``` method gets invoked and it cancel previous ```setTimeout()```  therefore ```getData()``` function doesn't get invoke. Now when user doesn't press any key for 1 second ```clearTimeout()``` will not invoke and previous ```setTimeout()``` method invoke ```getData()```.

### Throttling in JavaScript
* Throttling or sometimes also called throttle function is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

> Example, If there is one button in our web page and it gets clicked often and we don't want that our function invoke every time when button gets clicked. But we want that our function invoke after particular interval of time then we can use **Throttling**.

```
<input type="text" placeholder="thortling" onkeyup="getResult()">

const thortling = function (getData, delay) {
    let flag = true;
    return function() {
        let context = this;
        let args = arguments;
        if(flag) {
            getData.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
const getResult1 = thortling(getData, 500);
```

* Here ```thortling()``` function is invoked each and every time when **onkeyup()** event occurs on input tag. For every **onkeyup()**  event ```getData()``` function is invoke.
* Here first flag is set to true and if it is true then ```getData()``` function is invoke and flag is set to false. Flag will true after some delay, here 500 mili second.
* Therefore for 500 mili seconds of time ```getData()``` will not invoke because flag is set to false for that time.
* After completion of delay agina flag is set to true and ```getData()``` will invoke.

### Difference between debounce and throttle
* **Debounce** monitors the time delay between user actions and only executes the callback function if the delay exceeds the time delay defined by the developer. So, continuous user actions can significantly delay the callback function’s execution if we use debounce.
* On the other hand, throttle uses the time delay to execute the callback function at regular intervals until the event trigger is active. So, it does not delay the callback function execution for a significant period like debounce.

> **Debounce** is most suitable for control events like typing or button clicks.        
**Throttle** is most suitable for continuous user events like resizing and scroll.