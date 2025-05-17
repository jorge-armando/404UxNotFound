function autoScroll() {
  const scrollElement = document.scrollingElement || document.documentElement;
  let direction = 1; // 1 para baixo, -1 para cima

  function scrollStep() {
    scrollElement.scrollBy(0, direction * 50);
    // Inverte direção quando chega no topo ou fundo
    if (scrollElement.scrollTop === 0) direction = 1;
    else if (scrollElement.scrollHeight - scrollElement.clientHeight === scrollElement.scrollTop) direction = -1;
    requestAnimationFrame(scrollStep);
  }
  requestAnimationFrame(scrollStep);
}
