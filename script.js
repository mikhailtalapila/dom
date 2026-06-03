let clickEvent = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 150,
  clientY: 150,
});

const btn = document.querySelector("#one");
btn.addEventListener("click", function (event) {
  console.log(`Event has occurred at X:${event.clientX}, Y:${event.clientY}`);
  console.log("clicked");
});

btn.dispatchEvent(clickEvent);
