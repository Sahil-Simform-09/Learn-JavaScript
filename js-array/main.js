//array methods
const arr = [1,2,3];
const secondElement = arr.indexOf(2); //1
const addFirstElement =  arr.unshift(0); //[0,1,2,3], length = 4
const rempovefirstElement =  arr.shift(); [1,2,3]//0, length = 3
const addAtLast = arr.push(4); //[1,2,3,4] length = 4
const removeAtLast = arr.pop(); // 4, length = 3

//iterate methods.
const iterateUsingForeach =  arr.forEach(element => {
    console.log(element);
});
const doubleArr = arr.map(item => item*2);
const oddValArr = arr.filter(item => item%2 != 0);
const sum = arr.reduce((sum, item) => sum += item);

//sorting 
const sortArr = [10, 3, 12, 4];
sortArr.sort();  // [10, 12, 3, 4]
sortArr.sort((a, b) => a - b); //  [3, 4, 10, 12]
sortArr.sort((a, b) => b - a); //  [12, 10, 4, 3]
console.log(sortArr);


//check type of array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const names = {
	fName : "Sahil",
    lName : "Mistry"
}
console.log(Array.isArray(names)); // false
console.log(Array.isArray(fruits)); // true

//Example of filer, map, reduce
const user = [
    {firstName : "Sahil", lastName : "Mistry", age: 20},
    {firstName : "Krishna", lastName : "Mistry", age: 24},
    {firstName : "Paresh", lastName : "Mistry", age: 51},
    {firstName : "Mayuri", lastName : "Mistry", age: 47},
];
//get firstname of those whom age are less than 30
const filterName = user.filter(function getAge(item) {
       return item.age < 30;
}).map(function returnName(nm) {
    return nm.firstName;
});
console.log(filterName);
const output = user.filter(x => x.age < 30).map(x => x.firstName);

const output1 = user.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(output1); // sahil Kirhsna


const numbers = [175, 50, 25];
const ans = numbers.reduce(myFunc);

function myFunc(total, num) {
  console.log(total + " " + num);
  return total - num;
}
console.log(ans);
