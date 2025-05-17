function spawnFakeAd() {
  const ad = document.createElement('div');
  const isAnnoying = Math.random() < 0.5;
  const shouldRedirect = Math.random() < 0.5;

  const redirectUrls = [
    'https://www.pointerpointer.com/',             // dedo apontando
    'https://www.koalastothemax.com/',              // arte gerada com círculos
    'https://www.zoomquilt.org/',                    // zoom infinito
    'https://www.partridgegetslucky.com/',           // paródia do Daft Punk
    'https://www.staggeringbeauty.com/',             // coisa maluca que sacode
    'https://cat-bounce.com/',                        // gatos pulando na tela
    'https://www.omfgdogs.com/',                      // cachorrinhos dançantes
    'https://www.sanger.dk/',                         // coisa esquisita dinamarquesa
    'https://hasthelargehadroncolliderdestroyedtheworldyet.com/', // pergunta boba
    'https://thatsthefinger.com/'                     // dedo médio
  ];

  ad.className = 'fake-ad';
  ad.innerHTML = `
    <strong>🎉 Você é o visitante 999.999!</strong><br>
    Clique aqui para receber um prêmio!<br>
    <button class="ad-close">Fechar</button>
  `;

  Object.assign(ad.style, {
    position: 'fixed',
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    transform: 'translate(-50%, -50%)',
    width: '260px',
    padding: '20px',
    backgroundColor: '#ffff00',
    border: '4px dashed red',
    boxShadow: '0 0 20px #ff0000',
    fontFamily: 'Comic Sans MS',
    fontSize: '16px',
    color: '#000',
    textAlign: 'center',
    zIndex: 999999999
  });

  setInterval(() => {
    ad.style.visibility = ad.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }, 400);

  if (isAnnoying) {
    const moveAd = () => {
      ad.style.top = `${Math.random() * 80 + 10}%`;
      ad.style.left = `${Math.random() * 80 + 10}%`;
    };
    setInterval(moveAd, 1500);
  }

  if (shouldRedirect) {
    const url = redirectUrls[Math.floor(Math.random() * redirectUrls.length)];
    ad.addEventListener('click', () => {
      window.open(url, '_blank');
    });
  }

  const closeBtn = ad.querySelector('.ad-close');
  closeBtn.style.marginTop = '10px';
  closeBtn.style.padding = '5px 10px';
  closeBtn.style.cursor = 'pointer';

  if (isAnnoying) {
    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.position = 'relative';
      closeBtn.style.top = `${(Math.random() - 0.5) * 100}px`;
      closeBtn.style.left = `${(Math.random() - 0.5) * 100}px`;
    });
  } else {
    closeBtn.addEventListener('click', () => ad.remove());
  }

  document.body.appendChild(ad);
}

function startHellAds(interval = 10000) {
  spawnFakeAd();
  setInterval(spawnFakeAd, interval);
}

window.startHellAds = startHellAds;
