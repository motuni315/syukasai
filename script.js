document.addEventListener('DOMContentLoaded', function() {
  const telElement = document.getElementById('tel');

  telElement.addEventListener('click', function() {
    // 電話番号をクリップボードにコピーする
    const tel = telElement.textContent;
    navigator.clipboard.writeText(tel).then(function() {
      alert('電話番号がコピーされました: ' + tel);
    }).catch(function(error) {
      console.error('コピーに失敗しました: ', error);
    });
  });

  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
