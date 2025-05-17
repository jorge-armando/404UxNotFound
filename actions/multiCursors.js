function multiCursors(num) {
  // Vetor do movimento do mouse
  let lastMouseX = window.innerWidth / 2;
  let lastMouseY = window.innerHeight / 2;

  // Array dos cursores
  const cursors = [];

  // Cria os cursores com posições iniciais aleatórias
  for (let i = 0; i < num; i++) {
    const c = document.createElement('div');
    c.className = 'fake-cursor';
    // posição inicial aleatória pela tela toda
    c.posX = Math.random() * window.innerWidth;
    c.posY = Math.random() * window.innerHeight;
    cursors.push(c);
    document.body.appendChild(c);
  }

  // Estilos
  const style = document.createElement('style');
  style.textContent = `
    body, * {
      cursor: none !important;
    }
    .fake-cursor {
      position: fixed;
      width: 17px;
      height: 17px;
      background: url('${chrome.runtime.getURL('img/arrow.png')}') no-repeat center/contain;
      pointer-events: none;
      z-index: 999999999;
      top: 0;
      left: 0;
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('mousemove', e => {
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;

    // Atualiza posições de todos os cursores pelo mesmo deslocamento
    cursors.forEach(c => {
      c.posX += dx;
      c.posY += dy;
      c.style.left = c.posX + 'px';
      c.style.top = c.posY + 'px';
    });

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });
}

window.multiCursors = multiCursors;
