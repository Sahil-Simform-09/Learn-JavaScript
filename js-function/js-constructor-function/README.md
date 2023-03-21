# JavaScript Constructor Function
* In JavaScript, a constructor function is used to create objects.
* It helps to reduce code duplication. 
* creation of constructor function.
```
function User(name) {
    this.name = name;
}
const user1 = new User("Sahil");
```
* when you put new before function call, JavaScriot creates an object named this and return this object.
* In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created. 
* They are used to initialize the properties of an object and set the values of the object.

### Important links
[more about js constructor](https://javascript.info/constructor-new#:~:text=Usually%2C%20constructors%20do%20not%20have,is%20returned%20instead%20of%20this%20.)