/**
 * cursedCursor
 * 
 * Cria um cursor customizado que substitui o cursor padrão do navegador e se comporta de formas estranhas e imprevisíveis.
 * 
 * Funcionalidades:
 * - Esconde o cursor padrão e mostra um cursor personalizado (seta).
 * - O cursor personalizado reage ao movimento do mouse com diferentes modos, que mudam a cada 3 segundos.
 * 
 * Modos disponíveis:
 * - normal: cursor segue o mouse normalmente.
 * - slow: cursor se move lentamente (20% da velocidade).
 * - fast: cursor se move rápido (200% da velocidade).
 * - reverse: cursor se move na direção oposta ao mouse.
 * - teleport: cursor pula para uma posição aleatória da tela.
 * - stuck: cursor não se move.
 * - shake: cursor se move com tremores aleatórios.
 * - circle: cursor se move em círculo.
 * - invisible: cursor fica invisível.
 * 
 * Implementação:
 * - Cria um elemento div para o cursor personalizado.
 * - Aplica estilos para esconder o cursor padrão e estilizar o cursor customizado.
 * - Escuta o evento mousemove para controlar o cursor customizado.
 * - Alterna os modos automaticamente a cada 3 segundos.
 */
function cursedCursor() {
  let mode = 'normal';
  let visible = true;

  let posX = window.innerWidth / 2;
  let posY = window.innerHeight / 2;
  let angle = 0;

  const cursor = document.createElement('div');
  cursor.id = 'cursed-cursor';
  document.body.appendChild(cursor);

  const style = document.createElement('style');
  style.textContent = `
    body, * {
      cursor: none !important;
    }
    #cursed-cursor {
      position: fixed;
      width: 17px;
      height: 17px;
      background: url('${chrome.runtime.getURL('img/arrow.png')}') no-repeat center/contain;
      pointer-events: none;
      z-index: 999999999;
      top: 0;
      left: 0;
      transition: top 0.05s linear, left 0.05s linear;
    }
  `;
  document.head.appendChild(style);

  let lastX = posX;
  let lastY = posY;

  document.addEventListener('mousemove', (e) => {
    if (!visible) return;

    let dx = e.clientX - lastX;
    let dy = e.clientY - lastY;

    switch (mode) {
      case 'slow':
        dx *= 0.2;
        dy *= 0.2;
        break;
      case 'fast':
        dx *= 2;
        dy *= 2;
        break;
      case 'reverse':
        dx *= -1;
        dy *= -1;
        break;
      case 'teleport':
        posX = Math.random() * window.innerWidth;
        posY = Math.random() * window.innerHeight;
        break;
      case 'stuck':
        dx = 0;
        dy = 0;
        break;
      case 'shake':
        dx += (Math.random() - 0.5) * 20;
        dy += (Math.random() - 0.5) * 20;
        break;
      case 'circle':
        angle += 0.2;
        dx = Math.cos(angle) * 30;
        dy = Math.sin(angle) * 30;
        break;
      // normal ou qualquer modo desconhecido: cursor segue normalmente
    }

    posX += dx;
    posY += dy;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    lastX = e.clientX;
    lastY = e.clientY;
  });

  function changeMode() {
    const modes = ['normal', 'slow', 'fast', 'reverse', 'teleport', 'stuck', 'shake', 'circle', 'invisible'];
    mode = modes[Math.floor(Math.random() * modes.length)];

    if (mode === 'invisible') {
      cursor.style.opacity = '0';
      visible = false;
    } else {
      cursor.style.opacity = '1';
      visible = true;
    }

    setTimeout(changeMode, 3000); // muda modo a cada 3 segundos
  }

  changeMode();
}

window.cursedCursor = cursedCursor;
