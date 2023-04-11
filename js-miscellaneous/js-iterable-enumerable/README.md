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
        return {
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
### Important links:
* **Articles**      
[JavaScript: Iterator and iterable protocols](https://medium.com/@insomniocode/javascript-iterator-and-iterable-protocols-583b700305ce)             
[JavaScript Iterators and Iterables](https://www.programiz.com/javascript/iterators-iterables)      
* **Video**         
[Understanding Iterable in JavaScript](https://www.youtube.com/watch?v=dbs_6opD_QU)