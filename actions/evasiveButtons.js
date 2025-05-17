function evasiveButtons() {
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.position = 'absolute';
      btn.style.top = Math.random() * window.innerHeight + 'px';
      btn.style.left = Math.random() * window.innerWidth + 'px';
    });
  });
}
