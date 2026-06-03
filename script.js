const clickEvent = new Event("click");
const btn = document.getElementById("one");
btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("clicked");
});

btn.dispatchEvent(clickEvent);
