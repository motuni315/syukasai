function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show-menu");
  menuItems.classList.toggle("slide-in"); // スライドインのクラスを追加・削除
}

function closeMenuOutside() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.remove("show-menu");
}

document.addEventListener("DOMContentLoaded", function() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseleave", closeMenuOutside);
});
