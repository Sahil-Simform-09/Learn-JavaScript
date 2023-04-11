# JavaScript object
![](../../../Pictures/Screenshots/Screenshot%20from%202023-03-20%2014-18-47.png)
* JavaScript object is a non-primitive data-type which is an [unordered](https://javascript.plainenglish.io/are-javascript-object-keys-ordered-and-iterable-5147eedb26ce#:~:text=To%20illustrate%20that%20JavaScript%20object,order%20they%20are%20added%20in.) collection of key-value pairs.
* The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

### object creation
1) The most commonly used one is to use the **object literal notation.**
    ``` 
    const student = {
        fName: "Sahil"
    }
    ```
2) [Using a constructor function](https://github.com/Sahil-Simform-09/learn-js/tree/main/js-function/js-constructor-function)
3) [Using a factory function](https://github.com/Sahil-Simform-09/learn-js/tree/main/js-function/js-factory-function)
4) Using **Object.create()** method     
    ```
    const student = {
        fName: "Sahil",
        getName() {
            console.log(this.fName);
        }
    }
    ```
###  properties Access
* You can access a property of an object by its property name. Property accessors come in two syntaxes: dot notation and bracket notation.
``` 
// Dot notation
student.fName 
// Bracket notation
student[fName]
```
* In JavaScript a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc. But for an object property, there’s no such restriction: 
``` const objectName = { let: 3, for: 5, const: "Hello"}```
* In JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!
* Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
``` 
const user = {}
console.log(user.name) // undefined
```
* If you want key name does not follow [Rules for Naming Identifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) then enclosed key name within quotes. And this type of key can access using bracket notation.
``` 
const user = " '#age': 21 "
console.log(user[#age]);
```
* If object contains same property name and value then we can use property value shorthand.
```
const fruitName = "mango";
const fruit1 = {
    fruitName: "fruitName"
}
const fruit2 = { 
    fruitName, //same as fruitName: "fruitName"
}
```
* Use of variable value as property name. To use the variable value as property name elclosed it within squre brackets.
```
let language = "secondLanguage"
const user = { [language]: "Hindi" }
```
### Defining methods
* Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.
* **Diference between method and fucntion, method is a function created inside an object.**
```
const user = {
    fName: "Sahil",
    getName: function() { console.log(user.name); } // arrow function will not work here. 
}
console.log(user.getName()); // Sahil
```
### Iterate object
* Object is iterate using "for..in" loop.
```
for(key in objectName) {
    console.log(key);
}
```
### Comparing objects
* In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.
### Important links
[object basics](https://javascript.info/object#property-existence-test-in-operator)                                                                                                                 
[more about objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)