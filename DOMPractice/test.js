const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.textContent = "Hey I'm blue!";
blueText.style.color = "blue";
container.appendChild(blueText);

/////////
const newDiv = document.createElement("div");
newDiv.setAttribute("style", "background: pink; border: 4px solid black;");
container.appendChild(newDiv);

const header = document.createElement("h1");
header.textContent = "I'm in a div!";
newDiv.appendChild(header);

const par = document.createElement("p");
par.textContent = "ME TOO!";
newDiv.appendChild(par);
