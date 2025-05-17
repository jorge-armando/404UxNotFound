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
