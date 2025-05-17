function shuffleWord(word) {
  if (word.length < 6) return word;

  const prefix = word.slice(0, 2);
  const middle = word.slice(2, -2).split("");
  const suffix = word.slice(-2);

  for (let i = middle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middle[i], middle[j]] = [middle[j], middle[i]];
  }

  return prefix + middle.join("") + suffix;
}

function shuffleText(text) {
  return text.replace(/\b\w{6,}\b/g, (match) => shuffleWord(match));
}

app.addAction("shuffleWords", () => {
  document.querySelectorAll("p").forEach((el) => {
    el.textContent = shuffleText(el.textContent);
  });
});
