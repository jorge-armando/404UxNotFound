function swapTypedKeysRandomly() {
  const chance = 0.3; // chance fixa de 30% dentro da função
  const keyMap = {
    'a': 's',
    's': 'd',
    'd': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'a'
  };

  document.addEventListener('keydown', event => {
    if (Math.random() > chance) return; // sai sem trocar

    const active = document.activeElement;
    if (!active) return;

    const tag = active.tagName.toLowerCase();

    if (tag === 'input' || tag === 'textarea') {
      if (event.ctrlKey || event.altKey || event.metaKey || event.key.length !== 1) return;

      const key = event.key.toLowerCase();
      if (keyMap[key]) {
        event.preventDefault();

        const swappedChar = keyMap[key];
        const start = active.selectionStart;
        const end = active.selectionEnd;
        const value = active.value;

        if (typeof start === 'number' && typeof end === 'number') {
          active.value = value.slice(0, start) + swappedChar + value.slice(end);
          active.selectionStart = active.selectionEnd = start + 1;
        }
      }
    } else if (active.isContentEditable) {
      if (event.ctrlKey || event.altKey || event.metaKey || event.key.length !== 1) return;

      const key = event.key.toLowerCase();
      if (keyMap[key]) {
        event.preventDefault();

        const swappedChar = keyMap[key];
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const textNode = document.createTextNode(swappedChar);
        range.insertNode(textNode);

        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  });
}

