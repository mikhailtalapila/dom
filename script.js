function highlight(elem) {
  elem.style.backgroundColor = "yellow";
  const customEvent = new CustomEvent("mark", {
    detail: {
      someRandomCustomDetail: "yellow background",
    },
  });
  elem.dispatchEvent(customEvent);
}

const div = document.querySelector(".note");
function addBorder(elem) {
  elem.style.border = "solid black 3px";
}
div.addEventListener("mark", function (event) {
  addBorder(this);
  console.log(event.detail);
});

highlight(div);
