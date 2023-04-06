// 3 way to achieve prototypel inheritance
// 1) Using constructor function
const PersonConstructor = function(personName) {
    this.personName = personName;
}
PersonConstructor.prototype.talk = function(personName) {
    console.log(`${personName} can talk`);
}
PersonConstructor.prototype.eat = function(personName) {
    console.log(`${personName} is eating`);
} 
const personConstructor1 = new PersonConstructor("Krishna"); 
personConstructor1.talk(personConstructor1.personName); // Sahil can talk
personConstructor1.eat(personConstructor1.personName); // Sahil is eating

// 2) Using class
class Personclass {
    constructor(personName) {
        this.personName = personName;
    }
    talk(personName) {
        console.log(`${personName} can talk`);
    }
    eat(personName) {
        console.log(`${personName} is eating`);
    }
}
const personClass1 = new Personclass("abc");
personClass1.talk(personClass1.personName); // abc can talk
personClass1.eat(personClass1.personName); // abc is eating

// 3) Using Object.cerate method()
const personObject = {
    init(personName) { // use to initialize personName
        this.personName = personName;
    },
    talk(personName) {
        console.log(`${personName} can talk`);
    }, 
    eat(personName) {
        console.log(`${personName} is eating`);
    }
}
const personObject1 = Object.create(personObject);
personObject1.init("Sahil");
personObject1.talk(personObject1.personName); // Sahil can talk
personObject1.eat(personObject1.personName); // Sahil is eating

// prototype chain
let object = new Date();
do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

// example
function User(fName, age) {
    this.fName = fName;
    this.age =age;
    this.test = function() {
        console.log("test func");
    }
}
User.prototype.getDetails = function() {
    console.log(this.fName + " " + this.age);
}
const user = new User("Sahil", 20);

function Admin(...args) {
    User.apply(this, args);
}
Admin.prototype = User.prototype;
const admin = new Admin("admin", 30);

function Admin1(...args) {
    User.apply(this, args);
}
Admin1.prototype = Object.create(User.prototype);
const admin1 = new Admin1("admin1", 31);

function Admin2(...args) {
    User.apply(this, args);
}
Admin.prototype = new User();
const admin2 = new Admin2("admin2", 32);


