// store 
localStorage.setItem("name", "Sahil");

// get
let myName = localStorage.getItem("name");
console.log(myName); // sahil

// store object
const obj = {
    fName: "Sahil",
    lName: "Mistry"
}
localStorage.setItem("user", obj)
let user = localStorage.getItem("user");
console.log(user); // [object Object]

localStorage.setItem("user1", JSON.stringify(obj));
let user1 = localStorage.getItem("user1");
console.log(user1); // {"fName":"Sahil","lName":"Mistry"}
console.log(JSON.parse(user1)); // {fName: 'Sahil', lName: 'Mistry'}

// remove item
localStorage.removeItem("name");

// clear whole storage
localStorage.clear();