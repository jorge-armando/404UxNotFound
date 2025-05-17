function flipScreen() {
  document.body.style.transform = 'scaleX(-1)';
  document.body.style.transformOrigin = 'center';
  document.body.style.transition = 'transform 0.5s ease';
}

window.flipScreen = flipScreen;
