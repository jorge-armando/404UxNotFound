/**
 * autoScroll
 * 
 * Função que faz a página rolar automaticamente para o final suavemente a cada 5 segundos.
 * 
 * Comportamento:
 * - Seleciona o elemento que controla a rolagem da página (scrollingElement ou documentElement).
 * - A cada 5 segundos, rola suavemente até o fim da página.
 */
function autoScroll() {
  const scrollElement = document.scrollingElement || document.documentElement;

  setInterval(() => {
    scrollElement.scrollTo({
      top: scrollElement.scrollHeight,
      behavior: 'smooth'
    });
  }, 5000);
}
