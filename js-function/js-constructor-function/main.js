function User(name, age) {
    this.name = name;
    this.age = age;
    return this.name;
}

// create user1 & user2 objects
const user1 = User("Sahil", 21);
const user2 = User("Krishna", 24);
console.log(user1);
console.log(user2);

//task 1 
const obj = {};

function First() { return obj; };
function Second() { return obj; };

let firstObj = new First();
let SecondObj = new Second();

console.log(firstObj === SecondObj); // true
console.log(firstObj ==  SecondObj); // true

//task 2
function Calculator() {
    this.read = function() {
        this.firstValue = Number(prompt("first value"));
        this.secondValue = Number(prompt("second value"));
    }
    this.sum = function() {
        return firstValue+secondValue;
    }
    this.mul = function() {
        return firstValue*secondValue;
    }
} 
const calculator = new Calculator();
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
