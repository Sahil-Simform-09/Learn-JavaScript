const person = {
    fName: "Sahil",
    lName: "Mistry",
    age: 20
}

const personProxy = new Proxy(person, {
    get: function(obj, prop) {
        if(!obj[prop]) {
           return `${prop} dosen't exist on the target object.`; 
        } else {
            return `The ${prop} is ${obj[prop]}.`;
        }
    },
    set: function(obj, prop, value) {
        if(prop === "id" && typeof value !== "number") {
            console.log(`please provide numeric value for ${prop} property`); // please provide numeric value for id property
        }
        else {
            obj[prop] = value;
            console.log(`The ${prop} is set to ${value}`); // The age is set to 21, The id is set to 1
        }
    }
});

// get name
console.log(personProxy.fName + " " + personProxy.lName); // The fName is Sahil. The lName is Mistry.

//set new age
personProxy.age = 21;
console.log(personProxy.age); // the age is 21
console.log(person.age); // 21

// create new Property
personProxy.id = 1;
console.log(personProxy.id); // the id is 1
console.log(person.id); // 1

// try to access property doesn't exist
console.log(personProxy.grade); // grade dosen't exist on the target object.

// try different to set value with  data types.
personProxy.id = "1";
