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

// ページ読み込み時にキャッシュをクリア
if ('caches' in window) {
  caches.keys().then(names => {
    for (let name of names) caches.delete(name);
  });
}

// 他のHTMLファイルをプリフェッチして、ナビゲーションの速度を向上させる
function prefetchPages() {
  const pages = ['greeting.html', 'floor_map.html', 'access.html', 'Notes/Notes.html'];
  const cacheOptions = { cache: 'reload' }; // 最新バージョンのキャッシュを確保

  pages.forEach(page => {
    fetch(page, cacheOptions)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch ${page}`);
        return response.text();
      })
      .then(content => console.log(`Prefetched ${page}`))
      .catch(error => console.error(`Error prefetching ${page}:`, error));
  });
}

// 遅延するレスポンスへのタイムアウト設定（5秒でタイムアウト）
function fetchWithTimeout(resource, options = {}, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, timeout);

    fetch(resource, options)
      .then(response => {
        clearTimeout(timer);
        if (!response.ok) throw new Error('Network response was not ok');
        resolve(response);
      })
      .catch(reject);
  });
}

// ページ読み込み時にプリフェッチを開始し、ネットワークエラーを処理
document.addEventListener("DOMContentLoaded", () => {
  prefetchPages(); // 他のページをバックグラウンドでプリフェッチ

  // タイムアウト付きのリクエスト例
  fetchWithTimeout('index.html')
    .then(response => response.text())
    .then(content => console.log('Main page loaded successfully'))
    .catch(error => console.error('Error loading main page:', error));
});



