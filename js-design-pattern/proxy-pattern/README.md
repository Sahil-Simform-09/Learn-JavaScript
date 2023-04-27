# Proxy pattern
* Proxy pattern is a structural design pattern that provides a placeholder for another object to control access to it.

> **First we understand what is the meaning of proxy?**     
Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the **proxy person who will represent the person you were trying to reach**. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the **Proxy object.**
* The **Proxy** object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.
* **Example**
```
const person = {
    fName: "Sahil",
    lName: "Mistry",
    age: 21
}
```
* Above we have create a person object. Now we'll create a **Proxy** object. Here **Proxy** object will represent the person object and instead of interacting with **person** object directly we'll interact with **Proxy** object.
```
const perosonProxy = new Proxy(person, {});
```
* In JavaScript we can create a **Proxy** with two parameters:
    * ```target```: First parameter. The original object which you want to proxy. 
    * ```handler```: Second parameter. In the handler object, we can define specific behavior based on the type of interaction. 
* Above handler is empty, this **Proxy** behaves just like the original target.  Although there are many methods that you can add to the Proxy handler, the two most common ones are get and set:
    * ```get```: Gets invoked when trying to access a property
    * ```set```: Gets invoked when trying to modify a property
```
const personProxy = new Proxy(person, {
    get: function(obj, prop) {
        return `The ${prop} is ${obj[prop]}.`;
    },
    set: function(obj, prop, value) {
        obj[prop] = value;
        console.log(`The ${prop} is set to ${value}`); // The age is set 21, The id is set to #1
    }
});

// get name
console.log(personProxy.fName + " " + personProxy.lName); // The fName is Sahil. The lName is Mistry.

//set new age
personProxy.age = 21;
console.log(personProxy.age); // the age is 21
console.log(person.age); // 21

// create new Property
personProxy.id = 1;
console.log(personProxy.id); // the id is #1
console.log(person.id); // #1
```

* A proxy can be useful to add validation. A user shouldn't be able to change ```person```'s id to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know.

```
const personProxy = new Proxy(person, {
    get: function(obj, prop) {
        if(!obj[prop]) {
           return `${prop} dosen't exist on the target object.`; 
        } else {
            return `The ${prop} is ${obj[prop]}.`;
        }
    },
    set: function(obj, prop, value) {
        if(prop === "id" && typeof value !== "number") {
            console.log(`please provide numeric value for ${prop} property`); // please provide numeric value for id property
        }
        else {
            obj[prop] = value;
            console.log(`The ${prop} is set to ${value}`); // The age is set to 21, The id is set to 1
        }
    }
});

// try to access property doesn't exist
console.log(personProxy.grade); // grade dosen't exist on the target object.

// try different to set value with  data types.
personProxy.id = "1";
```

### Conclusion 
* The main purpose of using the **Proxy pattern** in JavaScript is to add an additional layer of control or behavior to an object without modifying its original code. This allows you to create more flexible, modular, and maintainable code by separating concerns and adding additional behavior to objects without modifying their original code.
* **Some common use cases for the Proxy pattern in JavaScript include:**        
**1) Validation:** You can use a ```Proxy``` to validate the input data before it's passed to a server or stored in a database. The ```Proxy``` can intercept the setter methods and check the validity of the data before allowing it to be set on the target object.      
**2) Access control:** You can use a ```Proxy``` to control access to sensitive data or functions. The Proxy can intercept the getter and setter methods and enforce security policies, such as limiting access to certain users or role.