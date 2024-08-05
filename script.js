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
