var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var conatiner = document.querySelector(".container");

menuIcon.onclick = () => {
  sidebar.classList.toggle("small-sidebar");
  conatiner.classList.toggle("large-container");
};
