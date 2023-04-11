# array
* An array is a special variable, which can hold more than one value:
* An array is type of object.
* ```Array.isArray()``` method is used to check wether it is an object or an array. It will return true if it is an array.

##### Creating an array
```const array_name = [item1, item2, ...];```
* The keyword const is a little misleading. It does NOT define a constant array. It defines a constant reference to an array. Because of this, we can still change the elements of a constant array.  
```
// You can create a constant array:
const fruits = ["apple", "banana", "cherry"];

// You can change an element:
cars[0] = "mango";

// You can add an element:
cars.push("pineapple");
``` 

##### [array methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)
##### array iteration methods
* **foreach()**: The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.
* **map()**:  
    * map method is used when we want transformation of whole array.
* **filter()**:
    * filter is used when we want to filter the arrar to obtain required value.
* **reduce()**: 
    * reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).Reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
    * At the first callback, there is no return value from the previous callback.

    * Normally, array element 0 is used as initial value, and the iteration starts from array element 1.If an initial value is supplied, this is used, and the iteration starts from array element 0.

[more about map(), filter(), reduce()](https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/)
##### [how delete array element](https://sentry.io/answers/remove-specific-item-from-array/#:~:text=If%20you%20want%20to%20remove,to%20remove%20the%20first%20element.)

##### sort an array
* ```sort()``` method is used to sort an array.
* By default In js, the sort() function sorts values as strings. If an array consist only number it wont give correct answer. 
* To solve this problem ```compare()``` function is used. 
```
const nums = [9,4,2,3];
nums.sort((x, y) => x - y); //accending
nums.sort((x, y) => y - x); //decending
```
**compare function**
* compare function will return negative, positive or zero value depending on arguments.
* first sort function comapre two values, then it sends to compare dunction, and compare function sends negative, positive or zero value. Then sort fucntion decides that out of two value which value is smaller , gratter or both value are  equal.
```
Ex. x = 9, y = 2; 
compare(9, 2)
9-2 = 7 which is positive value.
sort function will sort that 2 comes first and 9 after.
```
### important links
* **Rest vs Spread Operator:** [refer here](https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/)