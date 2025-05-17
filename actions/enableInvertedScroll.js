function enableInvertedScroll() {
  const scrollElement = document.scrollingElement || document.documentElement;

  scrollElement.addEventListener('wheel', function(event) {
    event.preventDefault();

    scrollElement.scrollBy({
      top: -event.deltaY,
      left: 0,
      behavior: 'auto'
    });
  }, { passive: false });
}
