let language = "secondLanguage";
const student = {
    fName: "Sahil",
    lname: "Mistry",
    // #age: 21, // error
    '#age': 21,  //rules for naming idenfires is not followed then enclosed within ''
    [language]: "Hindi",
    'subject mark': 90,
    getName: function() {
        console.log(student.fName);
    }
} 

console.log(student);

// access method
console.log(student.getName());

// access properties
console.log(student["#age"]); // 21
console.log(student.age); // undefined
console.log(student["subject mark"]); // 90

//change propertie value
student.fName = "Krishna";
console.log(student.fName); // Krishna

//delete propertie
delete student.lname
console.log(student.lName); // undefined

const keyword = {
    let: 2,
    var: 3,
    for: 4,
}
console.log(keyword); // allow to use keywrods as property name


const fruitName = "mango";
const fruit1 = {
    fruitName: "fruitName"
}
const fruit2 = { 
    fruitName, //same as fruitName: "fruitName"
}
// fruit1 and fruit2 will generate same result
console.log(fruit1);
console.log(fruit2);

//comparing objects
console.log(fruit1 === fruit2); // false
console.log(fruit1 == fruit2);  // false

const fruit3 = fruit1;
console.log(fruit1 === fruit3); // true
console.log(fruit1 == fruit3); // true