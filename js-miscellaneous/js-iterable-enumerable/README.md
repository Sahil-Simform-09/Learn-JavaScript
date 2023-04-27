# Iterable in JavaScript
### What is Iterable in Javascript?
* It is a data Structure that provide intrface for iteration.
* Examples: Array, String, Sets, Maps, Generators.
* It uses **iterable protocol** which is introduced in ES6
* It uses a unique key **Symbol.iterator**. If an object has **Symbol.iterator** key and it has value as a function it's a iterable and if it has value undefined it's not a iterable.
* **Symbol.iterator** key has function as a value therefore we can say it is a **@@iterator method** and this **@@iterator method** returns an **iterator object.**
    ```
    const iterableObject = {
        [Symbol.iterator]: fucntion() {
            return iteratorObjectProtocol;
        }
    }
    ```
### What is Iterator Protocol
* The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.
* This protocol is an object. The iterator object has a ```next()``` method that returns the next item in the sequence. The ```next()``` method **returns an object** contains two properties: **value** and **done**.

    * **value**       
    The value property can be of any data type and represents the current value in the sequence.
    *  **done**        
    The done property is a boolean value that indicates whether the iteration is complete or not. If the iteration is incomplete, the done property is set to false, else it is set to true.  
* How the  **Iterator object** would look is given below.
    ```
    const iteratorObjectProtocol = {
            next() {
                if(// condition) {
                    return {
                        value: /* some value */ ,
                        done: /* true or false */
                    }
                }

                return {
                    value: /* some value */ ,
                    done: true or false
                }
            }
    }
    ```    
* **Check wether an object is iterable or not**
    ```
    function isIterable(obj) {
        // checks for null and undefined
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }
    ```
* [check how to create an iterable object here](https://github.com/Sahil-Simform-09/learn-js/blob/developer/js-miscellaneous/js-iterable-enumerable/main.js)
# Enumerable in JavaScript
* In JavaScript, **enumerable** is a term used to describe whether an object's properties can be iterated over using a ```for...in``` loop or the ```Object.keys()``` method. An enumerable property is one that can be accessed by these methods, while a non-enumerable property is not accessible.

    ```
    const user = {
        fName: "Sahil",
        lName: "Mistry"
    }
    for (const key in user) {
        console.log(key);
    }
    /* console will print key present in object
    fName 
    lName */
    ```

* In above example all properties which we provide is printed but an object have additional properties like ```constructor``` or ```__proto__```, they are not printed here because of these properties are not **enumerable** properties.
### checking is a property is enumerable
* We can check property is enumerable or not using ``` Object.prototype.propertyIsEnumerable()``` method. this method will either return **true** if property is enumerable or **false** if property if not enumerable.
* Here we check that property is enumerable or not using above example's object.
    ```
    console.log(user.propertyIsEnumerable("constructor"));  // false
    console.log(user.propertyIsEnumerable("__proto__")); // false
    console.log(user.propertyIsEnumerable("fName")); // true
    console.log(user.propertyIsEnumerable("lName")); // true
    ```
### Defining enumerable properties
* We can also define enumerable properties or not enumerable properites using ```Object.defineProperty()``` method.
    ```
    Object.defineProperty(user, 'age', {
        value: 21,
        enumerable: false
    });
    ```
* Here if try to iterate the object using ```for...in``` loop **age** property will not print because we have set ```enumerable: false``` if we set ```enumerable: true```  then it'll also print **age** property. 
### Important links:
* **Articles**      
[JavaScript: Iterator and iterable protocols](https://medium.com/@insomniocode/javascript-iterator-and-iterable-protocols-583b700305ce)             
[JavaScript Iterators and Iterables](https://www.programiz.com/javascript/iterators-iterables)   
[Enumerable properties in JavaScript](https://howchoo.com/javascript/enumerable-properties-in-javascript#checking-if-a-property-is-enumerable)   
* **Video**         
[Understanding Iterable in JavaScript](https://www.youtube.com/watch?v=dbs_6opD_QU)
