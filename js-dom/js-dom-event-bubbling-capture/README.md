# Event propogation, Bubbling & capturing
### Event propogation
* Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination. The event needs to pass through every node on the DOM until it reaches the end, or if it is forcibly stopped.
* If there are nested elements in HTML and event occurs in child it will also propgate to it's parent.              
Ex. There are 3 ```div``` in HTML one inside annother 

```
    <div id="first">
        <div id="second">
            <div id="third"></div>
        </div>
    </div> 
```
![Screenshot from 2023-03-28 18-23-38](https://user-images.githubusercontent.com/124886751/228512955-6c359c40-1738-4fdf-bfa0-75514172d12d.png)

* When event occurs on third element then it will propogate to it's parent, here third element gets click event then first and second also get the click event beacause of event propogation.
* Event propogate to parent sometimes it'll overheard. To resolve that we can stop event propogation using ```Event.stopPropagation()``` method. This method will stop propogation of event from current element.
### Event Bubbling and Capturing
* In their simplest definitions, bubbling travels from the target to the root, and capturing travels from the root to the target.  
* target is the DOM node on which you click, or trigger with any other event.For example, a button with a click event would be the event target.          
* The root is the highest-level parent of the target. This is usually the document, which is a parent of the , which is a (possibly distant) parent of your target element.
* Ex. In above example,         
For bubbling            
    * If we handle 'click' event for our ```div``` elements then first #third element will get event after that #second and then #fist.
    * If we handle 'click' event for our ```div``` elements then first #first element will get event after that #second and then #third.                
### Event deligation
* Event deligation is pattern based upon event bubbling.
* With event delegation, instead of handling the click event on the ```button```, you can handle it on the ```div```                
Ex. 
```
    <ul>
        <li id="laptop">laptop</li>
        <li id="phone">phone</li>
        <li id="smartWatch">smartWatch</li>
    </ul>
```
* Here in Above exmaple if we want event for all ```li``` inside the ```ul```. Adding event on all ```li``` is not properway insted of that we can use **event delegation**.
* Beacause of event propogation we can get event on ```ul``` happend on ```li``` . Then we can get event and also get that which element get event using ```Event.target.id```
* Then we can apply event handleres on particular element.
