function dvd(total = 30) {
  const cursors = [];
  const positions = [];
  const velocities = [];

  const cursorURL = chrome.runtime.getURL('img/dvd.png');

  const style = document.createElement('style');
  style.textContent = `
    body, * {
      cursor: none !important;
    }
    .fake-cursor {
      position: fixed;
      width: 100px;
      height: 100px;
      background-image: url('${cursorURL}');
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: 999999999;
      top: 0;
      left: 0;
      transition: none; /* pra ficar responsivo no movimento */
    }
  `;
  document.head.appendChild(style);

  // Cria os cursores, posições e velocidades iniciais
  for (let i = 0; i < total; i++) {
    const cursor = document.createElement('div');
    cursor.className = 'fake-cursor';
    document.body.appendChild(cursor);
    cursors.push(cursor);

    positions.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    velocities.push({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
    });
  }

  // Atualiza posição do cursor principal no mousemove
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Primeiro cursor segue mouse com atraso
    const p = positions[0];
    p.x += (mouseX - p.x) * 0.3;
    p.y += (mouseY - p.y) * 0.3;

    // Atualiza posição do cursor principal
    cursors[0].style.left = `${p.x}px`;
    cursors[0].style.top = `${p.y}px`;

    // Os outros movem aleatoriamente pela tela
    for (let i = 1; i < total; i++) {
      let pos = positions[i];
      let vel = velocities[i];

      pos.x += vel.x;
      pos.y += vel.y;

      // Se bater na borda, inverte velocidade
      if (pos.x < 0) {
        pos.x = 0;
        vel.x *= -1;
      } else if (pos.x > window.innerWidth - 17) {
        pos.x = window.innerWidth - 17;
        vel.x *= -1;
      }
      if (pos.y < 0) {
        pos.y = 0;
        vel.y *= -1;
      } else if (pos.y > window.innerHeight - 17) {
        pos.y = window.innerHeight - 17;
        vel.y *= -1;
      }

      cursors[i].style.left = `${pos.x}px`;
      cursors[i].style.top = `${pos.y}px`;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

window.multiFakeCursor = multiFakeCursor;
