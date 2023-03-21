function personFactory(name) {
    this.getName = function() {
        return `Hello i'm ${name}`
    }
    return { getName }
}

const myName = personFactory("Sahil").getName();
myName;
console.log(myName);
