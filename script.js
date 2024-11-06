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

document.addEventListener("DOMContentLoaded", function() {
  const topNav = document.querySelector(".top-nav");
  let lastScrollY = window.scrollY;

  // 現在のページがindex.htmlかどうかを確認
  const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

  if (isIndexPage) {
    // index.htmlの場合、スクロール時に表示切替
    window.addEventListener("scroll", () => {
      if (window.scrollY < lastScrollY) {
        // スクロールアップ
        topNav.classList.add("show");
      } else {
        // スクロールダウン
        topNav.classList.remove("show");
      }
      lastScrollY = window.scrollY;
    });
  } else {
    // index.html以外では常時表示
    topNav.classList.add("show");
  }
});

