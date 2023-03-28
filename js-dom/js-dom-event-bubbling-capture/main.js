//event propgation
document.querySelector('#first')
.addEventListener('click', () => {
    console.log("first clicked"); //first clicked
},); 
document.querySelector('#second')
.addEventListener('click', () => {
    console.log("second clicked"); //second clicked
},);
document.querySelector('#third')
.addEventListener('click', () => {
    console.log("third clicked"); //third clicked
},);


document.querySelector('#first')
.addEventListener('click', () => {
    console.log("first clicked"); //first clicked
},); 
// have'nt handle event for second element.
document.querySelector('#third')
.addEventListener('click', () => {
    console.log("third clicked"); //third clicked
},);

document.querySelector('*')
.addEventListener('click', (event) => {
    console.log(event); 
})

//event bubbling
document.querySelector('#first')
.addEventListener('click', () => {
    console.log("first clicked"); //first clicked
}, false); // bubbling
document.querySelector('#second')
.addEventListener('click', () => {
    console.log("second clicked"); //second clicked
}, false); //bubbling
document.querySelector('#third')
.addEventListener('click', () => {
    console.log("third clicked"); //third clicked
}, false); // by default it is false

//event capturing
document.querySelector('#first')
.addEventListener('click', () => {
    console.log("first clicked"); //first clicked
}, true); // capturing
document.querySelector('#second')
.addEventListener('click', () => {
    console.log("second clicked"); //second clicked
}, true); // capturing
document.querySelector('#third')
.addEventListener('click', () => {
    console.log("third clicked"); //third clicked
}, true); //  capturing 

//stop propogation -> capturing
document.querySelector('#first')
.addEventListener('click', (event) => { // recieve event 
    console.log("first clicked"); //first clicked
    event.stopPropagation();
}, true); // capturing
document.querySelector('#second')
.addEventListener('click', () => {
    console.log("second clicked");
}, true); // capturing
document.querySelector('#third')
.addEventListener('click', () => {
    console.log("third clicked");
}, true); //  capturing

//stop propogation -> bubbling
document.querySelector('#first')
.addEventListener('click', () => {
    console.log("first clicked"); //
}, false); // bubbling
document.querySelector('#second')
.addEventListener('click', (event) => {
    console.log("second clicked"); //second clicked
    event.stopPropagation();
}, false); //bubbling
document.querySelector('#third')
.addEventListener('click', () => {
    console.log("third clicked"); //third clicked
}, false); //bubbling

//event deligation
document.querySelector('ul').addEventListener('click', (event) => {
    let element = event.target.id;
    console.log(element);
});
