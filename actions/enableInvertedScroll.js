/**
 * enableInvertedScroll
 * 
 * Inverte o comportamento da rolagem do mouse na página.
 * 
 * Como funciona:
 * - Escuta o evento de roda do mouse (wheel) no elemento de scroll principal.
 * - Impede o comportamento padrão da rolagem.
 * - Aplica uma rolagem invertida: ao invés de rolar para baixo, rola para cima, e vice-versa.
 * 
 * Uso:
 * Apenas chame a função para ativar o scroll invertido na página atual.
 */
function enableInvertedScroll() {
  const scrollElement = document.scrollingElement || document.documentElement;

  scrollElement.addEventListener('wheel', function(event) {
    event.preventDefault();

    scrollElement.scrollBy({
      top: -event.deltaY, // inverte a direção da rolagem vertical
      left: 0,
      behavior: 'auto'
    });
  }, { passive: false });
}
