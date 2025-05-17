function decreaseFont() {

  // Determina o tamanho da fonte
  var currentPx = Math.floor(Math.random() * 16);

  // Seleciona todos os elementos dentro do body
  const elements = document.querySelectorAll('body, body *');

  elements.forEach(el => {
    // Pega o estilo atual do elemento
    const currentStyle = window.getComputedStyle(el);
    
    // Pega o tamanho da fonte atual em pixels
    const currentSize = parseFloat(currentStyle.fontSize);

    // Se o tamanho atual for maior que o desejado, diminui
    if (currentSize > currentPx) {
      el.style.fontSize = `${currentPx}px`;
    }
  });
}

