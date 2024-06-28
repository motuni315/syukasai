// script.js

function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  var closeIcon = document.querySelector(".close-icon");
  menuItems.classList.toggle("show-menu");
  document.body.classList.toggle("show-close"); // Show/hide the close icon
}


function closeMenuOutside() {
  var menuItems = document.getElementById("menuItems");
  var closeIcon = document.querySelector(".close-icon");
  menuItems.classList.remove("show-menu");
  document.body.classList.remove("show-close"); // Hide the close icon
}
