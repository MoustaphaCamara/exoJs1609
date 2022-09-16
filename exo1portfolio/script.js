let boxes = document.querySelectorAll(".box");
let boxContainer = document.getElementById("box-container");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    removeBasis();
    e.target.classList.add("box-display");
  });
});

function removeBasis() {
  boxes.forEach((box) => {
    box.classList.remove("box-display");
  });
}
