function simulateInfiniteFormLoading() {
  document.querySelectorAll('form').forEach(form => {
    // Bloqueia o evento submit padrão
    form.addEventListener('submit', event => {
      event.preventDefault();
      lockSubmitButtons(form);
    });

    // Substitui o método form.submit para impedir envios via JS
    form._originalSubmit = form.submit;
    form.submit = function() {
      lockSubmitButtons(form);
      // não chama o original pra impedir envio real
    };

    // Bloqueia cliques nos botões submit para impedir submit imediato
    const submitButtons = form.querySelectorAll('button[type="submit"], input[type="submit"]');
    submitButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        lockSubmitButtons(form);
      });
    });
  });

  function lockSubmitButtons(form) {
    const submitButtons = form.querySelectorAll('button[type="submit"], input[type="submit"]');
    submitButtons.forEach(btn => {
      btn.disabled = true;
      btn.dataset.originalText = btn.textContent || btn.value;
      if (btn.tagName.toLowerCase() === 'button') {
        btn.textContent = 'Enviando...';
      } else if (btn.tagName.toLowerCase() === 'input') {
        btn.value = 'Enviando...';
      }
    });
  }
}