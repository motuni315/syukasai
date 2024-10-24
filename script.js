function scrollToFloor(floorId, event) {
  event.preventDefault();

  // 指定されたフロアにスクロール
  const floor = document.getElementById(floorId);
  if (floor) {
    floor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
