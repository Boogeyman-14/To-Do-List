let addBtn = document.querySelector(".dropdown-toggle");
let drpMenu = document.querySelector(".dropdown-menu");
let menuItems = drpMenu.querySelectorAll("li");

addBtn.addEventListener("click", () => drpMenu.classList.toggle("d-none"));
menuItems.forEach((item) => {
  item.addEventListener("click", () => drpMenu.classList.add("d-none"));
});
