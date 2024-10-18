function highlightRoom(roomId) {

  event.preventDefault();
  // すでにハイライトされている教室を解除
  document.querySelectorAll('.highlight').forEach(area => {
    area.classList.remove('highlight');
  });

  // 指定された教室をハイライト
  const room = document.getElementById(roomId);
  if (room) {
    room.classList.add('highlight');
  }
}
