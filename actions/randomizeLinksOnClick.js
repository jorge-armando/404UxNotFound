function randomizeLinksOnClick() {
  const allLinks = Array.from(document.querySelectorAll('a'));
  
  // Captura somente os links válidos e do mesmo domínio
  const validHrefs = allLinks
    .map(a => a.getAttribute('href'))
    .filter(href => href && !href.startsWith('#') && !href.startsWith('javascript:'))
    .map(href => {
      // Converte para URL absoluta se necessário
      try {
        return new URL(href, window.location.origin).href;
      } catch {
        return null;
      }
    })
    .filter(href => href && href.startsWith(window.location.origin));

  if (validHrefs.length === 0) return;

  allLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const randomHref = validHrefs[Math.floor(Math.random() * validHrefs.length)];
      console.log(`[!] Redirecionado para: ${randomHref}`);
      window.location.href = randomHref;
    });
  });
}
