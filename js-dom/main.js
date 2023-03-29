const body = document.body;

// append
body.append("hello world.. ");
body.append(" hi world.. ", " hey world..");

// body.appendChild("hello world.. "); // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// body.appendChild(" hi world.. ", " hey world.."); // Uncaught TypeError:

// create elment
const div = document.createElement("div");
const p = document.createElement("p");
body.append(div, p)
console.log(div);

//change style
div.style.height = "100px";
div.style.width = "100px";
div.style.background = "green"

// give html 
div.innerHTML = "<h1>Helloooo World</h1>";

//remove element
document.querySelector("#first").remove();

// add & remove class
div.classList.add("card");
div.classList.remove("card");

//toggle will add if class is not exist if it is exist then it'll remove
div.classList.toggle("h1"); // add h1
div.classList.toggle("h1"); // rempove h1