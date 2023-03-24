function getFname(fName) {
    return fName;
}
function getLName(lName) {
    return lName;
}
function getfullName(fName, lname) {
    return getFname(fName) + " " + getLName(lname);
}
let fullName = getfullName("Sahil", "Mistry");
console.log(fullName); // Sahil Mistry