function blurScreenOnPasswordInput() {
  // Cria um overlay blur e adiciona ao body
  // Check if a blur overlay already exists
  let blurOverlay = document.getElementById('blur-overlay');
  if (!blurOverlay) {
    blurOverlay = document.createElement('div');
    blurOverlay.id = 'blur-overlay';
    blurOverlay.style.position = 'fixed';
    blurOverlay.style.top = 0;
    blurOverlay.style.left = 0;
    blurOverlay.style.width = '100%';
    blurOverlay.style.height = '100%';
    blurOverlay.style.backdropFilter = 'blur(20px)';
    blurOverlay.style.webkitBackdropFilter = 'blur(20px)';
    blurOverlay.style.zIndex = 9999;
    blurOverlay.style.pointerEvents = 'none'; // Não bloqueia cliques
    blurOverlay.style.opacity = '0';
    blurOverlay.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(blurOverlay);
  }

  // Quando focar no input password, mostra o blur
  document.querySelectorAll('input[type="password"]').forEach(input => {
    input.addEventListener('focus', () => {
      blurOverlay.style.opacity = '1';
    });
    input.addEventListener('blur', () => {
      blurOverlay.style.opacity = '0';
    });
  });
}
