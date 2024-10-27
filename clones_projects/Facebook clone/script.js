// drop down menu of user icon
var settingsmenu = document.querySelector(".settings-menu");
function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}

// toggle button for light and dark mode
var darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// this condition will remain the website in the dark or light mode even after the refresh.
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
