const container = document.querySelector("#container");
const display = container.firstElementChild;
console.log(display);

const controls = document.querySelector(".controls");
const display2 = controls.previousElementSibling;
console.log(display2);
const div = document.createElement("div");
div.style.color = "blue";
div.setAttribute("style", "color: blue; background: white");
div.textContent = "test2";
container.appendChild(div);
div.style.backgroundColor = "purple";
div.setAttribute("id", "theDiv");
div.getAttribute("id");
div.removeAttribute("id");
div.classList.add("new");
div.classList.remove("new");
div.classList.toggle("active");
div.innerHTML = "<span>hello!</span>";

const cont;
