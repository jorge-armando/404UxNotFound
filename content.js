// Lista de funções
const evilFunctions = [
  () => autoScroll(),
  () => blurScreenOnPasswordInput(),
  () => cursedCursor(),
  () => decreaseFont(),
  () => disableScroll(),
  () => dvd(),
  () => enableInvertedScroll(),
  () => evasiveButtons(),
  () => flipScreen(),
  () => multiCursors(100),
  () => randomizeLinksOnClick(),
  () => showFakeNotRespondingAlert(10000),
  () => simulateInfiniteFormLoading(),
  () => startHellAds(),
  () => swapImages(memes),
  () => swapTypedKeysRandomly(),
  () => screenBlocker(),
  () => shuffleText(),
];

// Funções que já foram ativadas
const activated = new Set();

// Função para ativar uma aleatória que ainda não foi ativada
function activateRandomEvilFunction() {
  const remaining = evilFunctions.filter((_, i) => !activated.has(i));
  if (remaining.length === 0) return;

  const randomIndex = Math.floor(Math.random() * remaining.length);
  const realIndex = evilFunctions.findIndex(
    (f) => f === remaining[randomIndex]
  );

  remaining[randomIndex](); // Ativa a função
  activated.add(realIndex); // Marca como ativada
}

// Ativa uma função aleatória imediatamente
activateRandomEvilFunction();

// Depois ativa uma nova a cada 1 minuto
const interval = setInterval(() => {
  if (activated.size >= evilFunctions.length) {
    clearInterval(interval); // Todas já ativadas, para o intervalo
    return;
  }
  activateRandomEvilFunction();
}, 60000); // 60000ms = 1 minuto
