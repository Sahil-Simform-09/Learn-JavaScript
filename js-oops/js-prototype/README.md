# Object prototypes
* Prototypes are the mechanism by which JavaScript objects inherit features from one another.
* Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

    > Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.     

* By defining a set of properties and methods on a prototype object, multiple objects can inherit those properties and methods, reducing the amount of duplicated code. This can result in more efficient and easier-to-maintain code.
* **Example**
    ```
    const Person = function(personName) {
        this.personName = personName;
        this.talk = function() {
            console.log("I'm talking");
        }
    }
    Person.prototype.eat = function() {
        console.log("I'm eating");
    }
    const p1 = new Person();
    const p2 = new Person();
    ```
* Here ```talk()``` method is attached to this variable therefore when we create object from Constructor function it will always add ```talk()``` method to every new object. 
* ```eat()``` method is attached to **Person constructor** threfore when we create object from Constructor function ```eat()``` method will not attached with every object instead of ```eat()``` method is inherited from  **Person constructor**.
    ![Screenshot from 2023-04-06 12-25-16](https://user-images.githubusercontent.com/124886751/230322232-d4133069-5e77-42f3-841f-de8eba5ec0c8.png)
### Prototype chaining
* Prototype chaining in JavaScript is the process by which an object's prototype is searched for a property or method when it is not found on the object itself. When an object is created, it is linked to a prototype object, and this prototype object itself can have its own prototype, creating a chain of objects that are searched for a particular property or method.
* **Example**

    ```
    function Foo(who) {
        this.me = who;
    }
    Foo.prototype.identify = function() {
        return "I am " + this.me; 
    };

    function Bar(who) {
        Foo.call(this, who);
    }
    Bar.prototype = Object.create(Foor.prototype);
    Bar.prototype.speak = function() {
        alert("Hello, " + this.identify() + ".");
    }

    const b1 = new Bar("b1");
    const b2 = new Bar("b2");

    b1.speak();
    b2.speak();
    ```
    ![Screenshot from 2023-04-06 12-14-36](https://user-images.githubusercontent.com/124886751/230321644-a12b767b-5857-409e-8ca4-f8e0bf594dd8.png)

### 3 way to achieve prototypel inheritance
1) Using constructor function
2) Using class
3) Using Object.cerate method()     
[for implementation refer here]()       
