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
/* console will print value of all key present in object
 Sahil 
 Mistry 
 21  */
