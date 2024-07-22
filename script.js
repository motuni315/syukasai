// script.js

function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  var closeIcon = document.querySelector(".close-icon");
  var openBtn = document.querySelector(".openbtn");

  menuItems.classList.toggle("show-menu");
  document.body.classList.toggle("show-close"); // メニューの表示・非表示に合わせて背景を調整


}


function closeMenuOutside() {
  var menuItems = document.getElementById("menuItems");
  var closeIcon = document.querySelector(".close-icon");
  menuItems.classList.remove("show-menu");
  document.body.classList.remove("show-close"); // Hide the close icon
}
