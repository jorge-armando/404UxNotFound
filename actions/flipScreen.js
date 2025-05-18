/**
 * flipScreen
 * 
 * Inverte horizontalmente toda a tela da página.
 * 
 * Como funciona:
 * - Aplica uma transformação CSS ao elemento <body>, espelhando-o no eixo X.
 * - Define a origem da transformação no centro da tela.
 * - Adiciona uma transição suave para a transformação (0.5 segundos).
 * 
 * Uso:
 * Chame a função para que a página "espelhe" horizontalmente.
 */
function flipScreen() {
  document.body.style.transform = 'scaleX(-1)';
  document.body.style.transformOrigin = 'center';
  document.body.style.transition = 'transform 0.5s ease';
}

window.flipScreen = flipScreen;
