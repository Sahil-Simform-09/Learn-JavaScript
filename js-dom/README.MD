# DOM (Document Object Model)
* With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
* when a web page is loaded, the browser creates a Document Object Model of the page.
The HTML DOM model is constructed as a tree of Objects:The HTML DOM Tree of Objects
DOM HTML tree.
*** here add DOM IMAGE ***
### difference between ```append()``` and ```appendChild()```
* First difference is that, using ```append()``` we can add string inside an element as well as an HTML element while using ```appendChild()``` we can only an HTML element.
* second difference is that, using ```append()``` we can append more than one HTML element while using ```appendChild()``` we can append only one HTML element.
### difference between ```textContent``` and ```innerText```
* When we try to look text inside an element using ```textContent``` property then it'll show exact text content with spacing and indentation all of content inside an element, while using ```innerText``` property it'll look at CSSS to see if text is actually visible or not on display, if it is visible then it'll show the content othervise not.
* Ex. 
```
    <div>
        <span>Hello</span>
        <span style="display: none;">Bye</span>
    </div>
    <script>
        const div = document.querySelector("div");
        console.log("I'm innerText", div.innerText);
        console.log("I'm textContent", div.textContent);
    </script>
```
*** add image here from github ***