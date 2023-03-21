function User(name, age) {
    this.name = name;
    this.age = age;
    return this.name;
}


// create user1 & user2 objects
const user1 = User("Sahil", 21);
// const user2 = new User("Krishna");
console.log(user1);

const name1 = User("df", 21);
console.log(name1);


//task 1 
const obj = {};

function A() { return obj; };
function B() { return obj; };

let a = new A();
let b = new B();

console.log( a === b ); // true
console.log( a == b ); // true

//task 2
function Calculator() {
    let a, b;
    this.read = function() {
        a = Number(prompt("first value"));
        b = Number(prompt("second value"));
    }
    this.sum = function() {
        return a+b;
    }
    this.mul = function() {
        return a*b;
    }
} 
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task 3
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("enter new number");
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
