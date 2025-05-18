/**
 * evasiveButtons
 * 
 * Faz os botões na página "fugirem" do cursor quando o mouse passar por cima.
 * 
 * Como funciona:
 * - Seleciona todos os elementos <button> da página.
 * - Para cada botão, adiciona um evento 'mouseenter' (quando o mouse entra no botão).
 * - Ao ativar o evento, o botão muda para posição absoluta e se move para uma posição aleatória dentro da janela.
 * 
 * Uso:
 * Basta chamar essa função para ativar o comportamento evasivo dos botões.
 */
function evasiveButtons() {
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.position = 'absolute';
      const maxTop = window.innerHeight - btn.offsetHeight;
      const maxLeft = window.innerWidth - btn.offsetWidth;
      btn.style.top = Math.random() * maxTop + 'px';
      btn.style.left = Math.random() * maxLeft + 'px';
    });
  });
}
