const link = document.querySelector("a");
link.addEventListener("click", function (e) {
  console.log("you clicked the link");
  e.stopPropagation();
  e.preventDefault();
});
const btn = document.querySelector("#one");
btn.addEventListener("click", function (e) {
  console.log("you clicked the button");
  e.stopPropagation();
});

document.body.addEventListener("click", function (event) {
  console.log("you clicked the body");
});
