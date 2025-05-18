const evilFunctionNames = [
  "autoScroll",
  "blurScreenOnPasswordInput",
  "cursedCursor",
  "decreaseFont",
  "disableScroll",
  "dvd",
  "enableInvertedScroll",
  "evasiveButtons",
  "flipScreen",
  "multiCursors",
  "randomizeLinksOnClick",
  "showFakeNotRespondingAlert",
  "simulateInfiniteFormLoading",
  "startHellAds",
  "swapImages",
  "swapTypedKeysRandomly",
  "screenBlocker",
  "shuffleText"
];

const buttonLabels = [
  "Auto Scroll", "Blur Senha", "Cursor Chato", "Fonte Menor", "Desabilita Scroll", "Modo DVD",
  "Scroll Invert", "Botões Fugitivos", "Tela Espelho", "Multi Cursor", "Links Rand",
  "Alerta Fake", "Form Loop", "Ads Irratantes", "Imgs Rand", "Teclas Rand", "Bloquear Tela", "Texto Aleatório"
];

// Pegando colunas
const columns = [
  document.getElementById("col1"),
  document.getElementById("col2"),
  document.getElementById("col3")
];

// Criando botões
evilFunctionNames.forEach((name, index) => {
  const btn = document.createElement("button");
  btn.textContent = buttonLabels[index]; // aqui usamos o nome curto
  btn.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "activateByIndex",
        index: index
      });
    });
  };

  const colIndex = index % 3;
  columns[colIndex].appendChild(btn);
});

// Botão modo apocalipse
document.getElementById("apocalypseBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "activateAll" });
  });
});
