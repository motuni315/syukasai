document.addEventListener('DOMContentLoaded', function() {
  const emailElement = document.getElementById('email');

  emailElement.addEventListener('click', function() {
    // メールアドレスをクリップボードにコピーする
    const email = emailElement.textContent;
    navigator.clipboard.writeText(email).then(function() {
      alert('メールアドレスがコピーされました: ' + email);
    }).catch(function(error) {
      console.error('コピーに失敗しました: ', error);
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
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
