function showFakeNotRespondingAlert(delay = 15000) {
  setTimeout(() => {
    alert('A página não está respondendo. Deseja esperar ou sair?');
  }, delay);
}

showFakeNotRespondingAlert(5000);
