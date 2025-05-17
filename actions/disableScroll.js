function disableScroll() {
  const scrollElement = document.scrollingElement || document.documentElement;

  // Bloqueia o scroll do mouse (wheel)
  scrollElement.addEventListener('wheel', function(event) {
    event.preventDefault();
  }, { passive: false });

  // Bloqueia scroll por toque (mobile)
  scrollElement.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, { passive: false });

  // Bloqueia scroll por teclado (setas, page up/down, espaço)
  window.addEventListener('keydown', function(event) {
    // teclas que causam scroll
    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
    if (keys.includes(event.key)) {
      event.preventDefault();
    }
  }, { passive: false });
}


