let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  window.addEventListener("scroll", () => {
    // let boxTop = box.getBoundingClientRect().top;
    let boxTop = box.offsetTop - 300;
    if (boxTop < window.scrollY) {
      box.classList.add("box-show");
    } else {
      box.classList.remove("box-show");
    }
  });
});
