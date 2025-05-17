function delayedCursor(delay = 100) {
  // Oculta o cursor original
  document.body.style.cursor = 'none';

  // Cria um cursor invisível
  const fakeCursor = document.createElement('div');
  fakeCursor.style = `
    position: fixed;
    width: 1px;
    height: 1px;
    pointer-events: none;
    z-index: 9999;
    transition: top ${delay}ms linear, left ${delay}ms linear;
  `;
  document.body.appendChild(fakeCursor);

  // Atualiza a posição com delay
  document.addEventListener('mousemove', e => {
    fakeCursor.style.left = e.clientX + 'px';
    fakeCursor.style.top = e.clientY + 'px';
  });
}
