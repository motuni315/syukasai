// フロアへのスムーズスクロール
function scrollToFloor(floorId, event) {
  event.preventDefault();

  // 指定されたフロアにスクロール
  const floor = document.getElementById(floorId);
  if (floor) {
    floor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ナビゲーションの表示/非表示切り替え
function toggleNav() {
  const nav = document.querySelector('.top-nav');
  nav.classList.toggle('active');
}

// DOMContentLoaded イベントが発生した時にスライドショーやコンテキストメニュー制御を初期化
document.addEventListener("DOMContentLoaded", () => {
  // スライドショーの設定
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
  if (slides.length > 0) {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // 3秒ごとにスライドを切り替え
  }

  // 右クリックのコンテキストメニューを無効化
  document.addEventListener("contextmenu", event => event.preventDefault());
});
