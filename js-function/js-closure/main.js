function myName() {
    console.log("inside myName");
    lName();
    function lName() {
        console.log(myLname);
    }
}
var myLname = "Mistry";
myName();


var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}

const ans = foo()();
console.log(ans);

var result = [];
 
for (let i = 0; i < 2; i++) {
    result[i] = function() {
      console.log(i);
    }
}

result[0](); // 5, expected 0
result[1](); // 5, expected 1

var result = [];
 
for (var i = 0; i < 2; i++) {
  result[i] = (function inner(x) {
    // additional enclosing context
    return function() {
      console.log(x);
    }
  })(i);
}

result[0](); // 0, expected 0
result[1](); // 1, expected 1