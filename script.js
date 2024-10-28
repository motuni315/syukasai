function scrollToFloor(floorId, event) {
  event.preventDefault();

  // 指定されたフロアにスクロール
  const floor = document.getElementById(floorId);
  if (floor) {
    floor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow img");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  // 初期表示
  showSlide(currentIndex);

  // 3秒ごとにスライドを切り替え
  setInterval(nextSlide, 3000);
});
function toggleNav() {
  const nav = document.querySelector('.top-nav');
  nav.classList.toggle('active');
}