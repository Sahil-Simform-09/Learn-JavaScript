// non iterable object
const myNonIterableObject = {
    fName: "Krishna",
    lName: "Mistry",
    age: 25
}
for(let val of myNonIterableObject) {
    console.log(val); // myNonIterableObject is not iterable
}

// create own iterable object
const myIterableObject = {
    fName: "Sahil",
    lName: "Mistry",
    age: 21,
    [Symbol.iterator]: function() {
        return {
            n: 0,
            next: function() {
                let properties = Object.keys(myIterableObject);
                let totalProperties = properties.length;
                if(this.n < totalProperties) {
                    return {
                        value: myIterableObject[properties[this.n++]],
                        done: false
                    }
                }
    
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
for(let val of myIterableObject) {
    console.log(val); 
}
// /* console will print value of all key present in object
//  Sahil 
//  Mistry 
//  21  */


const user = {
    fName: "Sahil",
    lName: "Mistry"
}
for (const key in user) {
    console.log(key);
}
/* console will print key present in object
 fName 
 lName */

console.log(user.propertyIsEnumerable("constructor"));  // false
console.log(user.propertyIsEnumerable("__proto__")); // false
console.log(user.propertyIsEnumerable("fName")); // true
console.log(user.propertyIsEnumerable("lName")); // true

Object.defineProperty(user, 'age', {
    value: 21,
    enumerable: false
});
for (const key in user) {
    console.log(key);
}
