let burger = document.getElementById("burger");
let navbar = document.querySelector("#navbar");
console.log(navbar);
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("display");
  pageContainer.classList.toggle("pageRotate");
  navbar.classList.toggle("navRotate");
});
