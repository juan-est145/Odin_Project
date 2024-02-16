const   container = document.querySelector("#container");

const   paragraph = document.createElement("p");
paragraph.textContent = "Hey, I'm red";
paragraph.style.color = "red";
container.appendChild(paragraph);

const   h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "background: purple; height: 300px; width: 300px; border: 8px solid black");
container.appendChild(div);

const   h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const   secondParagraph = document.createElement("p");
secondParagraph.textContent = "ME TOO!";
div.appendChild(secondParagraph);