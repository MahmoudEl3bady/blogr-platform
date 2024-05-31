const toggleIcon = document.querySelector("#ham__icon");
const mobileMenu = document.querySelector("#mobile__menu");
toggleIcon.addEventListener("click", () => {
  mobileMenu.showModal();
});

const closeIcon = document.querySelector(".close__icon");


closeIcon.addEventListener("click", () => {
  mobileMenu.close();
});