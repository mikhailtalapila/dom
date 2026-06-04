function myEventHandler(event) {
  console.log(event);
}

const element = document.querySelector(".note");
element.addEventListener("click", myEventHandler);
