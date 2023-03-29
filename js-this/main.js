// Example 1
function getThis() {
    return this;
}
  
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
  
obj1.getThis = getThis;
obj2.getThis = getThis;
  
console.log(obj1.getThis()); // obj1 
console.log(obj2.getThis()); // obj2

// Example 2
const obj4 = {
    name: "obj4",
    getThis() {
      return this;
    },
  };  
const obj5 = { name: "obj5" };
obj5.getThis = obj4.getThis;
console.log(obj5.getThis()) // obj5

// Example 3
const obj6 = {
    nameArr: ['a', 'b', 'c'],
    getName() {
        return this.nameArr.map(function getName(name) { // Here callback function is just regular function.
            console.log(this.nameArr + " " + name); // undefiend a, undefiend b, undefiend c
        });
    }
}
obj6.getName();

// Example 4
const obj7 = { a: "Custom" };
var a = "Global";
function whatsThis() {
  return this.a;
}
whatsThis(); 
obj7.whatsThis = whatsThis;
console.log(obj7.whatsThis()); // custom

// Example 5
function f() {
    return this.a;
}
const g = f.bind({ a: "azerty" });
console.log(g()); // azerty
const h = g.bind({ a: "yoo" }); 
console.log(h()); // azerty

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37  37 azerty azerty