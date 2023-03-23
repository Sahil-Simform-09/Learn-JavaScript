// Example 1
function getName() {
  var fName = "Sahil";
  function getFullName() {
      var lName = "Mistry";
      return fName + " " + lName;
  }
 return getFullName;
}
var fullName = getName();
console.log(fullName()); // Sahil Mistry

// Example 2
var result = [];
for (var i = 0; i < 2; i++) {
    result[i] = function() {
      console.log(i);
    }
}
result[0](); // 5, expected 0
result[1](); // 5, expected 1

var result = [];
for (let i = 0; i < 2; i++) {
    result[i] = function() {
      console.log(i);
    }
}
result[0](); // 0, expected 0
result[1](); // 1, expected 1

// Example 3
function createCounter() {
     let counter = 0;
     let name1 = "Sahil"
     const myFunction = function() {
       counter = counter + 1;
       return counter;
   }
   return myFunction;
 }
const increment = createCounter();
const c1 = increment();
const c2 = increment();
console.log('example increment', c1, c2);



