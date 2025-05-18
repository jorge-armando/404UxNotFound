// gera um erro a cada 10 segundos na página
function showFakeNotRespondingAlert(interval = 10000) {
  setInterval(() => {
    alert('A página não está respondendo. Deseja esperar ou sair?');
  }, interval);
}