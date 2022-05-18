const burgerButton = document.getElementById("burger-menu--open");
const closeButton = document.getElementById("burger-menu--close");
const mobileMenu = document.getElementById("menu-mobile");

burgerButton.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "flex";
});

closeButton.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});
